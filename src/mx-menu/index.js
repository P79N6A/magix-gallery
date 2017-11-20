define("mx-menu/index",["magix","$","../mx-monitor/index"],function(e,_,t){var i=e("magix"),d=e("$"),n=e("../mx-monitor/index"),a=i.Vframe;i.applyStyle("_y","._dR{-webkit-transition:margin-left .25s;transition:margin-left .25s}._dS{background-color:#fff;border:1px solid #e6e6e6;border-radius:4px;cursor:default;padding:4px 0}._dT{height:29px;line-height:29px;cursor:default;border-radius:4px;padding:0 12px;margin:0 4px}._dU{color:#fff;background-color:#6363e6}._dV{margin-left:10px}._dW{margin-left:-10px}._dX{font-size:12px;-webkit-transform:scaleX(-1);transform:scaleX(-1);top:25%;color:#e6e6e6}");var r=null,s={left:"_dW",right:"_dV"},o=function(e,_,t){for(var d={},n={},a=[],r=0,s=e.length;r<s;r++){var o=i.mix({},e[r]);d[o[_]]=o,n[o[_]]&&(o.children=n[o[_]]),i.has(o,t)&&""!==o[t]?d[o[t]]?(d[o[t]].children||(d[o[t]].children=[])).push(o):n[o[t]]?n[o[t]].push(o):n[o[t]]=[o]:a.push(o)}return{list:a,map:d}};t.exports=i.View.extend({tmpl:{html:'<div mx-guid="g0" style="width:<%=$$.width%>px;<%if($$.isChild||$$.contextMenu){%>position:absolute;left:-1000000px<%}%>" mx-mouseover="__do();" class="_dR" mx-contextmenu="__E()"><ul mx-guid="g1" class="_dS _aj">2</ul></div>',subs:[{keys:["width","isChild","contextMenu"],path:'div[mx-guid="g0"]',attr:'style="width:<%=$$.width%>px;<%if($$.isChild||$$.contextMenu){%>position:absolute;left:-1000000px<%}%>"',attrs:[{n:"style"}]},{keys:["list","valueKey","textKey","viewId"],path:'ul[mx-guid="g1"]',tmpl:'<%for(var a=0,b;a<$$.list.length;a++){b=$$.list[a]%><li class="_al _dT" mx-mouseover="__dn({id:\'<%=$eq(b[$$.valueKey])%>\'})" mx-mouseout="__dn({id:\'<%=$eq(b[$$.valueKey])%>\'});\n            " <%if(!b.children){%> mx-click="__ca({id:\'<%=$eq(b[$$.valueKey])%>\'})" <%}%> title="<%=b[$$.textKey]%>" id="<%=$$.viewId%>_<%=b[$$.valueKey]%>"><%=b[$$.textKey]%> <%if(b.children){%><span class="_ab __ _dX">&#xe61e;</span><%}%></li><%}%>',s:"2"}]},init:function(e){var _=this;_.assign(e),_.__cX=e.__cX,_.__cY=e.__cY,_.__cZ=e.picked,_.__d_||(n.__e(),_.on("destroy",function(){n.__g(_),n.__h()}))},assign:function(e){var _=this,t=e.width||340,i=e.valueKey||"id",d=e.parentKey||"pId",n=e.textKey||"text",a=e.__d_;if(a)_.__cd=e.__cd,_.__bP=e.list;else{var r=o(e.list,i,d);_.__cd=r.map,_.__bP=r.list}return _.__d_=a,_.__da=t,_.__db=i,_.__dc=d,_.__dd=n,_.__de=e.pId,_.__df=e.__df,!0},render:function(){var e=this;e.updater.digest({viewId:e.id,contextMenu:e.__cX,isChild:e.__d_,list:e.__bP,width:e.__da,valueKey:e.__db,textKey:e.__dd}),e.__cX&&e.__f(e.__cY)},__j:function(e){var _=this,t=i.inside(e,_.id);if(!t)for(var d=_.owner.children(),n=d.length;n--;){var r=a.get(d[n]);if(r&&(t=r.invoke("__j",e)))break}return t},__f:function(e,_){var t=this;if(!t.__k){t.__k=1;var i=d("#"+t.id+" div"),a=d(document),o=-1,l=-1,u="right",c=i.outerWidth(),f=i.outerHeight(),v=0,m=0;if(_){var h=_.offset();v=_.outerWidth(),m=_.outerHeight(),o=h.left+v,l=h.top}else o=e.pageX,l=e.pageY;o+c>a.width()&&(u="left",(o=o-c-v)<0&&(o=0)),l+f>a.height()&&(l-=f,(l+=m)<0&&(l=0)),_&&("right"==u?o-=10:o+=10);var p=t.__df||t;r!=p&&(r=p),t.__d_?i.css({left:o,top:l}).addClass(s[u]):i.css({left:o,top:l}),p.__dg||(p.__dg=1,n.__l(t))}},__a:function(){for(var e=this,_=e.owner.children(),t=_.length-1;t>=0;t--){var i=a.get(_[t]);i&&i.invoke("__a")}if(e.__k){e.__k=!1;var r=d("#"+e.id+" div");e.__d_?(r.removeClass(s.left).removeClass(s.right),r.css({left:-1e5}),e.__d_.removeClass("_dU")):(e.__cX&&r.css({left:-1e4}),delete e.__dg,n.__g(e))}},__di:function(e){clearTimeout(this["__dh"+e])},__dk:function(e,_,t){var i=this;i["__dj"+_]=setTimeout(i.wrapAsync(function(){var n=i.id+"_menu_"+_,r=a.get(n);r||(d("body").append('<div id="'+n+'" />'),r=i.owner.mountVframe(n,"mx-menu/index",{__d_:d("#"+i.id+"_"+_),width:i.__da,valueKey:i.__db,textKey:i.__dd,parentKey:i.__dc,list:t,pId:_,__df:i.__df||i,__cd:i.__cd})),r.invoke("__f",[null,e],!0)}),250)},__dl:function(e){var _=this,t=_.id+"_menu_"+e,i=a.get(t);i&&(_["__dh"+e]=setTimeout(_.wrapAsync(function(){i.invoke("__a")}),50))},"__dn<mouseover,mouseout>":function(e){var _=this;if(!i.inside(e.relatedTarget,e.eventTarget)){var t=d(e.eventTarget);t["mouseout"==e.type?"removeClass":"addClass"]("_dU");var n=e.params.id;if(_.__dl(_.__dm),"mouseover"==e.type){var a=_.__cd[n].children;a&&(_.__di(n),_.__dk(t,n,a),_.__dm=n)}else clearTimeout(_["__dj"+n])}},"__do<mouseover>":function(e){var _=this;!i.inside(e.relatedTarget,e.eventTarget)&&(_.__d_||r==_||r&&r.__a(),_.__d_&&(d(_.__d_).addClass("_dU"),_.owner.parent().invoke("__di",[_.__de])))},"__ca<click>":function(e){var _=this,t=_.__df||_,i=d("#"+t.id),n={type:"pick",item:_.__cd[e.params.id]};i.trigger(n),t.__a();var a=_.__cZ;a&&a(n.item)},"__E<contextmenu>":function(e){e.preventDefault()}},{show:function(e,_,t){var n=_.eventTarget;n.id||(n.id=i.guid());var a="ctx_"+n.id,r=i.Vframe.get(a);r?r.invoke("__f",[_],!0):(d("body").append('<div id="'+a+'" />'),t=t||{},i.mix(t,{__cX:1,__cY:_}),r=e.owner.mountVframe(a,"mx-menu/index",t))}})});