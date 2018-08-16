/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/index",["magix","$","../mx-monitor/index","../mx-medusa/util"],(require,exports,module)=>{
/*Magix,$,Monitor,I18n*/

var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
var I18n = require("../mx-medusa/util");
Magix.applyStyle("_zs_gallery_mx-dropdown_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-dropdown_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-dropdown_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n/**\n   css3注意点小计\n    - animation-fill-mode 动画结束停在最后一帧\n    - translate(-30%, 0) 百分比是相对于元素自己的宽高，margin-left:-30%; 是相对于父容器的宽高\n    - transition、animation动画不能设置display:none;\n    - :after, :before等伪元素目前不支持嵌套，未来会支持 [还有多重伪元素 div::before(3) { content: ”; }];\n      - :after.content 用法\n        { content:  }  - 加载指定资源图片\n        { content: attr(data-src) } - 读取当前节点上的自定义属性值\n        { content: content:\"选项\" counter(sectioncounter) \"： \";\n          counter-increment: sectioncounter;\n        } - 自动计数器 【参考资料：http://dev.opera.com/articles/view/automatic-numbering-with-css-counters/】\n\n    - box-sizing: [content-box | padding-box | border-box];\n      - 全局设置：\n        html {\n          box-sizing: border-box;\n        }\n        *, *:before, *:after {\n          box-sizing: inherit;\n        }\n        // 宽度包含了border以及padding，这在容器设置了100%百分比宽度时又设置了padding时很有用\n */\n/**\n* 渐显下拉动画\n*/\n@keyframes _zs_gallery_mx-dropdown_index_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-dropdown_index_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle {\n  position: relative;\n  width: 100%;\n  padding: 0 25px 0 10px;\n  color: #999;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-dropdown-toggle-label {\n  display: block;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-dropdown-toggle-label._zs_gallery_mx-dropdown_index_-dropdown-toggle-label-ph {\n  color: #999;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 28px;\n  height: 28px;\n  font-size: 28px;\n  line-height: 28px;\n  margin-top: -14px;\n  color: #ccc;\n  transition: top 0.25s, -webkit-transform 0.25s;\n  transition: transform 0.25s, top 0.25s;\n  transition: transform 0.25s, top 0.25s, -webkit-transform 0.25s;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle._zs_gallery_mx-dropdown_index_-open ._zs_gallery_mx-dropdown_index_-arrow {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n._zs_gallery_mx-dropdown_index_-item-link {\n  display: block;\n  width: 100%;\n  padding: 0 8px;\n  cursor: pointer;\n  height: 26px;\n  line-height: 26px;\n  border-radius: 4px;\n}\n._zs_gallery_mx-dropdown_index_-item-link:hover {\n  background-color: #f0f0f0;\n}\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active,\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active:hover,\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active:active,\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active:focus {\n  color: #fff;\n  background-color: #4d7fff;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-header-item ._zs_gallery_mx-dropdown_index_-item-link:hover {\n  background-color: transparent;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 99;\n  min-width: 100%;\n  max-width: 200%;\n  margin-top: 10px;\n  border-radius: 4px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #fff;\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-search-wrapper {\n  width: 100%;\n  padding: 10px 10px 0 10px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-menu {\n  padding: 8px 10px;\n  overflow: auto;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-menu ._zs_gallery_mx-dropdown_index_-dropdown-item {\n  padding: 2px 0;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-menu ._zs_gallery_mx-dropdown_index_-dropdown-header {\n  color: #999;\n  cursor: default;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper._zs_gallery_mx-dropdown_index_-open {\n  display: block;\n  -webkit-animation: _zs_gallery_mx-dropdown_index_-fade-in-down 0.25s ease-out;\n          animation: _zs_gallery_mx-dropdown_index_-fade-in-down 0.25s ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group {\n  min-width: 600px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group ._zs_gallery_mx-dropdown_index_-search-wrapper {\n  width: 200px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group ._zs_gallery_mx-dropdown_index_-dropdown-menu ._zs_gallery_mx-dropdown_index_-group-wrapper {\n  margin-bottom: 10px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group ._zs_gallery_mx-dropdown_index_-dropdown-menu ._zs_gallery_mx-dropdown_index_-group-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-item {\n  float: left;\n  width: 25%;\n}\n._zs_gallery_mx-dropdown_index_-dropdown,\n[mx-view*=\"mx-dropdown/index\"],\n[mx-view*=\"mx-dropdown/multiple\"] {\n  position: relative;\n  display: inline-block;\n  min-width: 100px;\n  height: 32px;\n  line-height: 30px;\n  vertical-align: middle;\n  border-color: #e6e6e6;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 4px;\n  background-color: #fff;\n  outline: 0;\n  transition: border-color 0.25s;\n}\n._zs_gallery_mx-dropdown_index_-dropdown:hover,\n[mx-view*=\"mx-dropdown/index\"]:hover,\n[mx-view*=\"mx-dropdown/multiple\"]:hover {\n  border-color: #ccc;\n}\n._zs_gallery_mx-dropdown_index_-dropdown:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/index\"]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/multiple\"]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle {\n  color: #666;\n}\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled],\n[mx-view*=\"mx-dropdown/index\"][mx-disabled],\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled],\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled]:hover,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled]:hover,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled]:hover {\n  border-color: #e6e6e6;\n  cursor: not-allowed;\n  background-color: #eee;\n}\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle {\n  color: #999;\n}\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow {\n  color: #ccc;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper {\n  padding: 10px 10px 0 10px;\n  line-height: 16px;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper ._zs_gallery_mx-dropdown_index_-oper {\n  padding-right: 20px;\n  color: #999;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper ._zs_gallery_mx-dropdown_index_-oper:hover {\n  color: #4d7fff;\n}\n._zs_gallery_mx-dropdown_index_-footer-wrapper {\n  padding: 10px;\n  border-top: 1px solid #e6e6e6;\n}\n");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, expand = $$.expand, selected = $$.selected, name = $$.name, selectedText = $$.selectedText, rList = $$.rList, searchbox = $$.searchbox, searchText = $$.searchText, keyword = $$.keyword, viewId = $$.viewId, height = $$.height, list = $$.list, textKey = $$.textKey, valueKey = $$.valueKey, spm = $$.spm; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-dropdown_index_-dropdown-toggle ';
    $expr = '<%if(expand){%>';
    if (expand) {
        ;
        $p += ' _zs_gallery_mx-dropdown_index_-open ';
        $expr = '<%}%>';
    }
    ;
    $p += '"><span class="_zs_gallery_mx-dropdown_index_-dropdown-toggle-label ';
    $expr = '<%if(selected===\'\'){%>';
    if (selected === '') {
        ;
        $p += ' _zs_gallery_mx-dropdown_index_-dropdown-toggle-label-ph';
        $expr = '<%}%>';
    }
    ;
    $p += '">';
    $expr = '<%if(name){%>';
    if (name) {
        ;
        $p += '';
        $line = 3;
        $art = '=name';
        ;
        $p += '' + ($expr = '<%=name%>', $e(name)) + '：';
        $expr = '<%}%>';
    }
    ;
    $p += ' ' + ($expr = '<%=selectedText%>', $e(selectedText)) + '</span><span mxs="_zs_galleryab:_" class="mc-iconfont _zs_gallery_mx-dropdown_index_-arrow">&#xe692;</span></div><div mxv class="_zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ';
    $expr = '<%if(expand){%>';
    if (expand) {
        ;
        $p += ' _zs_gallery_mx-dropdown_index_-open ';
        $expr = '<%}%>';
    }
    ;
    $p += '">';
    $expr = '<%if(rList){%>';
    if (rList) {
        ;
        $p += ' ';
        $expr = '<%if(searchbox){%>';
        if (searchbox) {
            ;
            $p += '<div mxv mxa="_zs_galleryab:_" class="_zs_gallery_mx-dropdown_index_-search-wrapper"><div mxv mxa="_zs_galleryab:a" class="search-box"><i mxs="_zs_galleryab:a" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="' + ($expr = '<%=searchText%>', $e(searchText)) + '" mx-keyup="' + $viewId + '@{search}()" mx-paste="' + $viewId + '@{search}()" mx-change="' + $viewId + '@{stop}()" mx-focusin="' + $viewId + '@{stop}()" mx-focusout="' + $viewId + '@{stop}()" value="' + ($expr = '<%=keyword%>', $e(keyword)) + '"/></div></div>';
            $expr = '<%}%>';
        }
        ;
        $p += '<ul class="_zs_gallery_mx-dropdown_index_-dropdown-menu" id="list_' + ($expr = '<%=viewId%>', $e(viewId)) + '" style="max-height:';
        $line = 26;
        $art = '=height';
        ;
        $p += '' + ($expr = '<%=height%>', $e(height)) + 'px;">';
        $expr = '<%var text=void 0,value=void 0%>';
        var text = void 0, value = void 0;
        $p += ' ';
        $expr = '<%for(var _i=0,list_1=list;_i<list_1.length;_i++){var item=list_1[_i];%>';
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var item = list_1[_i];
            ;
            $p += ' ';
            $expr = '<%text=item[textKey];value=item[valueKey]%>';
            text = item[textKey];
            value = item[valueKey];
            $p += ' ';
            $expr = '<%if(item&&item.group){%>';
            if (item && item.group) {
                ;
                $p += '<li class="_zs_gallery_mx-dropdown_index_-dropdown-header ellipsis" title="' + ($expr = '<%=item[textKey]%>', $e(item[textKey])) + '">' + ($expr = '<%=item[textKey]%>', $e(item[textKey])) + '</li>';
                $expr = '<%}else{%>';
            }
            else {
                ;
                $p += '<li title="' + ($expr = '<%=text%>', $e(text)) + '" class="_zs_gallery_mx-dropdown_index_-dropdown-item">';
                $expr = '<%var equal=(value+\'\')===(selected+\'\')%>';
                var equal = (value + '') === (selected + '');
                $p += '<span class="_zs_gallery_mx-dropdown_index_-item-link ellipsis';
                $expr = '<%if(equal){%>';
                if (equal) {
                    ;
                    $p += ' _zs_gallery_mx-dropdown_index_-active';
                    $expr = '<%}%>';
                }
                ;
                $p += '" mx-click="' + $viewId + '@{select}({item:\'' + ($expr = '<%@item%>', $i(item)) + '\'})" ';
                $expr = '<%if(spm){%>';
                if (spm) {
                    ;
                    $p += ' data-spm-click="' + ($expr = '<%=spm%>', $e(spm)) + '" ';
                    $expr = '<%}%>';
                }
                ;
                $p += '>' + ($expr = '<%=text%>', $e(text)) + '</span></li>';
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $expr = '<%}%>';
        }
        ;
        $p += '</ul>';
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/index.html';
    throw msg;
} return $p; },
    init: function (ops) {
        var me = this;
        Monitor['@{setup}']();
        me.on('destroy', function () {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
        me.updater.set({
            viewId: me.id
        });
        me['@{owner.node}'] = $('#' + me.id);
        var selected = me['@{selected}'] = ops.selected;
        var textKey = me['@{textKey}'] = ops.textKey || 'text';
        var valueKey = me['@{valueKey}'] = ops.valueKey || 'value';
        var emptyText = me['@{emptyText}'] = ops.emptyText || '';
        me['@{ui.searchbox}'] = (ops.searchbox + '') === 'true';
        var disabledNode = $('#' + me.id + '[mx-disabled]');
        me['@{ui.disabled}'] = disabledNode && (disabledNode.length > 0);
        me['@{ui.dark}'] = (ops.colorType == 'dark');
        me['@{ui.height}'] = (ops.height || 250);
        // 列表是否展开
        me['@{ui.expand}'] = false;
        me['@{ui.name}'] = ops.name || '';
        // trigger方式，click，hover，默认click
        me['@{trigger.type}'] = ops.triggerType || 'click';
        // 埋点
        me['@{ui.spm}'] = me['@{owner.node}'].attr('data-spm-click') || '';
        var list = [];
        if (!ops.list) {
            var node = me['@{owner.node}'].children();
            var group_1;
            node.each(function (idx, item) {
                item = $(item);
                group_1 = item.attr('group') == 'true';
                list.push({
                    group: group_1,
                    text: item.text(),
                    value: group_1 ? Magix.guid() : item.attr('value')
                });
            });
            textKey = me['@{textKey}'] = 'text';
            valueKey = me['@{valueKey}'] = 'value';
        }
        else {
            // 直接配数据不支持分组
            try {
                list = JSON.parse(ops.list);
            }
            catch (e) {
                list = ops.list;
            }
            if (typeof list[0] === 'object') {
                // 本身是个对象
            }
            else {
                // 直接value列表
                list = list.map(function (value) {
                    var temp = {};
                    temp[textKey] = value;
                    temp[valueKey] = value;
                    return temp;
                });
            }
        }
        me['@{list}'] = list;
        var map = Magix.toMap(list, valueKey);
        if (emptyText) {
            if (!map['']) {
                var temp = {};
                temp[textKey] = emptyText;
                temp[valueKey] = '';
                list.unshift(temp);
                map[''] = temp;
            }
        }
        if (!selected || !map[selected]) {
            var firstItem = {};
            for (var i = 0; i < list.length; i++) {
                if (!list[i].group) {
                    firstItem = list[i];
                    break;
                }
            }
            selected = map[selected] || firstItem;
            if (textKey && valueKey) {
                selected = selected[valueKey];
            }
        }
        me['@{selected}'] = selected;
        me['@{selected.text}'] = map[selected][textKey];
    },
    '@{inside}': function (node) {
        return Magix.inside(node, this.id);
    },
    render: function () {
        var me = this;
        me['@{ui.update}'](true);
        var triggerType = me['@{trigger.type}'];
        var triggerNode = $('#' + me.id + ' ._zs_gallery_mx-dropdown_index_-dropdown-toggle');
        switch (triggerType) {
            case 'click':
                triggerNode.on('click', function () {
                    if (me['@{ui.expand}']) {
                        me['@{hide}']();
                    }
                    else if (!me['@{ui.disabled}']) {
                        me['@{show}']();
                    }
                });
                break;
            case 'hover':
                triggerNode.hover(function () {
                    clearTimeout(me['@{dealy.hide.timer}']);
                    me['@{show}']();
                }, function () {
                    me['@{delay.hide}']();
                });
                var wrapper = $('#' + me.id + ' ._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper');
                wrapper.hover(function () {
                    clearTimeout(me['@{dealy.hide.timer}']);
                }, function () {
                    me['@{delay.hide}']();
                });
                break;
        }
    },
    '@{delay.hide}': function () {
        var me = this;
        clearTimeout(me['@{dealy.hide.timer}']);
        me['@{dealy.hide.timer}'] = setTimeout(me.wrapAsync(function () {
            me['@{hide}']();
        }), 250);
    },
    '@{hide}': function () {
        var me = this;
        if (me['@{ui.expand}']) {
            me.updater.digest({
                expand: me['@{ui.expand}'] = false
            });
            me['@{owner.node}'].trigger('focusout');
            Monitor['@{remove}'](me);
        }
    },
    '@{show}': function () {
        var me = this;
        if (!me['@{ui.expand}']) {
            var d = {
                expand: me['@{ui.expand}'] = true
            };
            var r = me.updater.get('rList');
            if (!r) {
                d.rList = true;
            }
            me.updater.digest(d);
            me['@{owner.node}'].trigger('focusin');
            var listNode = $('#list_' + me.id);
            var active = listNode.find('._zs_gallery_mx-dropdown_index_-active');
            var pos = active.position();
            var height = listNode.height();
            var stop = listNode.prop('scrollTop');
            if (pos && (pos.top < 0 || pos.top > height)) {
                var top = pos.top - height + stop + height / 2;
                listNode.prop('scrollTop', top);
            }
            Monitor['@{add}'](me);
        }
    },
    '@{ui.update}': function (ignoreFireEvent) {
        var me = this;
        var selected = me['@{selected}'];
        me.updater.digest({
            textKey: me['@{textKey}'],
            valueKey: me['@{valueKey}'],
            selected: selected,
            searchbox: me['@{ui.searchbox}'],
            searchText: I18n['dropdown.search'],
            selectedText: me['@{selected.text}'],
            list: me['@{list}'].slice(),
            expand: me['@{ui.expand}'],
            height: me['@{ui.height}'],
            spm: me['@{ui.spm}'],
            name: me['@{ui.name}']
        });
        me['@{owner.node}'].val(selected);
        if (!ignoreFireEvent) {
            me['@{fire.event}'](selected);
        }
    },
    '@{fn.search}': function (val, callback) {
        var me = this;
        clearTimeout(me['@{search.timer}']);
        var srcList = me['@{list}'];
        var newList = [];
        var index = 0;
        var max = srcList.length;
        var textKey = me['@{textKey}'];
        var valueKey = me['@{valueKey}'];
        if (!val) {
            callback(srcList);
            return;
        }
        var go = function () {
            if (index < max) {
                var end = Math.min(index + 400, max);
                for (var i = index, li = void 0, text = void 0, value = void 0; i < end; i++) {
                    li = srcList[i];
                    text = li;
                    value = li;
                    if (textKey && valueKey) {
                        text = li[textKey];
                        value = li[valueKey];
                    }
                    if ((text + '').indexOf(val) >= 0 || (value + '').indexOf(val) >= 0) {
                        newList.push(li);
                    }
                }
                index = end;
                me['@{search.timer}'] = setTimeout(me.wrapAsync(go), 20);
            }
            else {
                callback(newList);
            }
        };
        go();
    },
    '@{fire.event}': function (item, compare) {
        var me = this;
        var updater = me.updater;
        var valueKey = me['@{valueKey}'];
        var textKey = me['@{textKey}'];
        var lastSelected = me['@{selected}'];
        var selected = item[valueKey];
        var selectedText = item[textKey];
        if (!compare || lastSelected !== selected) {
            updater.set({
                selected: me['@{selected}'] = selected
            });
            var event = $.Event('change', {
                item: item,
                keys: {
                    text: textKey,
                    value: valueKey
                },
                value: item[valueKey],
                text: item[textKey],
                selected: item[valueKey]
            });
            if (!event.isDefaultPrevented()) {
                updater.digest({
                    selected: selected,
                    selectedText: selectedText
                });
            }
            else {
                updater.set({
                    selected: lastSelected
                });
            }
            me['@{owner.node}'].val(valueKey ? item[valueKey] : item).trigger(event);
        }
    },
    '@{search}<keyup,paste>': function (e) {
        var me = this;
        e.stopPropagation();
        clearTimeout(me['@{search.delay.timer}']);
        var val = $.trim(e.eventTarget.value);
        me.updater.set({
            keyword: val
        });
        me['@{search.delay.timer}'] = setTimeout(me.wrapAsync(function () {
            if (val != me['@{last.search.value}']) {
                me['@{fn.search}'](me['@{last.search.value}'] = val, function (list) {
                    me.updater.digest({
                        list: list
                    });
                });
            }
        }), 300);
    },
    '@{select}<click>': function (e) {
        var me = this;
        me['@{fire.event}'](e.params.item, true);
        me['@{hide}']();
    },
    '@{stop}<change,focusin,focusout>': function (e) {
        e.stopPropagation();
    }
});

});