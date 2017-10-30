define("mx-dropdown/__test__/index",["magix","mx-gtip/index","../index","../multiple"],function(e,t,i){e("../index"),e("../multiple");var n=e("magix"),l=e("mx-gtip/index");i.exports=n.View.extend({tmpl:{html:'<h2>mx-dropdown</h2><h3>单选</h3><div class="B ag"><div mx-guid="g0" mx-change="showWeek()" style="width:150px" mx-view="mx-dropdown/index?searchbox=<%@$$.searchbox%>&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F"><item value="mon">周一</item><item value="wed">周三</item><item value="thu">周四</item><item value="fri">周五</item><item value="sat">周六</item></div><button mx-click="test()" class="al s am">toggle searchbox</button><div mx-view="mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&disabled=true" mx-change="showWeek()" class="v" style="width:150px;border-radius: 4px 0 0 4px"><item value="mon">周一</item><item value="wed">周三</item><item value="thu">周四</item><item value="fri">周五</item><item value="sat">周六</item></div><div mx-view="mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F" mx-change="showWeek()" style="width:150px;margin-left:-1px; border-radius: 0 4px 4px 0"><item value="mon">周一</item><item value="wed">周三</item><item value="thu">周四</item><item value="fri">周五</item><item value="sat">周六</item></div></div><div class="B"><div>HTML Code:</div><pre>&lt;mx-view\n    path="app/gallery/mx-dropdown/index"\n    searchbox="true"\n    empty-text="请选择日期"\n    mx-change="showWeek()"\n    class="fl" style="width:150px;"&gt;\n    &lt;item value="mon"&gt;周一&lt;/item&gt;\n    &lt;item value="wed"&gt;周三&lt;/item&gt;\n    &lt;item value="thu"&gt;周四&lt;/item&gt;\n    &lt;item value="fri"&gt;周五&lt;/item&gt;\n    &lt;item value="sat"&gt;周六&lt;/item&gt;\n&lt;/mx-view&gt;</pre><div class="z">Javascript Code:</div><pre>let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showWeek&lt;change&gt;\' (e) {\n        this.gtipRB(\'text:\' + e.text + \',value:\' + e.value);\n    }\n});</pre></div><h3 class="f">单选带分组</h3><div class="B ag"><div mx-view="mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F" mx-change="showWeek()" class="Z" style="width:150px"><item group="true">本周日期</item><item value="mon">周一</item><item value="wed">周三</item><item value="thu">周四</item><item value="fri">周五</item><item value="sat">周六</item><item group="true">下周日期</item><item value="next-mon">下周一</item><item value="next-wed">下周三</item><item value="next-thu">下周四</item><item value="next-fri">下周五</item><item value="next-sat">下周六</item></div></div><div class="B"><div>HTML Code:</div><pre>&lt;mx-view\n    path="app/gallery/mx-dropdown/index"\n    searchbox="true"\n    empty-text="请选择日期"\n    mx-change="showWeek()"\n    class="fl" style="width:150px;"&gt;\n    &lt;item group="true"&gt;本周日期&lt;/item&gt;\n    &lt;item value="mon"&gt;周一&lt;/item&gt;\n    &lt;item value="wed"&gt;周三&lt;/item&gt;\n    &lt;item value="thu"&gt;周四&lt;/item&gt;\n    &lt;item value="fri"&gt;周五&lt;/item&gt;\n    &lt;item value="sat"&gt;周六&lt;/item&gt;\n    &lt;item group="true"&gt;下周日期&lt;/item&gt;\n    &lt;item value="next-mon"&gt;下周一&lt;/item&gt;\n    &lt;item value="next-wed"&gt;下周三&lt;/item&gt;\n    &lt;item value="next-thu"&gt;下周四&lt;/item&gt;\n    &lt;item value="next-fri"&gt;下周五&lt;/item&gt;\n    &lt;item value="next-sat"&gt;下周六&lt;/item&gt;\n&lt;/mx-view&gt;</pre><div class="z">Javascript Code:</div><pre>let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showWeek&lt;change&gt;\' (e) {\n        this.gtipRB(\'text:\' + e.text + \',value:\' + e.value);\n    }\n});</pre></div><h3 class="f">动态数据并设置选中</h3><div class="B ag"><div mx-guid="g1" mx-view="mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=<%@$$.userSelected%>&list=<%@$$.userList%>" mx-change="showUser()" class="Z" style="width:200px"></div></div><div class="B"><div>HTML Code:</div><pre lang="html">&lt;mx-view\n    path="app/gallery/mx-dropdown/index"\n    searchbox="true"\n    empty-text="请选择用户"\n    text-key="name"\n    value-key="id"\n    selected="&lt;%@ userSelected %&gt;"\n    list="&lt;%@ userList %&gt;"\n    mx-change="showUser()"\n    class="fl" style="width:200px;"&gt;\n&lt;/mx-view&gt;</pre><div class="z">Javascript Code:</div><pre>let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: \'xinglie\',\n                id: 58782\n            }, {\n                name: \'xinglie1\',\n                id: 587821\n            }, {\n                name: \'xinglie2\',\n                id: 587822\n            }, {\n                name: \'xinglie3\',\n                id: 587823\n            }, {\n                name: \'xinglie4\',\n                id: 587824\n            }, {\n                name: \'xinglie5\',\n                id: 587825\n            }, {\n                name: \'xinglie6\',\n                id: 587826\n            }, {\n                name: \'xinglie7\',\n                id: 587827\n            }, {\n                name: \'xinglie8\',\n                id: 587828\n            }, {\n                name: \'xinglie9\',\n                id: 587829\n            }],\n            userSelected: 587828\n        });\n    },\n    \'showUser&lt;change&gt;\' (e) {\n        this.gtipRB(\'name:\' + e.text + \',id:\' + e.value);\n    }\n});</pre></div><h3 class="f">多选</h3><div class="B ag"><div mx-guid="g2" mx-view="mx-dropdown/multiple?searchbox=<%@$$.searchbox%>&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F" mx-change="showWeeks()" class="Z" style="width:150px"><item value="mon">周一</item><item value="wed">周三</item><item value="thu">周四</item><item value="fri">周五</item><item value="sat">周六</item></div></div><div class="B"><div>HTML Code:</div><pre>&lt;mx-view\n    path="app/gallery/mx-dropdown/multiple"\n    searchbox="true"\n    empty-text="请选择日期"\n    mx-change="showWeeks()"\n    class="fl" style="width:150px;"&gt;\n    &lt;item value="mon"&gt;周一&lt;/item&gt;\n    &lt;item value="wed"&gt;周三&lt;/item&gt;\n    &lt;item value="thu"&gt;周四&lt;/item&gt;\n    &lt;item value="fri"&gt;周五&lt;/item&gt;\n    &lt;item value="sat"&gt;周六&lt;/item&gt;\n&lt;/mx-view&gt;</pre><div class="z">Javascript Code:</div><pre>let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showWeeks&lt;change&gt;\' (e) {\n        this.gtipRB(\'values:\' + e.values);\n    }\n});</pre></div><h3 class="f">多选带分组</h3><div class="B ag"><div mx-view="mx-dropdown/multiple?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F" mx-change="showWeeks()" class="Z" style="width:150px"><item group="true">本周日期</item><item value="mon">周一</item><item value="wed">周三</item><item value="thu">周四</item><item value="fri">周五</item><item value="sat">周六</item><item group="true">下周日期</item><item value="next-mon">下周一</item><item value="next-wed">下周三</item><item value="next-thu">下周四</item><item value="next-fri">下周五</item><item value="next-sat">下周六</item></div></div><div class="B"><div>HTML Code:</div><pre>&lt;mx-view\n    path="app/gallery/mx-dropdown/multiple"\n    searchbox="true"\n    empty-text="请选择日期"\n    mx-change="showWeeks()"\n    class="fl" style="width:150px;"&gt;\n    &lt;item group="true"&gt;本周日期&lt;/item&gt;\n    &lt;item value="mon"&gt;周一&lt;/item&gt;\n    &lt;item value="wed"&gt;周三&lt;/item&gt;\n    &lt;item value="thu"&gt;周四&lt;/item&gt;\n    &lt;item value="fri"&gt;周五&lt;/item&gt;\n    &lt;item value="sat"&gt;周六&lt;/item&gt;\n    &lt;item group="true"&gt;下周日期&lt;/item&gt;\n    &lt;item value="next-mon"&gt;下周一&lt;/item&gt;\n    &lt;item value="next-wed"&gt;下周三&lt;/item&gt;\n    &lt;item value="next-thu"&gt;下周四&lt;/item&gt;\n    &lt;item value="next-fri"&gt;下周五&lt;/item&gt;\n    &lt;item value="next-sat"&gt;下周六&lt;/item&gt;\n&lt;/mx-view&gt;</pre><div class="z">Javascript Code:</div><pre>let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showWeeks&lt;change&gt;\' (e) {\n        this.gtipRB(\'values:\' + e.values);\n    }\n});</pre></div><h3 class="f">动态数据并设置选中</h3><div class="B ag"><div mx-guid="g3" mx-view="mx-dropdown/multiple?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=<%@$$.usersSelected%>&list=<%@$$.userList%>" mx-change="showUsers()" class="Z" style="width:200px"></div></div><div class="B"><div>HTML Code:</div><pre lang="html">&lt;mx-view\n    path="app/gallery/mx-dropdown/multiple"\n    searchbox="true"\n    empty-text="请选择用户"\n    text-key="name"\n    value-key="id"\n    selected="&lt;%@ usersSelected %&gt;"\n    list="&lt;%@ userList %&gt;"\n    mx-change="showUsers()"\n    class="fl" style="width:200px;"&gt;\n&lt;/mx-view&gt;</pre><div class="z">Javascript Code:</div><pre>let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: \'xinglie\',\n                id: 58782\n            }, {\n                name: \'xinglie1\',\n                id: 587821\n            }, {\n                name: \'xinglie2\',\n                id: 587822\n            }, {\n                name: \'xinglie3\',\n                id: 587823\n            }, {\n                name: \'xinglie4\',\n                id: 587824\n            }, {\n                name: \'xinglie5\',\n                id: 587825\n            }, {\n                name: \'xinglie6\',\n                id: 587826\n            }, {\n                name: \'xinglie7\',\n                id: 587827\n            }, {\n                name: \'xinglie8\',\n                id: 587828\n            }, {\n                name: \'xinglie9\',\n                id: 587829\n            }],\n            usersSelected: [58782,587829]\n        });\n    },\n    \'showUsers&lt;change&gt;\' (e) {\n        this.gtipRB(\'user ids:\' + e.values);\n    }\n});</pre></div>',subs:[{keys:["searchbox"],path:'div[mx-guid="g0"]',attr:'mx-view="mx-dropdown/index?searchbox=<%@$$.searchbox%>&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F"',attrs:[{n:"mx-view",v:1}]},{keys:["userSelected","userList"],path:'div[mx-guid="g1"]',attr:'mx-view="mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=<%@$$.userSelected%>&list=<%@$$.userList%>"',attrs:[{n:"mx-view",v:1}]},{keys:["searchbox"],path:'div[mx-guid="g2"]',attr:'mx-view="mx-dropdown/multiple?searchbox=<%@$$.searchbox%>&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F"',attrs:[{n:"mx-view",v:1}]},{keys:["usersSelected","userList"],path:'div[mx-guid="g3"]',attr:'mx-view="mx-dropdown/multiple?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=<%@$$.usersSelected%>&list=<%@$$.userList%>"',attrs:[{n:"mx-view",v:1}]}]},mixins:[l],render:function(){this.updater.digest({userList:[{name:"xinglie",id:58782},{name:"xinglie1",id:587821},{name:"xinglie2",id:587822},{name:"xinglie3",id:587823},{name:"xinglie4",id:587824},{name:"xinglie5",id:587825},{name:"xinglie6",id:587826},{name:"xinglie7",id:587827},{name:"xinglie8",id:587828},{name:"xinglie9",id:587829}],userSelected:587828,usersSelected:[58782,587829]})},"showWeek<change>":function(e){this.gtipRB("text:"+e.text+",value:"+e.value)},"showUser<change>":function(e){this.gtipRB("name:"+e.text+",id:"+e.value)},"showWeeks<change>":function(e){this.gtipRB("values:"+e.values)},"showUsers<change>":function(e){this.gtipRB("user ids:"+e.values)},"test<click>":function(e){this.updater.digest({searchbox:!this.updater.get("searchbox")})}})});