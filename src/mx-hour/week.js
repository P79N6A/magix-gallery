define("mx-hour/week",["magix","$","../mx-monitor/index","./index"],function(e,a,i){var d=e("magix"),t=e("$"),s=e("../mx-monitor/index");d.applyStyle("u",".du{margin-right:50px}.dv{height:60px;line-height:60px;vertical-align:middle;color:#333;padding-left:30px}.dw{width:100%;max-width:100%;margin-bottom:20px}.dx{background-color:#fafafa;color:#666}.dy{position:relative}.dz{display:inline-block;position:absolute;margin-top:-15px;width:32px;height:18px}.dA{left:8px}.dB{left:24%}.dC{left:47.5%}.dD{left:71%}.dE{left:94%}.dF{border-top:1px solid #e6e6e6}.dF:first-child{border-top:none}.dG{vertical-align:middle;cursor:default;padding:0 10px 0 30px}.dH{visibility:hidden}.dF:hover .dH{visibility:visible}.dI{position:absolute;display:none;background-color:#fff;border:1px solid #e6e6e6;border-radius:4px;padding:10px;margin-top:10px;z-index:10}.dJ{margin-bottom:10px;width:300px;border-bottom:1px solid #e6e6e6}.dK{margin:0 25px 10px 0}.dL{visibility:visible}");var n=e("./index"),c="111111111111111111111111",l="000000000000000000000000",r=function(e){for(var a=0;a<7;)e[a]=n.improve(e[a]),a++;return e};i.exports=d.View.extend({tmpl:{html:'<div mx-guid="g0" class="dI" id="dlg_<%=$$.viewId%>"><div mx-guid="g1" class="dJ">2</div><div><button type="button" class="al am" mx-click="__cx()">确认</button><button type="button" mx-click="__cw()" class="al s">取消</button></div></div><div class="dv"><label class="du"><input mx-guid="g2" class="g" type="radio" mx-click="__cu({type:0})" name="st-<%=$$.viewId%>" <%if($$.allDays){%> checked<%}%>> 全日程投放</label><label class="du"><input mx-guid="g3" class="g" type="radio" mx-click="__cu({type:1})" name="st-<%=$$.viewId%>" <%if($$.weekdays){%> checked<%}%>> 工作日（周一至周五）投放</label><label><input mx-guid="g4" class="g" type="radio" mx-click="__cu({type:2})" name="st-<%=$$.viewId%>" <%if($$.weekends){%> checked<%}%>> 休息日（周六、周日）投放</label></div><table class="dw"><thead><tr class="dx"><td width="160" class="V">时间段</td><td class="dy"><span class="dz dA">0:00</span><span class="dz dB">6:00</span><span class="dz dC">12:00</span><span class="dz dD">18:00</span><span class="dz dE">24:00</span></td><td width="160" align="center">操作</td></tr></thead><tbody mx-guid="g5">3</tbody></table>',subs:[{keys:["viewId"],path:'div[mx-guid="g0"]',attr:'id="dlg_<%=$$.viewId%>"',attrs:[{n:"id",p:1}]},{keys:["days","currentClone"],path:'div[mx-guid="g1"]',tmpl:'<%for(var a=0;a<$$.days.length;a++){%><label class="dK<%if(a==$$.currentClone){%> ak<%}%>"><input class="h" type="checkbox" value="<%=a%>" <%if(a==$$.currentClone){%> disabled<%}%>>周<%=$$.days.charAt(a)%></label><%}%>',s:"2"},{keys:["viewId","allDays"],path:'input[mx-guid="g2"]',attr:'name="st-<%=$$.viewId%>" <%if($$.allDays){%> checked<%}%>',attrs:[{n:"name",p:1},{n:"checked",b:1,p:1}]},{keys:["viewId","weekdays"],path:'input[mx-guid="g3"]',attr:'name="st-<%=$$.viewId%>" <%if($$.weekdays){%> checked<%}%>',attrs:[{n:"name",p:1},{n:"checked",b:1,p:1}]},{keys:["viewId","weekends"],path:'input[mx-guid="g4"]',attr:'name="st-<%=$$.viewId%>" <%if($$.weekends){%> checked<%}%>',attrs:[{n:"name",p:1},{n:"checked",b:1,p:1}]},{keys:["days","viewId"],path:'tbody[mx-guid="g5"]',tmpl:'<%for(var b=0;b<$$.days.length;b++){%><tr class="dF"><td class="dG" mx-click="toggle({day:<%=b%>})">周<%=$$.days.charAt(b)%></td><td id="hours_<%=$$.viewId%>_<%=b%>" mx-view="mx-hour/index" mx-change="__cm({day:<%=b%>})"></td><td align="center"><div class="dH"><a mx-click="__cv({day:<%=b%>})" href="#">复制到</a></div></td></tr><%}%>',s:"3"}]},init:function(e){var a=this;a.__ap=r(e.days||[l,l,l,l,l,l,l]),s.__d(),a.on("destroy",function(){s.__f(a),s.__g()})},render:function(){var e=this;e.updater.digest({viewId:e.id,days:"一二三四五六日"}),e.val(e.__ap)},__i:function(e){var a=this,i=d.inside(e,"dlg_"+a.id);if(!i&&a.__cr){var t=a.__cr.parent();i=d.inside(e,t[0])}return i},__cs:function(){var e=this,a=e.__ap.slice(0,5).join(""),i=e.__ap.slice(-2).join(""),d=a.indexOf("1")>-1,t=i.indexOf("1")>-1,s=-1==a.indexOf("0"),n=-1==i.indexOf("0"),c=s&&n;e.updater.digest({allDays:c,weekdays:!t&&s,weekends:n&&!d})},__ct:function(){for(var e=this,a=e.__ap,i=0,t=void 0,s=void 0;i<a.length;i++)t=a[i],(s=d.Vframe.get("hours_"+e.id+"_"+i))&&s.invoke("val",[t])},val:function(e){var a=this;return e&&(a.__ap=r(e),a.__ct(),a.__cs()),a.__ap},__e:function(){var e=this;if(!e.__j){e.__j=!0,s.__k(e);var a=e.__cr,i=t("#dlg_"+e.id);i.show();var d=a.offset(),n=d.left+a.outerWidth()-i.outerWidth(),c=d.top+a.outerHeight()+10;i.offset({left:n,top:c}),a.parent().addClass("dL")}},__a:function(){var e=this;if(e.__j){e.__j=!1,s.__f(e),t("#dlg_"+e.id).hide();var a=e.__cr;a&&a.parent().removeClass("dL")}},"__cu<click>":function(e){var a=this;switch(e.params.type){case 0:a.__ap=[c,c,c,c,c,c,c];break;case 1:a.__ap=[c,c,c,c,c,l,l];break;case 2:a.__ap=[l,l,l,l,l,c,c]}a.__cs(),a.__ct()},"__cm<change>":function(e){e.stopPropagation();var a=this;a.__ap[e.params.day]=e.range,clearTimeout(a.__ch),a.__ch=setTimeout(a.wrapAsync(function(){a.__cs()}),100)},"__bM<click>":function(e){var a=e.params.day,i=this,t=d.Vframe.get("hours_"+i.id+"_"+a);t&&(t.invoke("val").indexOf("0")>-1?t.invoke("val",[i.__ap[a]=c]):t.invoke("val",[i.__ap[a]=l]),i.__cs())},"__cv<click>":function(e){e.preventDefault();var a=this,i=t(e.eventTarget);a.__cr=i,a.__e(),a.updater.digest({currentClone:e.params.day})},"__cw<click>":function(){this.__a()},"__cx<click>":function(){var e=this,a=e.updater.get("currentClone"),i=e.__ap[a];t("#dlg_"+e.id+" input:checked").each(function(a,d){e.__ap[d.value]=i}),e.__a(),e.__ct(),e.__cs()}})});