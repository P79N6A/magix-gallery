define("mx-hour/week",["magix","$","../mx-monitor/index","./index"],(t,i,_)=>{var e=t("magix"),a=t("$"),d=t("../mx-monitor/index");e.applyStyle("_x","._dB{padding:0;height:38.4px;text-align:center}._dC{text-align:left;padding-left:10px}._dD{border:none}._dE{border-right:1px solid #e6e6e6}._dF{visibility:hidden}._dG:hover ._dF{visibility:visible}._dH{position:absolute;display:none;background-color:#fff;border:1px solid #e6e6e6;border-radius:4px;padding:10px;margin-top:10px;z-index:10}._dI{margin-bottom:10px;width:300px;border-bottom:1px solid #e6e6e6}._dJ{margin:0 25px 10px 0}._dK{visibility:visible}");var s=t("./index"),n="111111111111111111111111",r="000000000000000000000000",l=function(t){var i=0;for(t=(t=(t+"").split(",")).slice(i,7);i<7;)t[i]=s.improve(t[i]),i++;return t};_.exports=e.View.extend({tmpl:function(t,i){var _="",e={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,d=function(t){return null==t?"":""+t},s=function(t){return"&"+e[t]+";"},n=function(t){return d(t).replace(a,s)};_+='<div class="_dH" id="dlg_'+n(i.viewId)+'"><div class="_dI">';for(var r=0;r<i.days.length;r++)_+='<label class="_dJ',r==i.currentClone&&(_+=" _am"),_+='"><input class="_h" type="checkbox" value="'+n(r)+'" ',r==i.currentClone&&(_+=" disabled"),_+=">周"+n(i.days.charAt(r))+"</label>";_+='</div><div><button type="button" class="_an _ao" mx-click="__de()">确认</button><button type="button" mx-click="__dd()" class="_an _s">取消</button></div></div><table class="_W"><thead><tr><th class="_dB" width="100">快捷设置</th><th colspan="2" class="_dB _dC"><label class="_t"><input class="_at" type="radio" mx-change="__db({type:0})" name="st-'+n(i.viewId)+'" ',i.allDays&&(_+=" checked"),_+='> 全日程投放</label><label class="_v"><input class="_at" type="radio" mx-change="__db({type:1})" name="st-'+n(i.viewId)+'" ',i.weekdays&&(_+=" checked"),_+='> 工作日（周一至周五）投放</label><label class="_v"><input class="_at" type="radio" mx-change="__db({type:2})" name="st-'+n(i.viewId)+'" ',i.weekends&&(_+=" checked"),_+='> 休息日（周六、周日）投放</label></th></tr><tr><th class="_dB">时间</th><th class="_dB"><table class="_W"><tbody><tr>';for(var l=0;l<24;l++)_+='<td class="_dB _dD',l<23&&(_+=" _dE"),_+='">'+n(("0"+l).slice(-2))+"</td>";_+='</tr></tbody></table></th><th width="80" class="_dB">操作</th></tr></thead><tbody>';for(var c=0;c<i.days.length;c++)_+='<tr class="_dG"><td class="_dB _ad" mx-click="__aX({day:'+n(c)+'})">周'+n(i.days.charAt(c))+'</td><td class="_dB"><table class="_W"><tbody id="hours_'+n(i.viewId)+"_"+n(c)+'" mx-view="mx-hour/index?border=no" mx-change="__cW({day:'+n(c)+'})"></tbody></table></td><td class="_dB"><div class="_dF"><a mx-click="__dc({day:'+n(c)+'})" href="#">复制到</a></div></td></tr>';return _+="</tbody></table>"},init:function(t){var i=this;i.__aY=l(t.days||[r,r,r,r,r,r,r]),d.__e(),i.__j=a("#"+i.id),i.on("destroy",function(){d.__h(i),d.__i()})},render:function(){this.updater.digest({viewId:this.id,days:"一二三四五六日"}),this.val(this.__aY)},__k:function(t){var i=e.inside(t,"dlg_"+this.id);if(!i&&this.__cZ){var _=this.__cZ.parent();i=e.inside(t,_[0])}return i},__d_:function(){var t=this.__aY.slice(0,5).join(""),i=this.__aY.slice(-2).join(""),_=t.indexOf("1")>-1,e=i.indexOf("1")>-1,a=-1==t.indexOf("0"),d=-1==i.indexOf("0"),s=a&&d;this.updater.digest({allDays:s,weekdays:!e&&a,weekends:d&&!_})},__da:function(){for(var t=this.__aY,i=0,_=void 0,a=void 0;i<t.length;i++)_=t[i],(a=e.Vframe.get("hours_"+this.id+"_"+i))&&a.invoke("val",[_])},val:function(t){return t&&(this.__aY=l(t),this.__da(),this.__d_()),this.__aY},__g:function(){if(!this.__l){this.__l=!0,d.__m(this);var t=this.__cZ,i=a("#dlg_"+this.id);i.show();var _=t.offset(),e=_.left+t.outerWidth()-i.outerWidth(),s=_.top+t.outerHeight()+10;i.offset({left:e,top:s}),t.parent().addClass("_dK")}},__a:function(){if(this.__l){this.__l=!1,d.__h(this),a("#dlg_"+this.id).hide();var t=this.__cZ;t&&t.parent().removeClass("_dK")}},__w:function(){var t=this.__aY;this.__j.val(t).trigger({type:"change",days:t})},"__db<change>":function(t){switch(t.stopPropagation(),t.params.type){case 0:this.__aY=[n,n,n,n,n,n,n];break;case 1:this.__aY=[n,n,n,n,n,r,r];break;case 2:this.__aY=[r,r,r,r,r,n,n]}this.__d_(),this.__da(),this.__w()},"__cW<change>":function(t){t.stopPropagation();var i=this;i.__aY[t.params.day]=t.range,clearTimeout(i.__cR),i.__cR=setTimeout(i.wrapAsync(function(){i.__d_()}),100),i.__w()},"__aX<click>":function(t){var i=t.params.day,_=e.Vframe.get("hours_"+this.id+"_"+i);if(_){_.invoke("val").indexOf("0")>-1?_.invoke("val",[this.__aY[i]=n]):_.invoke("val",[this.__aY[i]=r]),this.__d_(),this.__w()}},"__dc<click>":function(t){t.preventDefault();var i=a(t.eventTarget);this.__cZ=i,this.__g(),this.updater.digest({currentClone:t.params.day})},"__dd<click>":function(){this.__a()},"__de<click>":function(){var t=this,i=t.updater.get("currentClone"),_=t.__aY[i];a("#dlg_"+t.id+" input:checked").each(function(i,e){t.__aY[e.value]=_}),t.__a(),t.__da(),t.__d_()}})});