define("mx-calendar/__test__/index",["magix","mx-gtip/index","../index"],function(e,i,d){e("../index");var a=e("magix"),l=e("mx-gtip/index");d.exports=a.View.extend({tmpl:{html:'<h2>mx-calendar</h2><h3>默认情形</h3><div class="B ag"><div mx-view="mx-calendar/index"></div></div><div class="B"><div>HTML Code:</div><pre>&lt;mx-view path="app/gallery/mx-calendar/index" /&gt;</pre></div><h3 class="f">默认选中某天</h3><div class="B ag"><div mx-view="mx-calendar/index?selected=2018-01-01"></div></div><div class="B"><div>HTML Code:</div><pre>&lt;mx-view path="app/gallery/mx-calendar/index"\n    selected="2018-01-01"/&gt;</pre></div><h3 class="f">设置可选择的范围</h3><div class="B ag"><div mx-view="mx-calendar/index?min=2017-08-05&max=2017-08-22&selected=2017-08-12"></div></div><div class="B"><div>HTML Code:</div><pre>&lt;mx-view path="app/gallery/mx-calendar/index"\n    min="2017-08-05"\n    max="2017-08-22"\n    selected="2017-08-12"/&gt;</pre></div><h3 class="f">设置周二为一周的开始</h3><div class="B ag"><div mx-view="mx-calendar/index?weekStart=<%@2%>"></div></div><div class="B"><div>HTML Code:</div><pre>&lt;mx-view path="app/gallery/mx-calendar/index"\n    week-start="&lt;%@ 2 %&gt;"/&gt;</pre></div><h3 class="f">带时分秒</h3><div class="B ag"><div mx-view="mx-calendar/index?timeType=all"></div></div><div class="B"><div>HTML Code:</div><pre>&lt;mx-view path="app/gallery/mx-calendar/index"\n    time-type="all"&gt;</pre></div><h3 class="f">带时分秒的选中</h3><div class="B ag"><div mx-view="mx-calendar/index?timeType=all&selected=2018-08-08%2018%3A08%3A20"></div></div><div class="B"><div>HTML Code:</div><pre>&lt;mx-view path="app/gallery/mx-calendar/index"\n    time-type="all"\n    selected="2018-08-08 18:08:20"/&gt;</pre></div><h3 class="f">带时分秒,只能选择小时和分钟</h3><div class="B ag"><div mx-view="mx-calendar/index?timeType=hour%2Cminute"></div></div><div class="B"><div>HTML Code:</div><pre>&lt;mx-view path="app/gallery/mx-calendar/index"\n    time-type="hour,minute"/&gt;</pre></div><h3 class="f">change事件</h3><div class="B ag"><div mx-view="mx-calendar/index?timeType=all&selected=2018-08-08%2018%3A08%3A20" mx-change="showDatetime()"></div></div><div class="B"><div>HTML Code:</div><pre>&lt;mx-view path="app/gallery/mx-calendar/index"\n    time-type="all"\n    selected="2018-08-08 18:08:20"\n    mx-change="showDatetime()"/&gt;</pre><div class="z">Javascript Code:</div><pre>let Magix = require(\'magix\');\nlet GTip = require(\'mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showDatetime&lt;change&gt;\' (e) {\n        this.gtipRT(\'日期：\' + e.date + \'，时间：\' + e.time);\n    }\n});</pre></div>',subs:[]},mixins:[l],render:function(){this.updater.digest()},"showDatetime<change>":function(e){this.gtipRT("日期："+e.date+"，时间："+e.time)}})});