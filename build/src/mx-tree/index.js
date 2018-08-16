/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tree/index",["magix","./branch"],(require,exports,module)=>{
/*Magix*/
require("./branch");
var Magix = require("magix");
var Vframe = Magix.Vframe;
var ListToTree = function (list, id, pId, close) {
    var map = {}, listMap = {}, rootList = [];
    for (var i = 0, max = list.length; i < max; i++) {
        var one = Magix.mix({}, list[i]);
        one.close = close;
        map[one[id]] = one;
        if (listMap[one[id]]) {
            one.children = listMap[one[id]];
        }
        if (Magix.has(one, pId) && one[pId] !== '') {
            if (map[one[pId]]) {
                var c = map[one[pId]].children || (map[one[pId]].children = []);
                c.push(one);
            }
            else {
                if (!listMap[one[pId]])
                    listMap[one[pId]] = [one];
                else
                    listMap[one[pId]].push(one);
            }
        }
        else {
            rootList.push(one);
        }
    }
    return {
        list: rootList,
        map: map
    };
};
Magix.applyStyle("_zs_gallery_mx-tree_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-tree_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-tree_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-tree_index_-name {\n  position: relative;\n  height: 32px;\n  line-height: 20px;\n  padding-bottom: 12px;\n  background-color: #fff;\n  overflow: hidden;\n  transition: height 0.2s;\n}\n._zs_gallery_mx-tree_index_-name ._zs_gallery_mx-tree_index_-icon {\n  float: left;\n  height: 20px;\n  margin-right: 5px;\n  line-height: 20px;\n  color: #ccc;\n  transition: color 0.25s;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n._zs_gallery_mx-tree_index_-name ._zs_gallery_mx-tree_index_-oper {\n  cursor: pointer;\n  font-size: 14px;\n}\n._zs_gallery_mx-tree_index_-name ._zs_gallery_mx-tree_index_-oper:hover {\n  color: #666;\n}\n._zs_gallery_mx-tree_index_-close ._zs_gallery_mx-tree_index_-name {\n  height: 0;\n  padding-bottom: 0;\n}\n._zs_gallery_mx-tree_index_-li {\n  position: relative;\n}\n._zs_gallery_mx-tree_index_-indent {\n  padding-left: 20px;\n}\n._zs_gallery_mx-tree_index_-line {\n  position: relative;\n}\n._zs_gallery_mx-tree_index_-line ._zs_gallery_mx-tree_index_-li {\n  position: relative;\n}\n._zs_gallery_mx-tree_index_-line ._zs_gallery_mx-tree_index_-li:after {\n  content: '';\n  position: absolute;\n  top: 22px;\n  left: 7px;\n  bottom: 2px;\n  width: 1px;\n  background-color: #e6e6e6;\n}\n._zs_gallery_mx-tree_index_-line ._zs_gallery_mx-tree_index_-li:last-child:after {\n  content: none;\n}\n");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, viewId = $$.viewId, hasLine = $$.hasLine, readOnly = $$.readOnly, needExpand = $$.needExpand, textKey = $$.textKey, valueKey = $$.valueKey, list = $$.list; var $expr, $art, $line; try {
    $p += '<div mxv="readOnly,needExpand,list" id="tree_';
    $line = 1;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '" class="';
    $line = 2;
    $art = 'if hasLine';
    ;
    $p += '';
    $expr = '<%if(hasLine){%>';
    if (hasLine) {
        ;
        $p += ' _zs_gallery_mx-tree_index_-line ';
        $line = 2;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '" mx-view="mx-tree/branch?readOnly=';
    $line = 3;
    $art = '@readOnly';
    ;
    $p += '' + ($expr = '<%@readOnly%>', $i(readOnly)) + '&needExpand=';
    $line = 4;
    $art = '@needExpand';
    ;
    $p += '' + ($expr = '<%@needExpand%>', $i(needExpand)) + '&textKey=';
    $line = 5;
    $art = '=textKey';
    ;
    $p += '' + ($expr = '<%!$eu(textKey)%>', $eu(textKey)) + '&valueKey=';
    $line = 6;
    $art = '=valueKey';
    ;
    $p += '' + ($expr = '<%!$eu(valueKey)%>', $eu(valueKey)) + '&list=';
    $line = 7;
    $art = '@list';
    ;
    $p += '' + ($expr = '<%@list%>', $i(list)) + '&fromTop=';
    $line = 8;
    $art = '@true';
    ;
    $p += '' + ($expr = '<%@true%>', $i(true)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-tree/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        this['@{extra}'] = extra;
    },
    render: function () {
        var me = this;
        var ops = me['@{extra}'];
        var readOnly = (ops.readOnly + '') === 'true';
        var hasLine = (ops.hasLine + '') === 'true';
        var valueKey = ops.valueKey || 'value';
        var textKey = ops.textKey || 'text';
        var parentKey = ops.parentKey || 'pValue';
        // 是否需要全选功能，默认关闭
        var needAll = (ops.needAll + '') === 'true';
        // 是否可展开收起，默认false
        var needExpand = (ops.needExpand + '') === 'true';
        // 可展开收起的时候，默认false
        var close = (ops.close + '') === 'true';
        var info = ListToTree(ops.list, valueKey, parentKey, close);
        var list;
        if (needAll) {
            var all = {};
            all[valueKey] = 'all';
            all[textKey] = '全选';
            all.isAll = true;
            all.children = info.list;
            all.close = close;
            list = [all];
        }
        else {
            list = info.list;
        }
        me.updater.digest({
            viewId: me.id,
            valueKey: valueKey,
            textKey: textKey,
            list: list,
            readOnly: readOnly,
            hasLine: hasLine,
            needExpand: needExpand
        });
        var bottomValues = ops.bottomValues || [];
        if (bottomValues.length > 0) {
            me.setBottomValues(bottomValues);
        }
    },
    setBottomValues: function (bottomValues) {
        this.getBottom(function (vf) {
            vf.invoke('setValues', [bottomValues]);
        });
    },
    getBottomValues: function () {
        var me = this;
        var bottomValues = [];
        me.getBottom(function (vf) {
            var result = vf.invoke('getValues');
            bottomValues = bottomValues.concat(result);
        });
        return bottomValues;
    },
    getBottom: function (callback) {
        var me = this;
        var children = me.owner.children();
        var loop = function (children) {
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var c = children_1[_i];
                var vf = Vframe.get(c);
                var cc = vf.children();
                if (cc && (cc.length > 0)) {
                    loop(cc);
                }
                else {
                    if (callback) {
                        callback(vf);
                    }
                }
            }
        };
        loop(children);
    }
});

});