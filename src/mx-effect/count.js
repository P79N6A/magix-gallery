define("mx-effect/count",["magix","$","../mx-runner/fx"],(i,_,t)=>{var n=i("magix"),c=i("$"),e=i("../mx-runner/fx");t.exports=n.View.extend({mixins:[e],init:function(i){this.__j=c("#"+this.id),this.__cE=this.__cF(),this.assign(i)},assign:function(i){return this.__cG=+i.value,this.__cH=+i.duration||500,this.__cI=+i.fixed||0,this.__cE.__at(),!0},render:function(){var i=this,_=i.__j,t=_.prop("tagName"),n=i.__cE,c=i.__cG,e="INPUT"==t||"TEXTAREA"==t?"val":"html",s=+_[e]();n.__cJ(i.__cH,function(t){_[e](t(s,c).toFixed(i.__cI))})}})});