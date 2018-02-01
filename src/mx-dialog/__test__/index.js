define("mx-dialog/__test__/index",["magix","mx-dialog/index","__test__/hl"],(i,t,e)=>{i("__test__/hl");var n=i("magix"),a=i("mx-dialog/index");e.exports=n.View.extend({tmpl:function(i,t){var e="";return e+="",t.inDialog&&(e+='<div class="_aE">加载view测试</div><div class="_aF">'),e+='<h2>mx-dialog</h2><h3>加载普通view</h3><div class="_B _ai"><button type="button" class="_an _ao _j" mx-click="view()">view</button></div><div class="_B"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;button type="button" class="btn btn-brand mr20" mx-click="view()"&gt;view&lt;/button&gt;</pre><div class="_z">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet Dialog = require(\'app/gallery/mx-dialog/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [Dialog],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'view&lt;click&gt;\' () {\n        this.mxDialog(\'path/to/view\', {\n            width: 900\n        });\n    }\n});</pre></div>',t.inDialog&&(e+='</div><div class="_aG">dialog footer</div>'),e+=""},mixins:[a],init:function(i){this.updater.set(i)},render:function(){this.updater.digest()},"view<click>":function(){this.mxDialog("mx-dialog/__test__/index",{inDialog:!0,width:600})}})});