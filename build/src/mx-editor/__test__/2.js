/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-editor/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, content = $$.content, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryak:_" class="_zs_gallery___test___base_-example"><div mxa="_zs_galleryak:a" class="_zs_gallery___test___base_-eg-content"><div mxs="_zs_galleryak:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>纯文案编辑</div><div>输入框小尺寸 + 自定义宽度</div></div></div><div mxa="_zs_galleryak:b" class="mb20"><span mxs="_zs_galleryak:a" class="color-9">当前内容：</span><span>';
    $line = 12;
    $art = '=content';
    ;
    $p += '' + ($expr = '<%=content%>', $e(content)) + '（要求必填且不小于200）</span></div><div mxa="_zs_galleryak:c" class="mb20"><div mx-view="mx-editor/index?width=200&small=true&content=';
    $line = 18;
    $art = '=content';
    ;
    $p += '' + ($expr = '<%!$eu(content)%>', $eu(content)) + '&rules=';
    $line = 19;
    $art = '@{\n                    required: true,\n                    min: [200, \'不小于200\']\n                }';
    ;
    $p += '' + ($expr = '<%@{required:true,min:[200,\'不小于200\']}%>', $i({ required: true, min: [200, '不小于200'] })) + '"></div></div></div><div mxa="_zs_galleryak:d" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryak:b" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 27;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryak:e" class="_zs_gallery___test___base_-desc-tip">';
    $line = 29;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryak:c" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 32;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-editor\n    width="200"\n    small="true"\n    content="&#123;&#123;=content&#125;&#125;"\n    rules="&#123;&#123;@&#123;\n        required: true,\n        min: [200, \'不小于200\']\n    &#125;&#125;&#125;"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-editor/__test__/2.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            content: 2000
        });
    },
    'change<edit>': function (e) {
        // editText编辑后的文案
        this.updater.digest({
            content: e.editText
        });
    }
});

});