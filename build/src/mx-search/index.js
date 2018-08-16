/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-search/index",["magix","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,Monitor*/

var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-search_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-search_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-search_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n/**\n   css3注意点小计\n    - animation-fill-mode 动画结束停在最后一帧\n    - translate(-30%, 0) 百分比是相对于元素自己的宽高，margin-left:-30%; 是相对于父容器的宽高\n    - transition、animation动画不能设置display:none;\n    - :after, :before等伪元素目前不支持嵌套，未来会支持 [还有多重伪元素 div::before(3) { content: ”; }];\n      - :after.content 用法\n        { content:  }  - 加载指定资源图片\n        { content: attr(data-src) } - 读取当前节点上的自定义属性值\n        { content: content:\"选项\" counter(sectioncounter) \"： \";\n          counter-increment: sectioncounter;\n        } - 自动计数器 【参考资料：http://dev.opera.com/articles/view/automatic-numbering-with-css-counters/】\n\n    - box-sizing: [content-box | padding-box | border-box];\n      - 全局设置：\n        html {\n          box-sizing: border-box;\n        }\n        *, *:before, *:after {\n          box-sizing: inherit;\n        }\n        // 宽度包含了border以及padding，这在容器设置了100%百分比宽度时又设置了padding时很有用\n */\n/**\n* 渐显下拉动画\n*/\n@keyframes _zs_gallery_mx-search_index_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-search_index_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n._zs_gallery_mx-search_index_-search-box-right,\n._zs_gallery_mx-search_index_-search-box-left {\n  position: relative;\n  height: 32px;\n}\n._zs_gallery_mx-search_index_-search-box-right ._zs_gallery_mx-search_index_-search-menu,\n._zs_gallery_mx-search_index_-search-box-left ._zs_gallery_mx-search_index_-search-menu {\n  display: none;\n  position: absolute;\n  top: 100%;\n  min-width: 100%;\n  z-index: 99;\n  margin-top: 10px;\n  padding: 8px 10px;\n  border-radius: 4px;\n  background-color: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-search_index_-search-box-right ._zs_gallery_mx-search_index_-search-menu ._zs_gallery_mx-search_index_-search-item,\n._zs_gallery_mx-search_index_-search-box-left ._zs_gallery_mx-search_index_-search-menu ._zs_gallery_mx-search_index_-search-item {\n  margin: 2px 0;\n  padding: 0 10px;\n  cursor: pointer;\n  height: 26px;\n  line-height: 26px;\n  border-radius: 4px;\n  white-space: nowrap;\n  word-break: break-all;\n}\n._zs_gallery_mx-search_index_-search-box-right ._zs_gallery_mx-search_index_-search-menu ._zs_gallery_mx-search_index_-search-item:hover,\n._zs_gallery_mx-search_index_-search-box-left ._zs_gallery_mx-search_index_-search-menu ._zs_gallery_mx-search_index_-search-item:hover {\n  background-color: #f0f0f0;\n}\n._zs_gallery_mx-search_index_-search-box-right ._zs_gallery_mx-search_index_-search-menu ._zs_gallery_mx-search_index_-search-item._zs_gallery_mx-search_index_-active,\n._zs_gallery_mx-search_index_-search-box-left ._zs_gallery_mx-search_index_-search-menu ._zs_gallery_mx-search_index_-search-item._zs_gallery_mx-search_index_-active,\n._zs_gallery_mx-search_index_-search-box-right ._zs_gallery_mx-search_index_-search-menu ._zs_gallery_mx-search_index_-search-item._zs_gallery_mx-search_index_-active:hover,\n._zs_gallery_mx-search_index_-search-box-left ._zs_gallery_mx-search_index_-search-menu ._zs_gallery_mx-search_index_-search-item._zs_gallery_mx-search_index_-active:hover,\n._zs_gallery_mx-search_index_-search-box-right ._zs_gallery_mx-search_index_-search-menu ._zs_gallery_mx-search_index_-search-item._zs_gallery_mx-search_index_-active:active,\n._zs_gallery_mx-search_index_-search-box-left ._zs_gallery_mx-search_index_-search-menu ._zs_gallery_mx-search_index_-search-item._zs_gallery_mx-search_index_-active:active,\n._zs_gallery_mx-search_index_-search-box-right ._zs_gallery_mx-search_index_-search-menu ._zs_gallery_mx-search_index_-search-item._zs_gallery_mx-search_index_-active:focus,\n._zs_gallery_mx-search_index_-search-box-left ._zs_gallery_mx-search_index_-search-menu ._zs_gallery_mx-search_index_-search-item._zs_gallery_mx-search_index_-active:focus {\n  color: #fff;\n  background-color: #4d7fff;\n}\n._zs_gallery_mx-search_index_-search-box-right ._zs_gallery_mx-search_index_-search-menu._zs_gallery_mx-search_index_-open,\n._zs_gallery_mx-search_index_-search-box-left ._zs_gallery_mx-search_index_-search-menu._zs_gallery_mx-search_index_-open {\n  display: block;\n  -webkit-animation: _zs_gallery_mx-search_index_-fade-in-down 0.25s ease-out;\n          animation: _zs_gallery_mx-search_index_-fade-in-down 0.25s ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n._zs_gallery_mx-search_index_-search-box-right ._zs_gallery_mx-search_index_-search-menu {\n  right: 0;\n}\n._zs_gallery_mx-search_index_-search-box-left ._zs_gallery_mx-search_index_-search-menu {\n  left: 0;\n}\n");
var Monitor = require("../mx-monitor/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, align = $$.align, placeholder = $$.placeholder, searchValue = $$.searchValue, list = $$.list, show = $$.show, searchKey = $$.searchKey; var $expr, $art, $line; try {
    $p += '<div mxv class="search-box ';
    $line = 1;
    $art = 'if (align==\'right\')';
    ;
    $p += '';
    $expr = '<%if(align==\'right\'){%>';
    if (align == 'right') {
        ;
        $p += ' _zs_gallery_mx-search_index_-search-box-right ';
        $line = 1;
        $art = 'else';
        ;
        $p += '';
        $expr = '<%}else{%>';
    }
    else {
        ;
        $p += ' _zs_gallery_mx-search_index_-search-box-left ';
        $line = 1;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '"><i mxs="_zs_gallerybU:_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="';
    $line = 3;
    $art = '=placeholder';
    ;
    $p += '' + ($expr = '<%=placeholder%>', $e(placeholder)) + '" value="';
    $line = 4;
    $art = '=searchValue';
    ;
    $p += '' + ($expr = '<%=searchValue%>', $e(searchValue)) + '" mx-keyup="' + $viewId + '@{search}()" mx-paste="' + $viewId + '@{search}()" mx-focusin="' + $viewId + '@{search}()" mx-focusout="' + $viewId + '@{stop}()" mx-change="' + $viewId + '@{stop}()"/><ul class="_zs_gallery_mx-search_index_-search-menu ';
    $line = 11;
    $art = 'if ((list.length > 1) && searchValue && show)';
    ;
    $p += '';
    $expr = '<%if((list.length>1)&&searchValue&&show){%>';
    if ((list.length > 1) && searchValue && show) {
        ;
        $p += ' _zs_gallery_mx-search_index_-open ';
        $line = 11;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '">';
    $line = 12;
    $art = 'each list as item';
    ;
    $p += '';
    $expr = '<%for(var $art_idagccl$art_i=0;$art_idagccl$art_i<list.length;$art_idagccl$art_i++){var item=list[$art_idagccl$art_i]%>';
    for (var $art_idagccl$art_i = 0; $art_idagccl$art_i < list.length; $art_idagccl$art_i++) {
        var item = list[$art_idagccl$art_i];
        $p += '<li class="_zs_gallery_mx-search_index_-search-item ';
        $line = 13;
        $art = 'if (searchKey == item.value)';
        ;
        $p += '';
        $expr = '<%if(searchKey==item.value){%>';
        if (searchKey == item.value) {
            ;
            $p += ' _zs_gallery_mx-search_index_-active ';
            $line = 13;
            $art = '/if';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '" mx-click="' + $viewId + '@{select}({item:\'';
        $line = 13;
        $art = '@item';
        ;
        $p += '' + ($expr = '<%@item%>', $i(item)) + '\'})">搜索含有“';
        $line = 14;
        $art = '=searchValue';
        ;
        $p += '' + ($expr = '<%=searchValue%>', $e(searchValue)) + '”的';
        $line = 14;
        $art = '=item.text';
        ;
        $p += '' + ($expr = '<%=item.text%>', $e(item.text)) + '</li>';
        $line = 16;
        $art = '/each';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</ul></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-search/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var that = this;
        //初始化时保存一份当前数据的快照
        that.updater.snapshot();
        //该处是否可以由magix自动调用
        that.assign(extra);
        Monitor['@{setup}']();
        that.on('destroy', function () {
            Monitor['@{remove}'](that);
            Monitor['@{teardown}']();
            if (that['@{search.delay.timer}']) {
                clearTimeout(that['@{search.delay.timer}']);
            }
        });
    },
    assign: function (data) {
        var that = this;
        //赋值前先进行数据变化的检测,首次assign是在init方法中调用,后续的调用是magix自动调用,这个检测主要用于在首次调用后,magix自动调用前有没有进行数据的更新
        var altered = that.updater.altered();
        //你可以在这里对数据data进行加工,然后通过set方法放入到updater中
        that['@{search.key}'] = data.searchKey || ''; //当前选中的key值
        // 上下键切换缓存
        that['@{search.key.bak}'] = that['@{search.key}'];
        that['@{search.value}'] = data.searchValue || ''; //当前填入的搜索内容
        that['@{dis.placeholder}'] = data.placeholder || '';
        that['@{dis.align}'] = data.align || 'left';
        // 多种类型搜索的时候
        var list = [];
        if (data.list) {
            var listText_1 = data.listText || 'text';
            var listValue_1 = data.listValue || 'value';
            try {
                list = (new Function('return ' + data.list))();
            }
            catch (e) {
                list = data.list;
            }
            list = list.map(function (item) {
                return {
                    text: item[listText_1],
                    value: item[listValue_1]
                };
            });
            if (!that['@{dis.placeholder}']) {
                that['@{dis.placeholder}'] = list.map(function (item) {
                    return item.text;
                }).join('/');
            }
        }
        else {
            if (!that['@{dis.placeholder}']) {
                that['@{dis.placeholder}'] = '搜索';
            }
        }
        that['@{data.list}'] = list;
        that['@{owner.node}'] = $('#' + that.id);
        that.updater.set({
            viewId: that.id,
            list: that['@{data.list}'],
            searchValue: that['@{search.value}'],
            searchKey: that['@{search.key}'],
            placeholder: that['@{dis.placeholder}'],
            align: that['@{dis.align}']
        });
        //如果数据没变化,则设置新的数据后再次检测
        if (!altered) {
            altered = that.updater.altered();
        }
        //如果有变化,则再保存当前的快照,然后返回true告诉magix当前view需要更新
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        //如果数据没变化,则告诉magix当前view不用更新
        return false;
    },
    render: function () {
        this.updater.digest();
    },
    '@{search}<focusin,keyup,paste>': function (e) {
        e.stopPropagation();
        var that = this;
        if (that['@{search.delay.timer}']) {
            clearTimeout(that['@{search.delay.timer}']);
        }
        var show = that.updater.get('show'), list = that['@{data.list}'];
        if (e.keyCode == 40 || e.keyCode == 38) {
            // 下移 || 上移
            if (show) {
                var idx = -1, searchKey = that['@{search.key}'];
                for (var index = 0; index < list.length; index++) {
                    if (list[index].value == searchKey) {
                        idx = index;
                        break;
                    }
                }
                if (e.keyCode == 40) {
                    // 下移
                    idx += 1;
                    if (idx >= list.length) {
                        idx = 0;
                    }
                }
                if (e.keyCode == 38) {
                    // 下移
                    idx -= 1;
                    if (idx < 0) {
                        idx = list.length - 1;
                    }
                }
                that.updater.digest({
                    searchKey: that['@{search.key}'] = list[idx].value
                });
            }
        }
        else if (e.keyCode == 13) {
            // 未选中时，回车默认第一个，已选中的情况下还是当前选项
            if (!that['@{search.key}'] && list && list.length > 0) {
                that['@{search.key}'] = list[0].value;
            }
            that['@{search.key.bak}'] = that['@{search.key}'];
            that['@{search.value}'] = $.trim(e.eventTarget.value);
            that['@{hide}']();
            that['@{fire}']();
        }
        else {
            that['@{search.delay.timer}'] = setTimeout(that.wrapAsync(function () {
                that['@{search.value}'] = $.trim(e.eventTarget.value);
                that['@{show}']();
            }), 300);
        }
    },
    '@{hide}': function () {
        var that = this;
        if (that['@{search.key}'] != that['@{search.key.bak}']) {
            // 上下键切换未选择
            that['@{search.key}'] = that['@{search.key.bak}'];
        }
        that.updater.digest({
            searchKey: that['@{search.key}'],
            searchValue: that['@{search.value}'],
            show: false
        });
        Monitor['@{remove}'](that);
    },
    '@{show}': function () {
        var that = this;
        that.updater.digest({
            searchKey: that['@{search.key}'],
            searchValue: that['@{search.value}'],
            show: true
        });
        Monitor['@{add}'](that);
    },
    '@{inside}': function (node) {
        return Magix.inside(node, this.id);
    },
    '@{stop}<change,focusout>': function (e) {
        e.stopPropagation();
    },
    '@{select}<click>': function (e) {
        e.stopPropagation();
        var that = this;
        var item = e.params.item;
        that.updater.digest({
            searchKey: that['@{search.key}'] = that['@{search.key.bak}'] = item.value,
            show: false
        });
        that['@{fire}']();
    },
    '@{fire}': function () {
        var that = this;
        that['@{owner.node}'].trigger({
            type: 'search',
            searchKey: that['@{search.key}'],
            searchValue: that['@{search.value}']
        });
    }
});

});