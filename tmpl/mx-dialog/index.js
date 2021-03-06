let Magix = require('magix');
let $ = require('$');
let Vframe = Magix.Vframe;
let I18n = require('../mx-medusa/util');
Magix.applyStyle('@index.less');

let DialogZIndex = 500;
let Duration = 250;

let CacheList = [];
let RemoveCache = (view) => {
    for (let i = CacheList.length - 1, one; i >= 0; i--) {
        one = CacheList[i];
        if (one.id == view.id) {
            CacheList.splice(i, 1);
            break;
        }
    }
};

module.exports = Magix.View.extend({
    tmpl: '@index.html:updateby[]',
    init(extra) {
        let me = this;
        me.on('destroy', () => {
            RemoveCache(me);
            // 2 dialog + mask
            DialogZIndex -= 2;

            // 存在非手动关闭浮层的情况，比如浮层中有一个按钮从本页面跳走
            // 这时候需要关闭浮层
            $('#' + me.id).trigger('dlg_close');
        });

        DialogZIndex += 2;
        CacheList.push(me);

        if (!Magix.has(extra, 'closable')) {
            extra.closable = true;
        }

        me.updater.set(Magix.mix({
            cntId: 'cnt_' + me.id
        }, extra));
    },
    render() {
        let me = this;
        let updater = me.updater;
        let data = updater.get();
        updater.digest();

        setTimeout(me.wrapAsync(() => {
            let wrapper = $('#wrapper_' + me.id);
            wrapper.css(data.posTo);

            let cntId = data.cntId;
            if (data.full) {
                let h = window.innerHeight;
                let fh = $('#' + cntId + '_header'),
                    ff = $('#' + cntId + '_footer');
                if (fh && fh.length) {
                    h -= fh.outerHeight();
                }
                if (ff && ff.length) {
                    h -= ff.outerHeight();
                }

                // 全屏右出浮层
                let fcss = {
                    height: h - 2,
                    overflowY: 'auto'
                }
                if (data.card) {
                    fcss.backgroundColor = '#e8ebf2';
                    fcss.padding = '16px 24px';
                }
                $('#' + cntId).css(fcss);
            }

            let mask = $('#mask_' + me.id);
            if (mask.length > 0) {
                mask.addClass('@index.less:backdrop-out');
            } else {
                // 没有mask的时候，点击空白处关闭浮层
                wrapper.on('click', (e) => {
                    if (!Magix.inside(e.target, cntId + '_content')) {
                        $('#' + me.id).trigger('dlg_close');
                    }
                })
            }
            me.owner.mountVframe(cntId, data.view, data);

            wrapper.on('scroll', () => {
                // popover追加到body，滚动时通知节点改动定位
                $(document).trigger('dialogScolll');
            })
        }), Duration);
    },

    '@{notify.main.view.unload}'(e) {
        let vf = Vframe.get('cnt_' + this.id);
        vf && vf.invoke('fire', ['unload', e]);
    },

    /**
     * 全屏右出浮层提交按钮
     */
    '@{submit}<click>'(e) {
        let node = $(e.eventTarget);
        let cc = '@index.less:btn-submit-loading';

        if (node.hasClass(cc)) {
            // 防止重复提交
            return;
        }
        node.addClass(cc);
        node.append('<span class="mx-anim-loading @index.less:submit-loading"></span>');

        let me = this;
        let data = me.updater.get();
        let cntId = data.cntId;
        let vf = Vframe.get(cntId);
        vf.invoke('check').then(result => {
            node.find('.@index.less:submit-loading').remove();
            node.removeClass(cc);

            let errorNode = $('#' + cntId + '_footer_error');
            if (result.ok) {
                errorNode.html('');
                me['@{close}<click>']();

                if (data.callback) {
                    data.callback(result.data || {});
                }
            } else {
                if (result.msg) {
                    errorNode.html(`<i class="mc-iconfont displacement-2">&#xe6ad;</i>${result.msg}`);
                } else {
                    errorNode.html('');
                }
            }
        });
    },

    '@{close}<click>'() {
        $('#' + this.id).trigger('dlg_close');
    },

    '$doc<keyup>'(e) {
        if (e.keyCode == 27) { //esc
            let dlg = CacheList[CacheList.length - 1];
            if (dlg == this && dlg.updater.get('closable')) {
                let node = $('#' + dlg.id);
                node.trigger('dlg_close');
            }
        }
    }
}, {
    '@{dialog.show}'(view, options) {
        let id = Magix.guid('dlg_');
        if (options.mask) {
            let mask = $('<div class="@index.less:dialog-backdrop" id="mask_' + id + '" />');
            mask.css({
                zIndex: DialogZIndex - 1
            })
            $(document.body).append(mask);
        }

        let wrapperId = 'wrapper_' + id,
            wrapperZIndex = DialogZIndex,
            width = options.width,
            left = options.left,
            top = options.top;
        let wrapper = $(`<div class="@index.less:dialog-wrapper" id="${wrapperId}"
    style="z-index:${wrapperZIndex}">
    <div class="@index.less:dialog" id="${id}"
        style="top:${top}px; left:${left}px; width:${width}px;"></div>
</div>`);
        wrapper.css(options.posFrom);
        $(document.body).append(wrapper);

        // 禁止body滚动
        // 有滚动条的时候，加上右padding，防止页面抖动
        if (window.innerWidth - document.body.clientWidth > 0) {
            document.body.style.paddingRight = (window.innerWidth - document.body.clientWidth) + 'px';
        }
        document.body.style.overflowY = 'hidden';

        wrapper.css({
            overflowY: options.modal ? 'hidden' : 'auto'
        });

        let vf = view.owner.mountVframe(id, '@moduleId', options);
        let node = $('#' + id);
        let suspend;
        return node.on('dlg_close', () => {
            if (node.data('closed')) {
                return;
            }
            node.trigger({
                type: 'beforeClose',
                closeFn: () => {
                    if (!node.data('closing') && !suspend) {
                        let resume = () => {
                            node.data('closing', 1);

                            $('#wrapper_' + id).css(options.posFrom);
                            $('#mask_' + id).removeClass('@index.less:backdrop-out');

                            setTimeout(() => {
                                node.trigger('close');

                                // 不重复关闭
                                node.data('closed', 1);

                                if (view.owner) {
                                    view.owner.unmountVframe(id);
                                }
                                $('#wrapper_' + id).remove();
                                $('#mask_' + id).remove();

                                // 有浮层展开的情况下，body都不可滚动
                                if (CacheList.length == 0) {
                                    document.body.style.paddingRight = '';
                                    document.body.style.overflowY = '';
                                }
                            }, Duration);
                        };
                        let e = {
                            prevent() {
                                suspend = 1;
                            },
                            resolve() {
                                e.p = 1;
                                suspend = 0;
                                resume();
                            },
                            reject() {
                                e.p = 1;
                                suspend = 0;
                            }
                        };
                        vf.invoke('@{notify.main.view.unload}', [e]);
                        if (!suspend && !e.p) {
                            resume();
                        }
                    }
                }
            });
        });
    },

    /**
     * 系统提示
     * this.alert(title, content, enterCallback, dialogOptions)
     *    title: '标题',
     *    content: '内容',
     *    enterCallback: '点击确认按钮的回调',
     *    dialogOptions: { //浮层样式覆盖
     *       width:'宽度，默认320',
     *       height:'高度',
     *       btns: 'true or false，是否有按钮，默认true',
     *       modal: 'true（禁止滚动） or false（允许滚动），溢出是否允许滚动，默认false',
     *       mask: 'true or false，是否有遮罩，默认false',
     *       closable: 'true or false，是否有右上角关闭按钮，默认false',
     *       left: '最终定位相对于屏幕左侧，默认居中',
     *       top: '最终定位相对于屏幕高侧，默认居中'
     *    }
     */
    alert(title, content, enterCallback, dialogOptions) {
        dialogOptions = dialogOptions || {};
        let hasBtns = ((dialogOptions.btns + '') !== 'false');
        return this.mxDialog('@./alert', {
            title,
            content,
            enterCallback,
            hasBtns
        }, Magix.mix({
            width: 320,
            closable: false,
            mask: false
        }, dialogOptions))
    },

    /**
     * this.confirm(viewOptions, dialogOptions);
     *    viewOptions: {
     *       title: '标题',
     *       content: '内容',
     *       enterText: '自定义确定按钮文案，默认确定',
     *       cancelText: '自定义取消按钮文案，默认取消',
     *       enterCallback: '确定按钮响应事件',
     *       cancelCallback: '取消按钮响应事件'
     *    }
     *    dialogOptions: { //浮层样式覆盖
     *       width:'宽度',
     *       height:'高度',
     *       modal: 'true（禁止滚动） or false（允许滚动），溢出是否允许滚动，默认false',
     *       mask: 'true or false，是否有遮罩，默认false',
     *       closable: 'true or false，是否有右上角关闭按钮，默认false',
     *       left: '最终定位相对于屏幕左侧',
     *       top: '最终定位相对于屏幕高侧'
     *    }
     */
    confirm(viewOptions, dialogOptions) {
        return this.mxDialog('@./confirm', viewOptions, Magix.mix({
            width: 320,
            closable: false,
            mask: false
        }, (dialogOptions || {})));
    },

    /**
     * 分组
     * this.mxDialogGroup(viewOptions, dialogOptions)：
     *    viewOptions: {
     *        list:'传入的对象数组，如[{text:"测试",content:"内容"}]',
     *        contentView:'中间区域自定义view，会把当前选中对象完整传入',
     *        textKey: '右侧文案字段，默认text'
     *    },
     *    dialogOptions: { //浮层样式覆盖
     *        width:'宽度',
     *        height:'高度',
     *        modal: 'true（禁止滚动） or false（允许滚动），溢出是否允许滚动，默认false',
     *        mask: 'true or false，是否有遮罩，默认true',
     *        closable: 'true or false，是否有右上角关闭按钮，默认true',
     *        left: '最终定位相对于屏幕左侧，默认居中',
     *        top: '最终定位相对于屏幕高侧，默认居中'
     *    }
     */
    mxDialogGroup(viewOptions, dialogOptions) {
        viewOptions.height = dialogOptions.height || 500;
        return this.mxDialog('@./group', viewOptions, Magix.mix({
            width: 800,
            closable: true,
            mask: true
        }, (dialogOptions || {})));
    },

    /**
     * 全屏右出浮层
     * this.mxModal(viewPath[string], viewOptions[object], dialogOptions[object])
     *      viewPath: 'dialog view路径'
     *      viewOptions: {
     *          传入dialog的数据，挂载当前dialog实体
     *      }
     *      dialogOptions: { 浮层样式覆盖
     *          width:'宽度，默认600',
     *          mask: 'true or false，是否有遮罩',
     *          closable: 'true or false，是否有右上角关闭按钮'
     *          header: {
     *              title: '标题',
     *              tip: '提示信息'
     *          },
     *          footer: {
     *              enter: 'true or false，是否需要确定按钮',
     *              enterText: '确定按钮文案',
     *              cancel: 'true or false，是否需要取消按钮',
     *              cancelText: '取消按钮文案'
     *          }
     * 
     *          ==========================================
     *          无效参数：
     *          height:'高度固定全屏',
     *          left: '固定为doc.width - width',
     *          top: '固定为0',
     *          modal: '固定为false，禁止滚动',
     *      }
     */
    mxModal(view, viewOptions, dialogOptions) {
        dialogOptions = dialogOptions || {}
        return this.mxDialog(view, viewOptions, Magix.mix({
            closable: true,
            mask: true
        }, Magix.mix((dialogOptions || {}), {
            full: true,
            fullHeader: Magix.mix({
                title: '',
                tip: ''
            }, dialogOptions.header || {}),
            fullFooter: Magix.mix({
                enter: true,
                enterText: I18n['dialog.submit'],
                cancel: true,
                cancelText: I18n['dialog.cancel']
            }, dialogOptions.footer || {}),
            modal: false,
            height: window.innerHeight,
            placement: 'right',
            card: (dialogOptions.card + '' !== 'false')
        })));
    },


    /**
     * this.mxDialog(viewPath[string], viewOptions[object], dialogOptions[object])
     *    viewPath: 'dialog view路径'
     *    viewOptions: {
     *        传入dialog的数据，挂载当前dialog实体
     *    }, 
     *    dialogOptions: { //浮层样式覆盖
     *        width:'宽度',
     *        height:'高度',
     *        modal: 'true（禁止滚动） or false（允许滚动），溢出是否允许滚动，默认false',
     *        mask: 'true or false，是否有遮罩，默认true',
     *        closable: 'true or false，是否有右上角关闭按钮，默认true',
     *        left: '最终定位相对于屏幕左侧，默认居中',
     *        top: '最终定位相对于屏幕高侧，默认居中'
     *    }
     */
    mxDialog(view, viewOptions, dialogOptions) {
        let me = this;
        let dlg;
        let beforeCloseCallback,
            afterCloseCallback;

        let output = {
            beforeClose(fn) {
                // 关闭浮层前调用
                // return true 关闭
                // return false 不关闭浮层
                beforeCloseCallback = fn;
            },
            close() {
                if (dlg) {
                    dlg.trigger('dlg_close');
                }
            },
            afterClose(fn) {
                // 关闭浮层后调用
                afterCloseCallback = fn;
            }
        };

        let dOptions = {
            view: view
        };
        seajs.use(view, me.wrapAsync(V => {
            let key = '$dlg_' + view;
            if (me[key]) {
                return;
            }
            me[key] = 1;

            // 优先级：外部传入的 > view本身配置的 > 默认

            // 浮层内部的配置
            Magix.mix(dOptions, V.dialogOptions || {});

            // 调用时候的配置，浮层展示位置
            dialogOptions = dialogOptions || {};

            // 显示位置：
            //     center：居中
            //     right：右侧
            let placement = dialogOptions.placement || 'center';
            let width = dialogOptions.width || dOptions.width || 400,
                height = dialogOptions.height || dOptions.height || 260;

            let left, top, posFrom, posTo;
            let winWidth = window.innerWidth,
                winHeight = window.innerHeight;
            switch (placement){
                case 'center':
                    left = (winWidth - width) / 2;
                    top = Math.max((winHeight - height) / 2, 0);
                    posFrom = {
                        opacity: 0,
                        top: '-50px'
                    }
                    posTo = {
                        opacity: 1,
                        top: 0
                    }
                    break;
                case 'right':
                    left = winWidth - width;
                    top = 0;
                    posFrom = {
                        opacity: 0,
                        top: 0,
                        left: winWidth
                    }
                    posTo = {
                        opacity: 1,
                        top: 0,
                        left: 0
                    }
                    break;
            }
            Magix.mix(dOptions, Magix.mix({
                mask: true,
                modal: false,
                width: width,
                closable: true,
                left,
                top,
                posFrom,
                posTo
            }, dialogOptions));

            // 数据
            Magix.mix(dOptions, viewOptions);
            dOptions.dialog = output;
            dlg = me['@{dialog.show}'](me, dOptions);

            dlg.on('beforeClose', (event) => {
                if (!beforeCloseCallback || (beforeCloseCallback && beforeCloseCallback())) {
                    event.closeFn();
                }
            })

            dlg.on('close', () => {
                delete me[key];
                if (afterCloseCallback) {
                    afterCloseCallback();
                }
            });
        }));

        return output;
    },
    mxCloseAllDialogs() {
        CacheList.forEach(view => {
            let dlg = $('#' + view.id);
            if (dlg) {
                dlg.trigger('dlg_close');
            }
        })
    }
});