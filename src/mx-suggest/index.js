define("mx-suggest/index",["magix","$","../mx-monitor/index"],function(e,_,t){var i=e("magix"),r=e("$"),a=e("../mx-monitor/index");i.applyStyle("E",".eW{position:absolute;border:1px solid #e6e6e6;font-size:14px;max-height:260px;overflow:auto;list-style:none;border-radius:4px;background-color:#fff;display:none;z-index:10;padding:3px 0;line-height:1.8}.eX{padding:0 4px;cursor:pointer;margin:2px 0}.eY{color:#666;display:block;width:100%;padding:0 6px;height:29px;line-height:29px;border-radius:4px}.eZ,.eY:active,.eY:focus,.eY:hover{color:#333;background-color:#f0f0f0}.eZ{border-radius:4px;text-decoration:none;outline:0}"),t.exports=i.View.extend({tmpl:{html:'<ul mx-guid="g0" class="eW ah" style="width:<%=$$.width%>px" mx-mouseout="__eo()" mx-mousemove="__ep()" mx-contextmenu="__bQ()">1</ul>',subs:[{keys:["width","rList","list","textKey","viewId"],path:'ul[mx-guid="g0"]',tmpl:'<%if($$.rList){for(var a=0,b;a<$$.list.length;a++){b=$$.list[a]%><li class="eX" title="<%=$$.textKey?b[$$.textKey]:b%>"><a href="#" class="eY aj" data-idx="<%!a%>" mx-click="__en({item:\'<%@b%>\'})" id="sg_<%!$$.viewId%>_<%!a%>"><%=$$.textKey?b[$$.textKey]:b%></a></li><%}}%>',s:"1",attr:'style="width:<%=$$.width%>px"',attrs:[{n:"style"}],mask:"21111"}]},init:function(e){var _=this;_.__ed=e.list||[],a.__d(),_.on("destroy",function(){a.__f(_),a.__g(),_.__h.off("keyup paste input",_.__ee).off("focus",_.__ef)}),_.updater.set({viewId:_.id,textKey:e.textKey,valueKey:e.valueKey}),_.__eg=-1},__i:function(e){return i.inside(e,this.id)||i.inside(e,"suggest_"+this.id)},update:function(e,_){var t=this;_||(t.__ed=e),t.__eg=-1,t.updater.digest({list:t.__eh=e}),t.__dA&&(e&&e.length?t.__dA.addClass("eW"):t.__dA.removeClass("eW"))},render:function(){var e=this,_=r("#"+e.id);e.__h=_,_.on("focus",e.__ef=r.proxy(e.show,e)).on("keyup paste input",e.__ee=r.proxy(e.__ei,e));var t="suggest_"+e.id;r("<div />").attr("id",t).insertAfter(_),e.updater.to(t),e.updater.set({width:_.outerWidth()}),e.update(e.__ed),e.__dA=r("#"+t+" ul"),e.__ed&&e.__ed.length||e.__dA.removeClass("eW")},__ei:function(e){var _=this;_.__j||_.__e();var t=_.__eh;if(40==e.keyCode)_.__ej(),_.__eg++,_.__eg>=t.length&&(_.__eg=0),_.__ek();else if(38==e.keyCode)_.__ej(),_.__eg--,_.__eg<0&&(_.__eg=t.length-1),_.__ek();else if(13==e.keyCode){if(_.__eg>-1&&_.__eg<_.__eh.length){var i=_.__eh[_.__eg];_.__h.trigger({type:"pick",item:i});var a=_.updater.get("textKey");a&&(i=i[a]),_.__h.val(i).trigger("change"),_.__ei({target:_.__h[0]}),_.__ej(),_.__eg=-1,_.__a()}}else{var s=r.trim(e.target.value);if(s!=_.__el)if(_.__el=s,s){for(var o=[],d=_.__ed.slice(),n=_.updater.get("textKey"),l=0,g=void 0;l<d.length;l++)g=d[l],((n?g[n]:g)+"").indexOf(s)>=0&&o.push(g);_.update(o,!0)}else _.update(_.__ed,!0)}},__e:function(){var e=this,_=e.updater;if(!e.__j){e.__j=!0,_.get("rList")||_.digest({rList:!0}),a.__k(e);var t=e.__h.position();e.__dA.css({display:"block",left:t.left+e.$offsetLeft,top:t.top+e.__h.outerHeight()+5}),e.__h.trigger("showlist")}},__ej:function(){var e=this;r("#sg_"+e.id+"_"+e.__eg).removeClass("eZ")},__ek:function(e){var _=this,t=r("#sg_"+_.id+"_"+_.__eg);if(t.addClass("eZ"),!e&&t.length){_.__em=1;var i=t.outerHeight(),a=(_.__eg+1)*i,s=_.__dA,o=s.height(),d=s.prop("scrollTop"),n=Math.ceil(o/i);a<d+i?s.prop("scrollTop",a-i):a>d+o&&s.prop("scrollTop",(_.__eg+2-n)*i)}},__a:function(){var e=this;e.__j&&(e.__j=!1,a.__f(e),e.__dA.hide(),e.__h.trigger("hidelist"))},"__en<click>":function(e){e.preventDefault();var _=this,t=e.params.item;_.__h.trigger({type:"pick",item:t});var i=_.updater.get("textKey");i&&(t=t[i]),_.__h.val(t).trigger("change"),_.__ei({target:_.__h[0]}),_.__a()},"__eo<mouseout>":function(e){if(!i.inside(e.relatedTarget,e.eventTarget)){var _=this;_.__ej(),_.__eg=-1}},"__ep<mousemove>":function(e){var _=this;if(_.__em)delete _.__em;else{var t=r(e.target);if(t.is("li")){var i=t.data("idx");i!=_.__eg&&(_.__ej(),_.__eg=i,_.__ek(!0))}}},"__bQ<contextmenu>":function(e){e.preventDefault()}})});