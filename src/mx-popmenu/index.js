define("mx-popmenu/index",["magix","$","../mx-monitor/index"],function(_,i,t){var e=_("magix"),o=_("$"),n=_("../mx-monitor/index");t.exports=e.View.extend({init:function(_){var i=this;i.__I=_.placement,i.__J=_.align,n.__d();var t=o("#"+i.id),e=function(_){_.preventDefault(),i.__e()};i.on("destroy",function(){n.__f(i),n.__g(),t.off("click",e)}),t.on("click",e),i.__h=t,i.__dA=o(_.related),i.__dA.css({position:"absolute"})},__i:function(_){var i=this;return e.inside(_,i.id)||e.inside(_,i.__dA[0])},__e:function(){var _=this;if(!_.__j){var i=_.__dA,t=_.__h;_.__j=!0,n.__k(_),i.show();var e=t.offset(),o=void 0,d=void 0;switch(_.__I){case"top":d=e.top-i.outerHeight()-5;break;default:d=e.top+t.outerHeight()+5}switch(_.__J){case"right":o=e.left+t.outerWidth()-i.outerWidth();break;default:o=e.left}i.offset({left:o,top:d})}},__a:function(){var _=this;if(_.__j){var i=_.__dA;_.__j=!1,i.hide(),n.__f(_)}}})});