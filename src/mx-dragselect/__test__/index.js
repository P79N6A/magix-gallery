define("mx-dragselect/__test__/index",["magix","$","../index"],function(e,l,i){e("../index");var t=e("magix"),n=e("$");t.applyStyle("c",".aI{width:500px;cursor:default}.aI li{width:100px;height:100px;text-align:center;float:left;line-height:100px;background:#f8f6f6;border:1px solid #fff;margin:10px}.aI li[select]{background:#ccc}.aI .aJ{border:1px solid #5665eb;background:#4d4fa8;opacity:.5;color:#fff}"),i.exports=t.View.extend({tmpl:{html:'<h2>mx-dragselect</h2><h3>默认示例</h3><div class="B ag"><ul mx-view="mx-dragselect/index" class="aI Z" mx-change="show()" mx-dragbegin="begin()" mx-dragfinish="end()"><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li></ul></div><div class="B"><div>HTML Code:</div><pre>\n&lt;ul mx-view="mx-dragselect/index" class="hor fl" mx-change="show()" mx-dragbegin="begin()" mx-dragfinish="end()"&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre><div class="z">Javascript Code:</div><pre>\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\nMagix.applyStyle(\'@index.less\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest();\n        me.$selected = {};\n    },\n    \'show&lt;change&gt;\'(e) {\n        let node = e.node;\n        let me = this;\n        if (!node.id) node.id = Magix.guid(\'mx_\');\n        if (e.action == \'add\') {\n            if (me.$selected[node.id]) {\n                $(node).css({\n                    opacity: 1\n                });\n                delete me.$selected[node.id];\n\n                me.$temp[node.id] = 1;\n            } else {\n                $(node).css({\n                    opacity: 0.1\n                });\n                me.$selected[node.id] = node;\n                delete me.$temp[node.id];\n            }\n        } else if (e.action == \'remove\') {\n            if (me.$temp[node.id]) {\n                $(node).css({\n                    opacity: 0.1\n                });\n                me.$selected[node.id] = node;\n                delete me.$temp[node.id];\n            } else {\n                $(node).css({\n                    opacity: 1\n                });\n                delete me.$selected[node.id];\n                me.$temp[node.id] = 1;\n            }\n        }\n        console.log(me.$selected);\n    },\n    \'begin&lt;dragbegin&gt;\'() {\n        this.$temp = {};\n    },\n    \'end&lt;dragfinish&gt;\'() {\n        delete this.$temp;\n    }\n});\n    </pre></div><h3 class="f">部分不能选择</h3><div class="B ag"><ul mx-view="mx-dragselect/index?selector=li%5Bselect%21%3Dfalse%5D" class="aI Z" mx-change="show()" mx-dragbegin="begin()" mx-dragfinish="end()" test="aI"><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li><li select="false">123</li><li select="false">456</li></ul></div><div class="B"><div>HTML Code:</div><pre>&lt;ul mx-view="mx-dragselect/index" class="hor fl" mx-change="show()" mx-dragbegin="begin()" mx-dragfinish="end()" view-selector="li[select!=false]"&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li select="false"&gt;123&lt;/li&gt;\n        &lt;li select="false"&gt;456&lt;/li&gt;\n    &lt;/ul&gt;</pre></div>',subs:[]},render:function(){var e=this;e.updater.digest(),e.$selected={}},"show<change,click>":function(e){var l=e.node,i=this;l.id||(l.id=t.guid("mx_")),"add"==e.action?i.$selected[l.id]?(n(l).removeClass("aJ"),delete i.$selected[l.id],"drag"==e.mode&&(i.$temp[l.id]=1)):(n(l).addClass("aJ"),i.$selected[l.id]=l,"drag"==e.mode&&delete i.$temp[l.id]):"remove"==e.action&&(i.$temp[l.id]?(n(l).addClass("aJ"),i.$selected[l.id]=l,"drag"==e.mode&&delete i.$temp[l.id]):(n(l).removeClass("aJ"),delete i.$selected[l.id],"drag"==e.mode&&(i.$temp[l.id]=1)))},"begin<dragbegin>":function(){this.$temp={}},"end<dragfinish>":function(){delete this.$temp}})});