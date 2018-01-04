define("mx-taginput/index",["magix","$","./suggest"],(e,t,i)=>{e("./suggest");var s=e("magix");s.applyStyle("_L","._fm{height:auto;min-height:32px;padding:1px 7px;position:relative;border:1px solid #e6e6e6;border-radius:4px;width:340px;line-height:1}._fm:hover{border-color:#ccc}._fn{cursor:not-allowed;background-color:#fbfbfb}._fn:hover{border-color:#e6e6e6}._fo{height:auto;cursor:text}._fp{position:absolute;left:9px;top:8px;color:#999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._fq{position:relative;display:inline-block;margin:1px;cursor:pointer;background-color:#eee;border-radius:4px}._fr{width:1px;visibility:hidden}._fs{float:left;border-right:1px solid #fff;max-width:200px;overflow:hidden}._ft,._fs{height:24px;line-height:24px;padding:0 4px}._ft{width:20px;font-weight:bolder;text-align:center;color:#999;display:inline-block}._fu{border:none;outline:none;height:24px;line-height:24px;padding:0;width:20px;position:relative;z-index:1;background:transparent}._fn ._fo,._fn ._ft,._fn ._fs,._fn ._fu{cursor:not-allowed}");var _=e("$");i.exports=s.View.extend({tmpl:{html:'<div mx-guid="g0" class="_fo _aj" mx-click="__gg()" id="ipt_<%=$$.viewId%>">1</div>',subs:[{keys:["viewId","items","placeholder","textKey"],path:'div[mx-guid="g0"]',tmpl:'<%if(!$$.items.length&&$$.placeholder){%><div class="_fp"><%=$$.placeholder%></div><%}if($$.items.length){for(var _=0;_<$$.items.length;_++){var a=$$.items[_];%><div class="_fq" mx-contextmenu="prevent()"><div class="_fs _al"><%=$$.textKey?a[$$.textKey]:a%></div><div class="_ft" mx-click="__ge({idx:<%!_%>})">x</div></div><%}}else{%><div class="_fq _fr" mx-click="stop()"><div class="_ft" mx-click="__ge({idx:<%!_%>})">x</div></div><%}%><input mx-guid="g2" mx-keydown="__gf()" mx-keyup="__gf()" mx-input="__gf()" mx-paste="__gf()" mx-pick="__k()" mx-change="__am()" mx-focusin="__am()" mx-focusout="__am()" mx-showlist="__gh()" mx-hidelist="__gh()" <%if(!$$.disabled){%> mx-view="mx-taginput/suggest?list=<%@$$.list%>&textKey=<%@$$.textKey%>&valueKey=<%@$$.valueKey%>&relateIds=ipt_<%!$eu($$.viewId)%>&offsetLeft=-11&width=<%!$eu($$.width)%>&scrollTop=<%@$$.scrollTop%>" <%}else{%> disabled="disabled" <%}%> class="_fu" autocomplete="off">',s:"1",attr:'id="ipt_<%=$$.viewId%>"',attrs:[{n:"id",p:1}],mask:"3111"},{keys:["disabled","list","valueKey","viewId","width","scrollTop"],path:'input[mx-guid="g2"]',pKeys:["items","placeholder","textKey"],attr:'<%if(!$$.disabled){%> mx-view="mx-taginput/suggest?list=<%@$$.list%>&textKey=<%@$$.textKey%>&valueKey=<%@$$.valueKey%>&relateIds=ipt_<%!$eu($$.viewId)%>&offsetLeft=-11&width=<%!$eu($$.width)%>&scrollTop=<%@$$.scrollTop%>" <%}else{%> disabled="disabled" <%}%>',attrs:[{n:"mx-view",v:1},{n:"disabled",b:1,p:1}]}]},init:function(e){this.__eM=e.list||[],this.__h=_("#"+this.id),this.updater.set({disabled:e.disabled,placeholder:e.placeholder||"",textKey:e.textKey,valueKey:e.valueKey}),this.__fZ(e.selected)},__g_:function(){for(var e=this.updater,t=e.get("sMap"),i=e.get("valueKey"),s=this.__eM,_=[],a=0,d=void 0;a<s.length;a++)d=s[a],t[i?d[i]:d]||_.push(d);return _},render:function(){var e=_("#"+this.id),t=e.outerWidth();0===t&&(t=340),this.updater.digest({width:t,list:this.__g_(),viewId:this.id}),e.addClass("_fm"),this.__e_=e,this.__ga();this.updater.get().disabled&&e.addClass("_fn")},__ga:function(){var e=this.__e_;this.__gb=e.find("input"),this.__gb.width(20);var t=_("#ipt_"+this.id).width()-this.__gb.position().left;this.__gb.width(t>=20?t:20)},__fZ:function(e){e=((e=e||"")+"").split(",");for(var t=[],i={},_=this.updater.get("valueKey"),a=this.__eM,d=s.toMap(e),o=0,l=void 0,h=void 0;o<a.length;o++)l=a[o],h=_?l[_]:l,s.has(d,h)&&(i[h]=1,t.push(l));this.updater.set({sMap:i,items:t}),this.__h.val(e.join(","))},val:function(e){return e&&(this.__fZ(e),this.updater.digest({list:this.__g_()}),this.__ga(),this.__e_.removeClass("_ar"),this.__u()),this.updater.get("items")},__u:function(){for(var e=this.updater,t=[],i=e.get("items"),s=e.get("valueKey"),a=0,d=void 0;a<i.length;a++)d=i[a],t.push(s?d[s]:d);_("#"+this.id).val(t.join(",")).trigger({type:"change",ids:t,items:i})},__gd:function(){var e=this;clearTimeout(e.__gc),e.__ev=!0,e.__gb.focus(),e.__gc=setTimeout(e.wrapAsync(function(){delete e.__ev}),20)},"__gf<keydown,input,paste,keyup>":function(e){e.stopPropagation();var t=e.eventTarget.value;if(this.__cs!==t){this.__cs=t;var i=this.__e_.find("._fp");t?i.hide():i.show()}if(!t&&"keydown"==e.type&&8==e.keyCode){var s=this.updater.get("items").length-1;s>-1&&(this["__ge<click>"]({params:{idx:s}}),this.__gd())}},"__k<pick>":function(e){e.stopPropagation();var t=this.updater,i=t.get("items"),s=t.get("sMap"),_=e.item,a=t.get("valueKey"),d=a?_[a]:_;s[d]||(s[d]=1,i.push(_),t.digest({items:i,scrollTop:e.scrollTop,list:this.__g_()}),this.__ga(),this.__gd(),this.__u())},"__gg<click>":function(){this.__h.hasClass("_fn")||this.__gb.focus()},"__ge<click>":function(e){if(!this.__h.hasClass("_fn")){var t=this.updater,i=t.get("items"),s=t.get("sMap"),_=t.get("valueKey"),a=i[e.params.idx];delete s[_?a[_]:a],i.splice(e.params.idx,1),t.digest({items:i,list:this.__g_()}),this.__ga(),this.__u(),this.__gd()}},"__D<contextmenu>":function(e){e.preventDefault()},"__am<change,focusin,focusout>":function(e){e.stopPropagation();var t=this.__e_;"focusin"==e.type&&t.addClass("_ar")},"__gh<showlist,hidelist>":function(e){if(!this.__ev&&(_("#"+this.id).trigger({type:"showlist"==e.type?"focusin":"focusout"}),"hidelist"==e.type)){this.__e_.removeClass("_ar")}}})});