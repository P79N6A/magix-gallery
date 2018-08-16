/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/range",["magix","$","mx-medusa/util","mx-title/second","./6","./12","./7","./8","./9","./10","./11","./13","__test__/api","./implement"],(require,exports,module)=>{
/*Magix,$,I18n*/
require("mx-title/second");
require("./6");
require("./12");
require("./7");
require("./8");
require("./9");
require("./10");
require("./11");
require("./13");
require("__test__/api");
require("./implement");
var Magix = require("magix");
var $ = require("$");
var I18n = require("mx-medusa/util");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, options = $$.options, viewId = $$.viewId, supportQuickDates = $$.supportQuickDates; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryU:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryU:a" class="clearfix mb20"><div class="_zs_gallery___test___base_-half"><div mx-view="mx-calendar/__test__/6"></div><div mx-view="mx-calendar/__test__/12"></div></div><div class="_zs_gallery___test___base_-half"><div mx-view="mx-calendar/__test__/7"></div><div mx-view="mx-calendar/__test__/8"></div><div mx-view="mx-calendar/__test__/9"></div><div mx-view="mx-calendar/__test__/10"></div><div mx-view="mx-calendar/__test__/11"></div><div mx-view="mx-calendar/__test__/13"></div></div></div><div mxs="_zs_galleryU:b" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 18;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i(options)) + '" class="mb40"></div><div mxs="_zs_galleryU:c" mx-view="mx-title/second?content=%E5%BF%AB%E6%8D%B7%E6%97%A5%E6%9C%9F%E5%A4%87%E9%80%89%E9%A1%B9"></div><div class="pr20 mb40" id="';
    $line = 21;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_quick"><table mxa="_zs_galleryU:_" class="table _zs_gallery___test___base_-desc-table"><thead mxs="_zs_galleryU:d"><tr><th width="100">配置key值</th><th width="100">显示文案</th><th width="200">描述</th></tr></thead><tbody>';
    $line = 31;
    $art = 'each supportQuickDates as item';
    ;
    $p += '';
    $expr = '<%for(var $art_igznaniw$art_i=0;$art_igznaniw$art_i<supportQuickDates.length;$art_igznaniw$art_i++){var item=supportQuickDates[$art_igznaniw$art_i]%>';
    for (var $art_igznaniw$art_i = 0; $art_igznaniw$art_i < supportQuickDates.length; $art_igznaniw$art_i++) {
        var item = supportQuickDates[$art_igznaniw$art_i];
        $p += '<tr><td>';
        $line = 33;
        $art = '=item.key';
        ;
        $p += '' + ($expr = '<%=item.key%>', $e(item.key)) + '</td><td>';
        $line = 34;
        $art = '=item.text';
        ;
        $p += '' + ($expr = '<%=item.text%>', $e(item.text)) + '</td><td>';
        $line = 35;
        $art = '=item.tip';
        ;
        $p += '' + ($expr = '<%=item.tip%>', $e(item.tip)) + '</td></tr>';
        $line = 37;
        $art = '/each';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div><div mxs="_zs_galleryU:e" mx-view="mx-calendar/__test__/implement"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/__test__/range.html';
    throw msg;
} return $p; },
    render: function () {
        var that = this;
        var viewId = that.id;
        var options = [{
                key: 'start',
                desc: '默认选中开始日期',
                type: 'string',
                def: '根据max和min进行修正'
            }, {
                key: 'end',
                desc: '默认选中结束日期，不限的情况下end=不限即可',
                type: 'string',
                def: '根据max和min进行修正'
            }, {
                key: 'start-disabled',
                desc: '是否禁止选择开始日期<br>开始日期禁止使用的时候，只允许使用动态计算的快捷日期<br>动态计算的都是依据开始日期计算的',
                type: 'string',
                def: 'false'
            }, {
                key: 'end-disabled',
                desc: '是否禁止选中结束日期<br>结束日期禁止使用的时候，禁止快捷操作，开始日期最大可选为结束日期',
                type: 'string',
                def: 'false'
            }, {
                key: 'vsenable',
                desc: '是否可对比',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'vs',
                desc: '对比初始值',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'single',
                desc: 'vsenable=true时可生效，关闭对比的时候选择单天还是连续的时间段',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'shortcuts',
                desc: '是否有快捷方式',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'shortkeys',
                desc: "\u81EA\u5B9A\u4E49\u5FEB\u6377\u65B9\u5F0Fkey\u503C\uFF0C<a href=\"javascript:;\" mx-click=\"to({id:'" + viewId + "_quick'})\" class=\"color-brand\">\u67E5\u770B\u5907\u9009\u503C</a>",
                type: 'array',
                def: 'shortcuts=true时，默认为["today","yesterday","passed7","preWeekMon","passed15","lastestThisMonth","passed30","preMonth"]'
            }, {
                key: 'max',
                desc: '最大可选的日期',
                type: 'string'
            }, {
                key: 'min',
                desc: '最小可选的日期',
                type: 'string'
            }, {
                key: 'time-type',
                desc: '时分秒选择类型，设置该值后会出现时间选择组件<br/>可选择"hour,minute,second"中的一个或者多个<br/>此外提供快捷的配置"all" = "hour,minute,second"',
                type: 'string',
                def: ''
            }, {
                key: 'align',
                desc: '日历与目标的对齐方式，left，right',
                type: 'string',
                def: 'left'
            }, {
                key: 'week-start',
                desc: '从周几开，0-6，0表示周日',
                type: 'number',
                def: '0'
            }, {
                key: 'inlay',
                desc: '是否需要边框，自定义trigger显示时可配置',
                type: 'boolean',
                def: 'false'
            }];
        var supportQuickDates = [{
                key: 'today',
                text: I18n['calendar.today'],
                tip: I18n['calendar.today']
            }, {
                key: 'yesterday',
                text: I18n['calendar.yesterday'],
                tip: I18n['calendar.yesterday']
            }, {
                key: 'beforeYesterday',
                text: I18n['calendar.before.yesterday'],
                tip: I18n['calendar.before.yesterday']
            }, {
                key: 'preMonth',
                text: I18n['calendar.last.month'],
                tip: I18n['calendar.last.month']
            }, {
                key: 'preWeekSun',
                text: I18n['calendar.last.week'],
                tip: I18n['calendar.last.week.sunday']
            }, {
                key: 'preWeekMon',
                text: I18n['calendar.last.week'],
                tip: I18n['calendar.last.week.monday']
            }, {
                key: 'lastestWeekSun',
                text: I18n['calendar.this.week'],
                tip: I18n['calendar.this.week.sunday']
            }, {
                key: 'lastestWeekMon',
                text: I18n['calendar.this.week'],
                tip: I18n['calendar.this.week.monday']
            }, {
                key: 'passedThisMonth',
                text: I18n['calendar.this.month'],
                tip: I18n['calendar.this.month.yestarday']
            }, {
                key: 'lastestThisMonth',
                text: I18n['calendar.this.month'],
                tip: I18n['calendar.this.month.today']
            }, {
                key: 'passed{n}',
                text: I18n['calendar.passed'] + ' n ' + I18n['calendar.unit'],
                tip: I18n['calendar.passed'] + ' n ' + I18n['calendar.unit.yesterday'] + '，' + I18n['calendar.n.arbitrary'] + '，passed1，passed15...'
            }, {
                key: 'lastest{n}',
                text: I18n['calendar.lastest'] + ' n ' + I18n['calendar.unit'],
                tip: I18n['calendar.lastest'] + ' n ' + I18n['calendar.unit.today'] + '，' + I18n['calendar.n.arbitrary'] + '，lastest1，lastest15...'
            }, {
                key: 'dynamicStart{n}',
                text: I18n['calendar.dynamic.end'].replace('${day}', 'n'),
                tip: I18n['calendar.dynamic.end.tip'].replace('${day}', 'n') + '，' + I18n['calendar.n.arbitrary'] + '，dynamicStart1，dynamicStart15...'
            }, {
                key: 'dynamicEndThisMonth',
                text: I18n['calendar.natural.month'],
                tip: I18n['calendar.natural.month.tip']
            }, {
                key: 'dynamicEndNextMonth',
                text: I18n['calendar.next.month'],
                tip: I18n['calendar.next.month.tip']
            }, {
                key: 'forever',
                text: I18n['calendar.forever'],
                tip: I18n['calendar.forever.tip']
            }];
        that.updater.digest({
            viewId: viewId,
            options: options,
            supportQuickDates: supportQuickDates
        });
    }
});

});