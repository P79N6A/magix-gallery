define("mx-slider/__test__/index",["magix","mx-gtip/index","../index"],function(e,i,n){e("../index");var d=e("magix"),s=e("mx-gtip/index");n.exports=d.View.extend({tmpl:{html:'<h2>mx-slider</h2><h3>默认情形</h3><div class="B ag"><div mx-view="mx-slider/index?max=200&min=100&value=130&step=0.05" class="Z"></div></div><div class="B"><div>HTML Code:</div><pre>&lt;mx-view path="mx-slider/index"\n    max="200"\n    min="100"\n    value="130"\n    step="0.05"\n    class="fl"\n&gt;&lt;/mx-view&gt;</pre></div><h3 class="f">垂直</h3><div class="B ag"><div mx-view="mx-slider/index?max=200&min=100&value=130&step=0.05&vertical=true" class="Z"></div></div><div class="B"><div>HTML Code:</div><pre>&lt;mx-view path="mx-slider/index"\n    max="200"\n    min="100"\n    value="130"\n    step="0.05"\n    class="fl"\n    vertical="true"\n&gt;&lt;/mx-view&gt;</pre></div><h3 class="f">禁用</h3><div class="B ag"><div mx-view="mx-slider/index?max=200&min=100&value=130&step=0.05&disabled=true" class="Z"></div></div><div class="B"><div>HTML Code:</div><pre>&lt;mx-view path="mx-slider/index"\n    max="200"\n    min="100"\n    value="130"\n    step="0.05"\n    disabled="true"\n    class="fl"\n&gt;&lt;/mx-view&gt;</pre></div><h3 class="f">响应change事件</h3><div class="B ag"><div mx-view="mx-slider/index?max=200&min=0&value=130&step=5" mx-change="showValue()" class="Z"></div></div><div class="B"><div>HTML Code:</div><pre>&lt;mx-view path="mx-slider/index"\n    max="200"\n    min="100"\n    value="130"\n    step="5"\n    mx-change="showValue()"\n    class="fl"\n&gt;&lt;/mx-view&gt;</pre><div class="z">Javascript Code:</div><pre>let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showValue&lt;change&gt;\' (e) {\n        this.gtipRT(\'value:\' + e.value);\n    }\n});</pre></div>',subs:[]},mixins:[s],render:function(){this.updater.digest()},"showValue<change>":function(e){this.gtipRT("value:"+e.value)}})});