define("mx-hour/index",["magix","$","mx-dragselect/index"],(e,a,d)=>{e("mx-dragselect/index");var i=e("magix");i.applyStyle("_w","._dw{padding:0;height:38.4px;overflow:hidden;cursor:default;min-width:1px}._dx{opacity:0}._dy{background-color:#f37b63}._dz{border:none}._dA{border-right:1px solid #e6e6e6}");var t=e("$");d.exports=i.View.extend({tmpl:{html:'<tr mx-guid="g0" mx-change="__e()" mx-dragbegin="__aY()" mx-dragfinish="__aZ()" mx-view="mx-dragselect/index">1</tr>',subs:[{keys:["noBorder"],path:'tr[mx-guid="g0"]',tmpl:'<%for(var _=0;_<24;_++){%><td class="_dw<%if($$.noBorder){%> _dz<%if(_<23){%> _dA<%}}%>" data-hour="<%=_%>"><span class="_dx"><%!(\'0\'+_).slice(-2)%></span></td><%}%>',s:"1"}]},init:function(e){this.__cO=e.range,this.__cP="no"==e.border},render:function(){this.updater.digest({noBorder:this.__cP});var e=t("#"+this.id);this.__h=e,this.__cM=e.find("._dw"),this.__cO&&this.val(this.__cO)},val:function(e){var a=this.__cM;if(e||""===e){var d={};a.each(function(a,i){i=t(i),"1"==e.charAt(a)?(d[a]=1,i.addClass("_dy")):i.removeClass("_dy")}),this.__aV=d}else e=[],a.each(function(a,d){d=t(d),a<24&&e.push(d.hasClass("_dy")?1:0)}),e=e.join("");return e},__u:function(){var e=this.__aX,a=this.val();e!=a&&this.__h.val(a).trigger({type:"change",range:a})},"__e<change,click>":function(e){e.stopPropagation();var a=t(e.node),d=a.data("hour"),i=this.__aV,_=this.__aW;"add"==e.action?i[d]?(a.removeClass("_dy"),delete i[d],"drag"==e.mode&&(_[d]=1)):(a.addClass("_dy"),i[d]=1,"drag"==e.mode&&delete _[d]):"remove"==e.action&&(_[d]?(a.addClass("_dy"),i[d]=1,"drag"==e.mode&&delete _[d]):(a.removeClass("_dy"),delete i[d],"drag"==e.mode&&(_[d]=1))),"click"==e.mode&&this.__u()},"__aY<dragbegin>":function(e){e.stopPropagation();this.__aX=this.val(),this.__aW={}},"__aZ<dragfinish>":function(e){e.stopPropagation();this.__u(),delete this.__aW}},{improve:function(e){e||(e="");for(var a=0;a<24;)e.charAt(a)||(e+="0"),a++;return e}})});