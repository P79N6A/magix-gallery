/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-status/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryc?:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryc?:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryc?:_" class="mb20 lh22 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><div>纯提示信息，无操作项</div></div></div><div mx-view="mx-status/index?info=';
    $line = 10;
    $art = '@{\n                value: 1,\n                text: \'正在投放\',\n                icon: \'<i class=\\"mc-iconfont\\">&#xe683;</i>\',\n                tip: \'当前正在投放中<br/>换一行\'\n                color: \'#51a300\'\n            }';
    ;
    $p += ($expr = '<%@{        value: 1,        text: \'正在投放\',        icon: \'<i class=\\"mc-iconfont\\">&#xe683;</i>\',        tip: \'当前正在投放中<br/>换一行\',        color: \'#51a300\'    }%>', $i($$ref, { value: 1, text: '正在投放', icon: '<i class=\"mc-iconfont\">&#xe683;</i>', tip: '当前正在投放中<br/>换一行', color: '#51a300' })) + '"></div></div><div mxa="_zs_galleryc?:b" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryc?:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 20;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryc?:c" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 22;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryc?:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-status \n    info="&#123;&#123;@&#123;\n        value: 1,\n        text: \'正在投放\',\n        icon: \'&lt;i class=\\"mc-iconfont\\"&gt;&#38;&#35;xe683;&lt;/i&gt;\',\n        tip: \'当前正在投放中\'\n        color: \'#51a300\'\n    &#125;&#125;&#125;"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-status/__test__/2.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({});
    }
});

});