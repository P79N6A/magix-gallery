define("mx-dialog/__test__/alert",["magix","mx-dialog/index"],function(t,n,i){var e=t("magix"),l=t("mx-dialog/index");i.exports=e.View.extend({tmpl:{html:'<h2>mx-dialog</h2><h3>alert与confirm</h3><div class="_B _ai"><button type="button" class="_an _ao _j" mx-click="alert()">alert</button><button type="button" class="_an _ao _j" mx-click="confirm()">confirm</button></div><div class="_B"><div>HTML Code:</div><pre>&lt;button type="button" class="btn btn-brand mr20" mx-click="alert()"&gt;alert&lt;/button&gt;\n&lt;button type="button" class="btn btn-brand mr20" mx-click="confirm()"&gt;confirm&lt;/button&gt;</pre><div class="_z">Javascript Code:</div><pre>let Magix = require(\'magix\');\nlet Dialog = require(\'app/gallery/mx-dialog/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [Dialog],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'alert&lt;click&gt;\' () {\n        this.alert(\'xxx\', () => {\n            console.log(\'确定被点击\');\n        });\n    },\n    \'confirm&lt;click&gt;\' () {\n        this.confirm(\'xxx\', () => {\n            console.log(\'确定被点击\');\n        }, () => {\n            console.log(\'取消被点击\');\n        });\n    }\n});</pre></div>',subs:[]},mixins:[l],render:function(){this.updater.digest()},"alert<click>":function(){this.alert("xxx",function(){})},"confirm<click>":function(){this.confirm("xxx",function(){},function(){})}})});