/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', fields = $$.fields, defaults = $$.defaults, custom = $$.custom, customs = $$.customs, map = $$.map, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerybl:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallerybl:c" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerybl:g" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl">不限制可选择个数 + 不排序</div></div><div mxv mxa="_zs_gallerybl:d" class="mb20"><div mxv="fields,defaults,customs" mx-change="' + $viewId + 'change()" mx-view="mx-indics/index?fields=';
    $line = 9;
    $art = '@fields';
    ;
    $p += '' + ($expr = '<%@fields%>', $i($$ref, fields)) + '&defaults=';
    $line = 10;
    $art = '@defaults';
    ;
    $p += '' + ($expr = '<%@defaults%>', $i($$ref, defaults)) + '&custom=';
    $line = 11;
    $art = '=custom';
    ;
    $p += '' + ($expr = '<%!$eu(custom)%>', $eu(custom)) + '&customs=';
    $line = 12;
    $art = '@customs';
    ;
    $p += '' + ($expr = '<%@customs%>', $i($$ref, customs)) + '"></div></div>';
    $line = 15;
    $art = 'if custom';
    ;
    $p += '';
    $expr = '<%if (custom) {%>';
    if (custom) {
        ;
        $p += '<div mxa="_zs_gallerybl:e" class="clearfix mb10 pr lh22" style="padding-left: 120px"><span mxs="_zs_gallerybl:h" style="position: absolute; top: 0; left: 0;"><span class="color-9">当前选中</span>自定义指标：</span>';
        $line = 18;
        $art = 'each customs as key';
        ;
        $p += '';
        $expr = '<%for (var $art_itxpfqweln$art_i = 0, $art_cgttitbn$art_c = customs.length; $art_itxpfqweln$art_i < $art_cgttitbn$art_c; $art_itxpfqweln$art_i++) {        var key = customs[$art_itxpfqweln$art_i]%>';
        for (var $art_itxpfqweln$art_i = 0, $art_cgttitbn$art_c = customs.length; $art_itxpfqweln$art_i < $art_cgttitbn$art_c; $art_itxpfqweln$art_i++) {
            var key = customs[$art_itxpfqweln$art_i];
            $p += '<span mxa="_zs_gallerybl:f" class="fl mr10">';
            $line = 19;
            $art = '=map[key]';
            ;
            $p += '' + ($expr = '<%=map[key]%>', $e(map[key])) + '（';
            $line = 19;
            $art = '=key';
            ;
            $p += '' + ($expr = '<%=key%>', $e(key)) + '）</span>';
            $line = 20;
            $art = '/each';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 22;
        $art = 'else';
        ;
        $p += '';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<div mxa="_zs_gallerybl:j" class="clearfix mb10 pr lh22" style="padding-left: 110px"><span mxs="_zs_gallerybl:i" style="position: absolute; top: 0; left: 0;"><span class="color-9">当前选中</span>默认指标：</span>';
        $line = 25;
        $art = 'each defaults as key';
        ;
        $p += '';
        $expr = '<%for (var $art_ityvykhxy$art_i = 0, $art_ckryuzfmjrlf$art_c = defaults.length; $art_ityvykhxy$art_i < $art_ckryuzfmjrlf$art_c; $art_ityvykhxy$art_i++) {        var key = defaults[$art_ityvykhxy$art_i]%>';
        for (var $art_ityvykhxy$art_i = 0, $art_ckryuzfmjrlf$art_c = defaults.length; $art_ityvykhxy$art_i < $art_ckryuzfmjrlf$art_c; $art_ityvykhxy$art_i++) {
            var key = defaults[$art_ityvykhxy$art_i];
            $p += '<span mxa="_zs_gallerybl:k" class="fl mr10">';
            $line = 26;
            $art = '=map[key]';
            ;
            $p += '' + ($expr = '<%=map[key]%>', $e(map[key])) + '（';
            $line = 26;
            $art = '=key';
            ;
            $p += '' + ($expr = '<%=key%>', $e(key)) + '）</span>';
            $line = 27;
            $art = '/each';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 29;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxa="_zs_gallerybl:l" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybl:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 33;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybl:m" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 35;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybl:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-indics \n    fields="&#123;&#123;@fields&#125;&#125;" \n    defaults="&#123;&#123;@defaults&#125;&#125;"\n    custom="&#123;&#123;=custom&#125;&#125;"\n    customs="&#123;&#123;@customs&#125;&#125;"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-indics/__test__/3.html';
    throw msg;
} return $p; },
    render: function () {
        var fields = [{
                text: '消耗', value: 'cost', tip: '提示文案'
            }, {
                text: '展现量', value: 'impression'
            }, {
                text: '点击量', value: 'click'
            }, {
                text: '点击率', value: 'ctr'
            }, {
                text: '平均点击单价', value: 'cpc'
            }, {
                text: '点击转化率', value: 'coverage'
            }, {
                text: '成交笔数', value: 'transaction'
            }];
        var map = {};
        fields.forEach(function (item) {
            map[item.value] = item.text;
        });
        this.updater.digest({
            fields: fields,
            custom: false,
            defaults: ['cost', 'impression', 'click'],
            customs: [],
            map: map
        });
    },
    'change<change>': function (e) {
        // defaults：默认指标
        // custom：true or false，是否为自定义指标
        // customs：用户自定义的指标
        this.updater.digest({
            custom: e.custom,
            customs: e.customs
        });
    }
});

});