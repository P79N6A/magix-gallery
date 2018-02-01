define("mx-day/index",["magix","$","mx-dropdown/index","./month"],(e,a,t)=>{e("mx-dropdown/index"),e("./month");var n=e("magix"),_=e("$");n.applyStyle("_k","._bR{padding:0;height:38.4px}._bS{border:none}._bT{border-right:1px solid #e6e6e6}");var r=function(e,a){var t=a[e];if(!t){t=[];for(var n=12;n--;)t[n]="";a[e]=t}return t},i=[{key:"MON",day:"一"},{key:"TUE",day:"二"},{key:"WED",day:"三"},{key:"THU",day:"四"},{key:"FRI",day:"五"},{key:"SAT",day:"六"},{key:"SUN",day:"日"}];t.exports=n.View.extend({tmpl:function(e,a){var t="",n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,r=function(e){return null==e?"":""+e},i=function(e){return"&"+n[e]+";"},s=function(e){return r(e).replace(_,i)},d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return d[e]},c=/[!')(*]/g,h=function(e){return encodeURIComponent(r(e)).replace(c,o)},l=/[\\'"]/g;t+='<table class="_W"><thead><tr><th class="_bR _a_" width="120">周期设置</th><th class="_bR _Z" colspan="31">';for(var y=0;y<a.weeks.length;y++)t+='<label class="_h _t"><input mx-change="__aU({key:\''+s((m=a.weeks[y].key,r(m).replace(l,"\\$&")))+'\'})" id="'+s(a.viewId)+"_"+s(a.weeks[y].key)+'" type="checkbox" class="_as">每周'+s(a.weeks[y].day)+"</label>";var m;t+='</th></tr><tr><th class="_bR _a_"><div mx-change="__aS()" style="width:100px" class="_g _s" mx-view="mx-dropdown/index?list=',t+=function(t,n,_){for(_=a[e];--_;)if(a[n=e+_]===t)return n;return a[n=e+a[e]++]=t,n}(a.years),t+="&selected="+r(h(a.selectedYear))+'"></div></th><th colspan="31" class="_bR"><table class="_W _X"><tbody><tr>';for(var u=1;u<32;u++)t+='<td class="_bR _a_ _bS',u<30&&(t+=" _bT"),t+='">'+s(("0"+u).slice(-2))+"</td>";t+="</tr></tbody></table></th></tr></thead><tbody>";for(var v=0;v<12;v++)t+='<tr><td class="_bR _ad _a_" mx-click="__aX({m:'+r(v)+'})">'+s(("0"+(v+1)).slice(-2))+'</td><td class="_bR" colspan="31" id="months_'+s(v)+"_"+s(a.viewId)+'" mx-change="__aW({m:'+r(v)+'})" mx-sync="__aW({m:'+r(v)+'})" mx-view="mx-day/month?year='+r(h(a.selectedYear))+"&month="+r(h(v))+"&selected="+r(h(a.days[v]))+'"></td></tr>';return t+="</tbody></table>"},init:function(e){this.assign(e);var a=_("#"+this.id);this.__j=a},assign:function(e){return e.years||(e.years=[(new Date).getFullYear()]),this.__aN=e.years,this.__aO=e.selectedYear||e.years[0],this.__aP=function(e){e=e||{};for(var a in e){var t=e[a];(t=((t=t||"")+"").split(",")).length>12&&(t=t.slice(0,12));for(var n=0;n<12;n++)t[n]||(t[n]="");e[a]=t}return e}(e.selectedDays),!0},render:function(){var e=this.__aO,a=r(e,this.__aP);this.updater.digest({viewId:this.id,weeks:i,years:this.__aN,selectedYear:e,days:a})},__aR:function(){for(var e={},a=i.length;a--;)e[i[a].key]=1;this.__j.find('[mx-view*="mx-day/month"]').each(function(a,t){for(var n=t.vframe.invoke("__aQ"),_=n.length;_--;)delete e[n[_]]});for(a=i.length;a--;){var t=i[a].key;_("#"+this.id+"_"+t).prop("checked",!!e[t])}},"__aS<change>":function(e){e.stopPropagation();var a=r(e.value,this.__aP);this.updater.digest({days:a,selectedYear:this.__aO=e.value})},__w:function(){var e=this.__aP;this.__j.val(e).trigger({type:"change",days:e})},"__aU<change>":function(e){e.stopPropagation();this.__j.find('[mx-view*="mx-day/month"]').each(function(a,t){var n=t.vframe;n&&n.invoke("__aT",[e.params.key,e.eventTarget.checked])}),this.__w()},"__aW<change,sync>":function(e){e.stopPropagation();var a=this;r(a.__aO,a.__aP)[e.params.m]=e.days,e.ignoreSync||(clearTimeout(a.__aV),a.__aV=setTimeout(function(){a.__aR()},20)),"change"==e.type&&a.__w()},"__aX<click>":function(e){var a=e.params.m,t=_("#months_"+a+"_"+this.id),n=r(this.__aO,this.__aP)[a];n=new Array(n.length+1).join(n.indexOf("0")>-1?"1":0),t.invokeView("__r",[n]),this.__w()}})});