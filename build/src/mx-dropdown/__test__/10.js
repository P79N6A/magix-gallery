/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/__test__/10",["magix","__test__/example","$","../multiple","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../multiple");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallery[:_" class="_zs_gallery___test___base_-example"><div mxa="_zs_gallery[:a" class="_zs_gallery___test___base_-eg-content"><div mxa="_zs_gallery[:b" class="mb20"><div class="w200" mx-view="mx-dropdown/multiple?list=';
    $line = 5;
    $art = '@[1,2,3]';
    ;
    $p += '' + ($expr = '<%@[1,2,3]%>', $i([1, 2, 3])) + '"></div></div><div mxs="_zs_gallery[:_" class="w200" mx-view="mx-dropdown/multiple"><i value="1" class="none">1</i><i value="2" class="none">2</i><i value="3" class="none">3</i></div></div><div mxa="_zs_gallery[:c" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallery[:a" class="_zs_gallery___test___base_-eg-title">显示文案和前后端传递值一致</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 16;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallery[:d" class="_zs_gallery___test___base_-desc-tip">';
    $line = 18;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallery[:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 21;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-dropdown.multiple class="w200"\n    list="&#123;&#123;@[1,2,3]&#125;&#125;"/&gt;\n\n&lt;mx-dropdown.multiple class="w200"&gt;\n    &lt;mx-dropdown.item value="1"&gt;1&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="2"&gt;2&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="3"&gt;3&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown.multiple&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/__test__/10.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});