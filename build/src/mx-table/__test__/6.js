/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/6",["magix","__test__/example","$","../index","mx-effects/empty","mx-pagination/index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-effects/empty");
require("mx-pagination/index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, list = $$.list, groups = $$.groups, len = $$.len, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryb[:_" class="_zs_gallery___test___base_-example"><div mxv mxa="_zs_galleryb[:a" class="_zs_gallery___test___base_-eg-content"><div mxs="_zs_galleryb[:_" class="mb20 clearfix lh22"><div class="color-9 fl">该示例：</div><div class="fl"><div>删除完之后有空状态</div><div>表头二级分组 + 分栏 + 吸顶 + 宽度配置在th上</div></div></div><div mxv mxa="_zs_galleryb[:b" class="mb20">';
    $line = 11;
    $art = 'if (list.length > 0)';
    ;
    $p += '';
    $expr = '<%if(list.length>0){%>';
    if (list.length > 0) {
        ;
        $p += '<div mxv="list" mx-view="mx-table/index?sticky=true&list=';
        $line = 13;
        $art = '@list';
        ;
        $p += '' + ($expr = '<%@list%>', $i(list)) + '&groups=%40groups"><div><table mxa="_zs_galleryb[:c" class="table" left="true" width="500"><thead mxs="_zs_galleryb[:a"><tr><th></th><th>固定1</th><th>固定2</th><th>固定3</th></tr></thead><tbody>';
        $line = 25;
        $art = 'each list as item index';
        ;
        $p += '';
        $expr = '<%for(var index=0;index<list.length;index++){var item=list[index]%>';
        for (var index = 0; index < list.length; index++) {
            var item = list[index];
            $p += '<tr><td><a href="javascript:;" mx-click="' + $viewId + 'toggle({index:';
            $line = 28;
            $art = '=index';
            ;
            $p += '' + ($expr = '<%=index%>', $e(index)) + '})" class="link-brand">';
            $line = 30;
            $art = 'if item.expand';
            ;
            $p += '';
            $expr = '<%if(item.expand){%>';
            if (item.expand) {
                ;
                $p += '收起';
                $line = 30;
                $art = 'else';
                ;
                $p += '';
                $expr = '<%}else{%>';
            }
            else {
                ;
                $p += '展开';
                $line = 30;
                $art = '/if';
                ;
                $p += '';
                $expr = '<%}%>';
            }
            ;
            $p += '</a></td><td>';
            $line = 33;
            $art = '=item.fixed1';
            ;
            $p += '' + ($expr = '<%=item.fixed1%>', $e(item.fixed1)) + '</td><td>';
            $line = 34;
            $art = '=item.fixed2';
            ;
            $p += '' + ($expr = '<%=item.fixed2%>', $e(item.fixed2)) + '</td><td>';
            $line = 35;
            $art = '=item.fixed3';
            ;
            $p += '' + ($expr = '<%=item.fixed3%>', $e(item.fixed3)) + '</td></tr><tr mxa="_zs_galleryb[:d" class="operation-tr"><td mxa="_zs_galleryb[:e" colspan="4"><a href="javascript:;" class="btn btn-small mr10" mx-click="' + $viewId + 'change({index:';
            $line = 39;
            $art = '=index';
            ;
            $p += '' + ($expr = '<%=index%>', $e(index)) + '})">修改固定1数据</a><a href="javascript:;" class="btn btn-small" mx-click="' + $viewId + 'delete({index:';
            $line = 40;
            $art = '=index';
            ;
            $p += '' + ($expr = '<%=index%>', $e(index)) + '})">移除</a></td></tr>';
            $line = 43;
            $art = 'if item.expand';
            ;
            $p += '';
            $expr = '<%if(item.expand){%>';
            if (item.expand) {
                ;
                $p += '<tr mxs="_zs_galleryb[:b" class="thead"><td class="sub-mask"></td><td>子表格固定1</td><td>子表格固定2</td><td>子表格固定3</td></tr>';
                $line = 51;
                $art = 'each item.subs as sub subIndex';
                ;
                $p += '';
                $expr = '<%for(var subIndex=0,$art_objyjtiomu$art_obj=item.subs;subIndex<$art_objyjtiomu$art_obj.length;subIndex++){var sub=$art_objyjtiomu$art_obj[subIndex]%>';
                for (var subIndex = 0, $art_objyjtiomu$art_obj = item.subs; subIndex < $art_objyjtiomu$art_obj.length; subIndex++) {
                    var sub = $art_objyjtiomu$art_obj[subIndex];
                    $p += '<tr><td class="sub-mask ';
                    $line = 53;
                    $art = 'if item.subs.length==subIndex+1';
                    ;
                    $p += '';
                    $expr = '<%if(item.subs.length==subIndex+1){%>';
                    if (item.subs.length == subIndex + 1) {
                        ;
                        $p += ' sub-mask-last ';
                        $line = 53;
                        $art = '/if';
                        ;
                        $p += '';
                        $expr = '<%}%>';
                    }
                    ;
                    $p += '"></td><td>';
                    $line = 54;
                    $art = '=sub.fixed1';
                    ;
                    $p += '' + ($expr = '<%=sub.fixed1%>', $e(sub.fixed1)) + '</td><td>';
                    $line = 55;
                    $art = '=sub.fixed2';
                    ;
                    $p += '' + ($expr = '<%=sub.fixed2%>', $e(sub.fixed2)) + '</td><td>';
                    $line = 56;
                    $art = '=sub.fixed3';
                    ;
                    $p += '' + ($expr = '<%=sub.fixed3%>', $e(sub.fixed3)) + '</td></tr><tr mxa="_zs_galleryb[:f" class="operation-tr"><td class="sub-mask ';
                    $line = 59;
                    $art = 'if item.subs.length==subIndex+1';
                    ;
                    $p += '';
                    $expr = '<%if(item.subs.length==subIndex+1){%>';
                    if (item.subs.length == subIndex + 1) {
                        ;
                        $p += ' sub-mask-last ';
                        $line = 59;
                        $art = '/if';
                        ;
                        $p += '';
                        $expr = '<%}%>';
                    }
                    ;
                    $p += '"></td><td mxs="_zs_galleryb[:c" colspan="3"><a href="javascript:;" class="btn btn-small">操作</a></td></tr>';
                    $line = 64;
                    $art = '/each';
                    ;
                    $p += '';
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $line = 65;
                $art = '/if';
                ;
                $p += '';
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 66;
            $art = '/each';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</tbody></table></div><div><table mxa="_zs_galleryb[:g" class="table" center="true" width="1200"><thead><tr>';
        $line = 74;
        $art = 'each groups as group';
        ;
        $p += '';
        $expr = '<%for(var $art_ikqcmfgnll$art_i=0;$art_ikqcmfgnll$art_i<groups.length;$art_ikqcmfgnll$art_i++){var group=groups[$art_ikqcmfgnll$art_i]%>';
        for (var $art_ikqcmfgnll$art_i = 0; $art_ikqcmfgnll$art_i < groups.length; $art_ikqcmfgnll$art_i++) {
            var group = groups[$art_ikqcmfgnll$art_i];
            $p += '<th class="field-group" colspan="';
            $line = 75;
            $art = '=group.fields.length';
            ;
            $p += '' + ($expr = '<%=group.fields.length%>', $e(group.fields.length)) + '"><div mxa="_zs_galleryb[:h" class="group-name">';
            $line = 76;
            $art = '=group.name';
            ;
            $p += '' + ($expr = '<%=group.name%>', $e(group.name)) + '</div></th>';
            $line = 78;
            $art = '/each';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</tr><tr>';
        $line = 81;
        $art = 'each groups as group';
        ;
        $p += '';
        $expr = '<%for(var $art_ictoffcxt$art_i=0;$art_ictoffcxt$art_i<groups.length;$art_ictoffcxt$art_i++){var group=groups[$art_ictoffcxt$art_i]%>';
        for (var $art_ictoffcxt$art_i = 0; $art_ictoffcxt$art_i < groups.length; $art_ictoffcxt$art_i++) {
            var group = groups[$art_ictoffcxt$art_i];
            $p += ' ';
            $line = 82;
            $art = 'each group.fields as field';
            ;
            $p += '';
            $expr = '<%for(var $art_illrlzcdva$art_i=0,$art_objzyndf$art_obj=group.fields;$art_illrlzcdva$art_i<$art_objzyndf$art_obj.length;$art_illrlzcdva$art_i++){var field=$art_objzyndf$art_obj[$art_illrlzcdva$art_i]%>';
            for (var $art_illrlzcdva$art_i = 0, $art_objzyndf$art_obj = group.fields; $art_illrlzcdva$art_i < $art_objzyndf$art_obj.length; $art_illrlzcdva$art_i++) {
                var field = $art_objzyndf$art_obj[$art_illrlzcdva$art_i];
                $p += '<th mxa="_zs_galleryb[:i" class="field-item">滚动';
                $line = 83;
                $art = '=field';
                ;
                $p += '' + ($expr = '<%=field%>', $e(field)) + '</th>';
                $line = 84;
                $art = '/each';
                ;
                $p += '';
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 85;
            $art = '/each';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</tr></thead><tbody>';
        $line = 89;
        $art = 'each list as item index';
        ;
        $p += '';
        $expr = '<%for(var index=0;index<list.length;index++){var item=list[index]%>';
        for (var index = 0; index < list.length; index++) {
            var item = list[index];
            $p += '<tr>';
            $line = 91;
            $art = 'each groups as group';
            ;
            $p += '';
            $expr = '<%for(var $art_igzklrtzi$art_i=0;$art_igzklrtzi$art_i<groups.length;$art_igzklrtzi$art_i++){var group=groups[$art_igzklrtzi$art_i]%>';
            for (var $art_igzklrtzi$art_i = 0; $art_igzklrtzi$art_i < groups.length; $art_igzklrtzi$art_i++) {
                var group = groups[$art_igzklrtzi$art_i];
                $p += ' ';
                $line = 92;
                $art = 'each group.fields as field';
                ;
                $p += '';
                $expr = '<%for(var $art_ivqgsrhoain$art_i=0,$art_objaznkucscli$art_obj=group.fields;$art_ivqgsrhoain$art_i<$art_objaznkucscli$art_obj.length;$art_ivqgsrhoain$art_i++){var field=$art_objaznkucscli$art_obj[$art_ivqgsrhoain$art_i]%>';
                for (var $art_ivqgsrhoain$art_i = 0, $art_objaznkucscli$art_obj = group.fields; $art_ivqgsrhoain$art_i < $art_objaznkucscli$art_obj.length; $art_ivqgsrhoain$art_i++) {
                    var field = $art_objaznkucscli$art_obj[$art_ivqgsrhoain$art_i];
                    $p += '<td>';
                    $line = 93;
                    $art = '=item[\'content\' + field]';
                    ;
                    $p += '' + ($expr = '<%=item[\'content\'+field]%>', $e(item['content' + field])) + '</td>';
                    $line = 94;
                    $art = '/each';
                    ;
                    $p += '';
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $line = 95;
                $art = '/each';
                ;
                $p += '';
                $expr = '<%}%>';
            }
            ;
            $p += '</tr><tr mxa="_zs_galleryb[:j" class="operation-tr"><td colspan="';
            $line = 99;
            $art = '=len';
            ;
            $p += '' + ($expr = '<%=len%>', $e(len)) + '"></td></tr>';
            $line = 101;
            $art = 'if item.expand';
            ;
            $p += '';
            $expr = '<%if(item.expand){%>';
            if (item.expand) {
                ;
                $p += '<tr mxa="_zs_galleryb[:k" class="thead">';
                $line = 103;
                $art = 'each groups as group';
                ;
                $p += '';
                $expr = '<%for(var $art_irofppqtb$art_i=0;$art_irofppqtb$art_i<groups.length;$art_irofppqtb$art_i++){var group=groups[$art_irofppqtb$art_i]%>';
                for (var $art_irofppqtb$art_i = 0; $art_irofppqtb$art_i < groups.length; $art_irofppqtb$art_i++) {
                    var group = groups[$art_irofppqtb$art_i];
                    $p += ' ';
                    $line = 104;
                    $art = 'each group.fields as field';
                    ;
                    $p += '';
                    $expr = '<%for(var $art_ihbmbplx$art_i=0,$art_objtchbfxh$art_obj=group.fields;$art_ihbmbplx$art_i<$art_objtchbfxh$art_obj.length;$art_ihbmbplx$art_i++){var field=$art_objtchbfxh$art_obj[$art_ihbmbplx$art_i]%>';
                    for (var $art_ihbmbplx$art_i = 0, $art_objtchbfxh$art_obj = group.fields; $art_ihbmbplx$art_i < $art_objtchbfxh$art_obj.length; $art_ihbmbplx$art_i++) {
                        var field = $art_objtchbfxh$art_obj[$art_ihbmbplx$art_i];
                        $p += '<td>子表头滚动';
                        $line = 105;
                        $art = '=field';
                        ;
                        $p += '' + ($expr = '<%=field%>', $e(field)) + '</td>';
                        $line = 106;
                        $art = '/each';
                        ;
                        $p += '';
                        $expr = '<%}%>';
                    }
                    ;
                    $p += ' ';
                    $line = 107;
                    $art = '/each';
                    ;
                    $p += '';
                    $expr = '<%}%>';
                }
                ;
                $p += '</tr>';
                $line = 109;
                $art = 'each item.subs as sub';
                ;
                $p += '';
                $expr = '<%for(var $art_iibsrnumwdn$art_i=0,$art_objhhgajobh$art_obj=item.subs;$art_iibsrnumwdn$art_i<$art_objhhgajobh$art_obj.length;$art_iibsrnumwdn$art_i++){var sub=$art_objhhgajobh$art_obj[$art_iibsrnumwdn$art_i]%>';
                for (var $art_iibsrnumwdn$art_i = 0, $art_objhhgajobh$art_obj = item.subs; $art_iibsrnumwdn$art_i < $art_objhhgajobh$art_obj.length; $art_iibsrnumwdn$art_i++) {
                    var sub = $art_objhhgajobh$art_obj[$art_iibsrnumwdn$art_i];
                    $p += '<tr>';
                    $line = 111;
                    $art = 'each groups as group';
                    ;
                    $p += '';
                    $expr = '<%for(var $art_iidourf$art_i=0;$art_iidourf$art_i<groups.length;$art_iidourf$art_i++){var group=groups[$art_iidourf$art_i]%>';
                    for (var $art_iidourf$art_i = 0; $art_iidourf$art_i < groups.length; $art_iidourf$art_i++) {
                        var group = groups[$art_iidourf$art_i];
                        $p += ' ';
                        $line = 112;
                        $art = 'each group.fields as field';
                        ;
                        $p += '';
                        $expr = '<%for(var $art_iwgfbdj$art_i=0,$art_objwsdpwqed$art_obj=group.fields;$art_iwgfbdj$art_i<$art_objwsdpwqed$art_obj.length;$art_iwgfbdj$art_i++){var field=$art_objwsdpwqed$art_obj[$art_iwgfbdj$art_i]%>';
                        for (var $art_iwgfbdj$art_i = 0, $art_objwsdpwqed$art_obj = group.fields; $art_iwgfbdj$art_i < $art_objwsdpwqed$art_obj.length; $art_iwgfbdj$art_i++) {
                            var field = $art_objwsdpwqed$art_obj[$art_iwgfbdj$art_i];
                            $p += '<td>';
                            $line = 113;
                            $art = '=sub[\'content\' + field]';
                            ;
                            $p += '' + ($expr = '<%=sub[\'content\'+field]%>', $e(sub['content' + field])) + '</td>';
                            $line = 114;
                            $art = '/each';
                            ;
                            $p += '';
                            $expr = '<%}%>';
                        }
                        ;
                        $p += ' ';
                        $line = 115;
                        $art = '/each';
                        ;
                        $p += '';
                        $expr = '<%}%>';
                    }
                    ;
                    $p += '</tr><tr mxa="_zs_galleryb[:l" class="operation-tr"><td colspan="';
                    $line = 118;
                    $art = '=len';
                    ;
                    $p += '' + ($expr = '<%=len%>', $e(len)) + '"></td></tr>';
                    $line = 120;
                    $art = '/each';
                    ;
                    $p += '';
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $line = 121;
                $art = '/if';
                ;
                $p += '';
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 122;
            $art = '/each';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</tbody></table></div></div>';
        $line = 126;
        $art = 'else';
        ;
        $p += '';
        $expr = '<%}else{%>';
    }
    else {
        ;
        $p += '<div mxs="_zs_galleryb[:d" mx-view="mx-effects/empty?content=%E6%82%A8%E8%BF%98%E6%B2%A1%E6%9C%89%E7%9B%B8%E5%85%B3%E8%AE%B0%E5%BD%95"></div>';
        $line = 128;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '<div mxa="_zs_galleryb[:m" class="table-pager-wrapper"><div mx-view="mx-pagination/index?total=';
    $line = 131;
    $art = '=list.length';
    ;
    $p += '' + ($expr = '<%!$eu(list.length)%>', $eu(list.length)) + '&size=40&page=1"></div></div></div></div><div mxa="_zs_galleryb[:n" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryb[:e" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 139;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryb[:o" class="_zs_gallery___test___base_-desc-tip">';
    $line = 141;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryb[:f" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 144;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&#123;&#123;if(list.length &gt; 0)&#125;&#125;\n&lt;!-- 渲染表格涉及的数据请都挂在到mx-table上 --&gt;\n&lt;mx-table sticky="true" list="&#123;&#123;@list&#125;&#125;" groups="@groups"&gt;\n    &lt;!-- 固定的表格 --&gt;\n    &lt;table class="table" left="true" width="500"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;&lt;/th&gt;\n                &lt;th&gt;固定1&lt;/th&gt;\n                &lt;th&gt;固定2&lt;/th&gt;\n                &lt;th&gt;固定3&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item index&#125;&#125;\n                &lt;tr&gt;\n                    &lt;td&gt;  \n                        &lt;a href="javascript:;" class="link-brand"\n                            mx-click="toggle(&#123;index:&#123;&#123;=index&#125;&#125;&#125;)"&gt;\n                            &#123;&#123;if item.expand&#125;&#125;\n                                收起\n                            &#123;&#123;else&#125;&#125;\n                                展开\n                            &#123;&#123;/if&#125;&#125;\n                        &lt;/a&gt;\n                    &lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed1&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed2&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed3&#125;&#125;&lt;/td&gt;\n                &lt;/tr&gt;\n                &lt;tr class="operation-tr"&gt;\n                    &lt;td colspan="4"&gt;\n                        &lt;a href="javascript:;" class="btn btn-small mr10" \n                            mx-click="change(&#123;index:&#123;&#123;=index&#125;&#125;&#125;)"&gt;修改固定1数据&lt;/a&gt;\n                        &lt;a href="javascript:;" class="btn btn-small" \n                            mx-click="delete(&#123;index:&#123;&#123;=index&#125;&#125;&#125;)"&gt;移除&lt;/a&gt;\n                    &lt;/td&gt;\n                &lt;/tr&gt;\n                &#123;&#123;if item.expand&#125;&#125;\n                    &lt;tr class="thead"&gt;\n                        &lt;!-- td个数保持一致，占位符加class="sub-mask" --&gt;\n                        &lt;td class="sub-mask"&gt;&lt;/td&gt;\n                        &lt;td&gt;子表格固定1&lt;/td&gt;\n                        &lt;td&gt;子表格固定2&lt;/td&gt;\n                        &lt;td&gt;子表格固定3&lt;/td&gt;\n                    &lt;/tr&gt;\n                    &#123;&#123;each item.subs as sub subIndex&#125;&#125;\n                    &lt;tr&gt;\n                        &lt;td class="sub-mask &#123;&#123;if item.subs.length==subIndex+1&#125;&#125; sub-mask-last &#123;&#123;/if&#125;&#125;"&gt;&lt;/td&gt;\n                        &lt;td&gt;&#123;&#123;=sub.fixed1&#125;&#125;&lt;/td&gt;\n                        &lt;td&gt;&#123;&#123;=sub.fixed2&#125;&#125;&lt;/td&gt;\n                        &lt;td&gt;&#123;&#123;=sub.fixed3&#125;&#125;&lt;/td&gt;\n                    &lt;/tr&gt;\n                    &lt;tr class="operation-tr"&gt;\n                        &lt;td class="sub-mask &#123;&#123;if item.subs.length==subIndex+1&#125;&#125; sub-mask-last &#123;&#123;/if&#125;&#125;"&gt;&lt;/td&gt;\n                        &lt;td colspan="3"&gt;\n                            &lt;a href="javascript:;" class="btn btn-small"&gt;操作&lt;/a&gt;\n                        &lt;/td&gt;\n                    &lt;/tr&gt;\n                    &#123;&#123;/each&#125;&#125;\n                &#123;&#123;/if&#125;&#125;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;!-- 滚动列 --&gt;\n    &lt;table class="table" center="true" width="1200"&gt;\n        &lt;thead&gt;\n            &lt;!-- 二级结构的表头 --&gt;\n            &lt;tr&gt;\n                &#123;&#123;each groups as group&#125;&#125;\n                &lt;th class="field-group" colspan="&#123;&#123;=group.fields.length&#125;&#125;"&gt;\n                    &lt;div class="group-name"&gt;&#123;&#123;=group.name&#125;&#125;&lt;/div&gt;\n                &lt;/th&gt;\n                &#123;&#123;/each&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &#123;&#123;each groups as group&#125;&#125;\n                    &#123;&#123;each group.fields as field&#125;&#125;\n                    &lt;th class="field-item"&gt;滚动&#123;&#123;=field&#125;&#125;&lt;/th&gt;\n                    &#123;&#123;/each&#125;&#125;\n                &#123;&#123;/each&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item index&#125;&#125;\n                &lt;tr&gt;\n                    &#123;&#123;each groups as group&#125;&#125;\n                        &#123;&#123;each group.fields as field&#125;&#125;\n                        &lt;td&gt;&#123;&#123;=item[\'content\' + field]&#125;&#125;&lt;/td&gt;\n                        &#123;&#123;/each&#125;&#125;\n                    &#123;&#123;/each&#125;&#125;\n                &lt;/tr&gt;\n                &lt;!-- 有操作项该行不可少 --&gt;\n                &lt;tr class="operation-tr"&gt;\n                    &lt;td colspan="&#123;&#123;=len&#125;&#125;"&gt;&lt;/td&gt;\n                &lt;/tr&gt;\n                &#123;&#123;if item.expand&#125;&#125;\n                    &lt;tr class="thead"&gt;\n                        &#123;&#123;each groups as group&#125;&#125;\n                            &#123;&#123;each group.fields as field&#125;&#125;\n                            &lt;td&gt;子表头滚动&#123;&#123;=field&#125;&#125;&lt;/td&gt;\n                            &#123;&#123;/each&#125;&#125;\n                        &#123;&#123;/each&#125;&#125;\n                    &lt;/tr&gt;\n                    &#123;&#123;each item.subs as sub&#125;&#125;\n                    &lt;tr&gt;\n                        &#123;&#123;each groups as group&#125;&#125;\n                            &#123;&#123;each group.fields as field&#125;&#125;\n                            &lt;td&gt;&#123;&#123;=sub[\'content\' + field]&#125;&#125;&lt;/td&gt;\n                            &#123;&#123;/each&#125;&#125;\n                        &#123;&#123;/each&#125;&#125;\n                    &lt;/tr&gt;\n                    &lt;tr class="operation-tr"&gt;\n                        &lt;td colspan="&#123;&#123;=len&#125;&#125;"&gt;&lt;/td&gt;\n                    &lt;/tr&gt;\n                    &#123;&#123;/each&#125;&#125;\n                &#123;&#123;/if&#125;&#125;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;\n&#123;&#123;else&#125;&#125;\n&lt;mx-effects.empty content="您还没有相关记录"/&gt;\n&#123;&#123;/if&#125;&#125;\n&lt;div class="table-pager-wrapper"&gt;\n    &lt;mx-pagination \n        total="&#123;&#123;=list.length&#125;&#125;" \n        size="40" \n        page="1"/&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_galleryb[:p" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryb[:g" class="_zs_gallery___test___base_-eg-title">JS Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 278;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryb[:q" class="_zs_gallery___test___base_-desc-tip">';
    $line = 280;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryb[:f" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 283;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let that = this;\n        let list = [];\n\n        let itemFn = (key) =&gt; &#123;\n            return &#123;\n                expand: false,\n                fixed1: \'fixed1-\' + key,\n                fixed2: \'fixed2-\' + key,\n                fixed3: \'fixed3-\' + key,\n                content1: \'content1-\' + key,\n                content2: \'content2-\' + key,\n                content3: \'content3-\' + key,\n                content4: \'content4-\' + key,\n                content5: \'content5-\' + key,\n                content6: \'content6-\' + key,\n                content7: \'content7-\' + key,\n                content8: \'content8-\' + key,\n                content9: \'content9-\' + key,\n            &#125;\n        &#125;\n        for (var i = 1; i &lt; 4; i++) &#123;\n            let item = itemFn(i);\n            item.subs = [];\n            for (let j = 1; j &lt; 3; j++) &#123;\n                item.subs.push(itemFn(i + \'-\' + j));\n            &#125;\n            list.push(item);\n        &#125;\n        // 默认展开第一个\n        list[0].expand = true;\n\n        let groups = [&#123;\n            name: \'组1\',\n            fields: [1, 2]\n        &#125;, &#123;\n            name: \'组2\',\n            fields: [3, 4, 5, 6]\n        &#125;, &#123;\n            name: \'组3\',\n            fields: [7, 8, 9]\n        &#125;]\n\n        // 计算colspan\n        let len = 0;\n        groups.forEach(group =&gt; &#123;\n            len += group.fields.length;\n        &#125;)\n\n        that.updater.digest(&#123;\n            groups,\n            len,\n            list\n        &#125;);\n    &#125;,\n\n    /**\n    * 展开收起\n    */\n    \'toggle&lt;click&gt;\' (e) &#123;\n        let that = this;\n        let index = e.params.index,\n            list = that.updater.get(\'list\');\n        list[index].expand = !list[index].expand;\n        that.updater.digest(&#123;\n            list\n        &#125;)\n    &#125;,\n\n    /**\n    * 修改数据\n    */\n    \'change&lt;click&gt;\' (e) &#123;\n        let that = this;\n        let index = e.params.index,\n            list = that.updater.get(\'list\');\n        list[index].fixed1 = Magix.guid();\n        that.updater.digest(&#123;\n            list\n        &#125;)\n    &#125;,\n\n    \'delete&lt;click&gt;\' (e) &#123;\n        let that = this;\n        let index = e.params.index,\n            list = that.updater.get(\'list\');\n        list.splice(index, 1);\n        that.updater.digest(&#123;\n            list\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/__test__/6.html';
    throw msg;
} return $p; },
    render: function () {
        var that = this;
        var list = [];
        var itemFn = function (key) {
            return {
                expand: false,
                fixed1: 'fixed1-' + key,
                fixed2: 'fixed2-' + key,
                fixed3: 'fixed3-' + key,
                content1: 'content1-' + key,
                content2: 'content2-' + key,
                content3: 'content3-' + key,
                content4: 'content4-' + key,
                content5: 'content5-' + key,
                content6: 'content6-' + key,
                content7: 'content7-' + key,
                content8: 'content8-' + key,
                content9: 'content9-' + key
            };
        };
        for (var i = 1; i < 4; i++) {
            var item = itemFn(i);
            item.subs = [];
            for (var j = 1; j < 3; j++) {
                item.subs.push(itemFn(i + '-' + j));
            }
            list.push(item);
        }
        // 默认展开第一个
        list[0].expand = true;
        var groups = [{
                name: '组1',
                fields: [1, 2]
            }, {
                name: '组2',
                fields: [3, 4, 5, 6]
            }, {
                name: '组3',
                fields: [7, 8, 9]
            }];
        // 计算colspan
        var len = 0;
        groups.forEach(function (group) {
            len += group.fields.length;
        });
        that.updater.digest({
            groups: groups,
            len: len,
            list: list
        });
    },
    /**
     * 展开收起
     */
    'toggle<click>': function (e) {
        var that = this;
        var index = e.params.index, list = that.updater.get('list');
        list[index].expand = !list[index].expand;
        that.updater.digest({
            list: list
        });
    },
    /**
     * 修改数据
     */
    'change<click>': function (e) {
        var that = this;
        var index = e.params.index, list = that.updater.get('list');
        list[index].fixed1 = Magix.guid();
        that.updater.digest({
            list: list
        });
    },
    'delete<click>': function (e) {
        var that = this;
        var index = e.params.index, list = that.updater.get('list');
        list.splice(index, 1);
        that.updater.digest({
            list: list
        });
    }
});

});