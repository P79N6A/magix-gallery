define("mx-table/index",["magix","$"],(t,e,i)=>{var f=t("magix"),s=t("$"),r=/width\s*:\s*(\d+)px/;f.applyStyle("_J","._eZ{width:100%;overflow:auto;border:1px solid #e6e6e6;position:relative}._f_,._fa thead,._fb{background-color:#fff}._f_,._fb{position:absolute;top:1px;width:auto;z-index:1}._fc{border:none}._f_{left:1px}._fb{right:1px}._fd,._fd thead{-webkit-box-shadow:6px 0 6px -4px rgba(0,0,0,.2);box-shadow:6px 0 6px -4px rgba(0,0,0,.2)}._fe,._fe thead{-webkit-box-shadow:-6px 0 6px -4px rgba(0,0,0,.2);box-shadow:-6px 0 6px -4px rgba(0,0,0,.2)}"),i.exports=f.View.extend({init:function(t){var e=t.rwdRange;this.__fn=((e||[2,-1])+"").split(","),this.__fe=t.sticky+""=="true";var i=s("#"+this.id);this.__j=i,this.__fl=i.find("table"),this.__ff=t.rowHoverClass},__fp:function(t,e,i,f,r,_){var a=s('<table id="'+_+'" class="'+t+'"><thead><tr></tr></thead><tbody></tbody></table>');return this.__fo(a,e,i,f,r),a},__fo:function(t,e,i,f,_){for(var a=t.find("thead>tr:first"),h=a.find("th"),d=t.find("tbody"),n=d.find("tr"),o=e;o<i;o++){var l=f.eq(o),p=o-e>=h.length;"true"!==l.attr("fake")&&(s('<th fake="true"/>').css({height:l.outerHeight(),width:l.outerWidth()}).insertBefore(l),p?a.append(l):h.eq(o-e).replaceWith(l))}for(o=0;o<_.length;o++){for(var c=_.eq(o).find("td"),v=o>=n.length,g=void 0,u=(g=v?s("<tr/>"):n.eq(o)).find("td"),b=e;b<i;b++){var w=c.eq(b),x=(l=f.eq(b),b-e>=u.length);if("true"!==w.attr("fake")){s('<td fake="true"/>').css({height:w.outerHeight(),width:w.outerWidth()}).insertBefore(w);var m=l.attr("style").match(r);m&&w.css({width:parseInt(m[1])}),x?g.append(w):u.eq(b-e).replaceWith(w)}}v&&d.append(g)}for(o=_.length;o<n.length;o++)n.eq(o).remove()},__fq:function(t,e,i){for(var f=0,s=[],_=e.length;_--;){var a=e.eq(_).attr("style");if(a){var h=a.match(r);h&&(h=parseInt(h[1]),s.push(h),f+=h)}}if(f>i)t.css({width:f}),t.find("thead").css({width:f});else{s=s.reverse();_=e.length;for(var d=0;_--;){var n=Math.round(s[_]/f*i);_?d+=n:n=i-d,e.eq(_).css({width:n})}t.css({width:i}),t.find("thead").css({width:i})}},__fr:function(t,e){var i=t.find("tbody>tr:first>td");if(i.length==e.length)for(var f=e.length;f--;){var s=e.eq(f),_=i.eq(f),a=s.attr("style").match(r);a&&_.css({width:a[1]})}},__fm:function(t,e){for(var i=t.length;i--;){var f=t.eq(i);"true"!==f.attr("fake")&&f.css({height:f.outerHeight()})}for(i=e.length;i--;){var s=e.eq(i).find("td"),r=s.eq(0);r.css({height:r.outerHeight()}),(r=s.last()).css({height:r.outerHeight()})}},__fs:function(t){for(var e=0,i=t.find("thead>tr>th"),f=i.length;f--;){var s=i.eq(f).attr("style").match(r);s&&(e+=s=parseInt(s[1]))}t.css({width:e}),t.find("thead").css({width:e})},__ft:function(t,e,i,f,s){if(this.__fh)this.__fo(this.__fh,0,t,e,i),this.__fs(this.__fh);else if(t){var r="t_"+this.id+"_left",_=this.__fp(f.attr("class")+" _f_",0,t,e,i,r);_.appendTo(s),this.__fh=_,this.__fs(_),this.__fe&&this.owner.mountVframe(r,"mx-table/isticky")}},__fu:function(t,e,i,f,s){if(this.__fi)this.__fo(this.__fi,t+e.length,e.length,e,i),this.__fs(this.__fi);else if(t){var r="t_"+this.id+"_right",_=this.__fp(f.attr("class")+" _fb",t+e.length,e.length,e,i,r);_.appendTo(s),this.__fi=_,this.__fs(_),this.__fe&&this.owner.mountVframe(r,"mx-table/isticky")}},__fx:function(){var t=this,e=t.__j,i=t.__fl,r=t.__fv||i.find("thead>tr:first>th");if(delete t.__fv,!e.hasClass("_fa")){var _=e.wrapInner('<div class="_eZ"></div>').children().first();e.addClass("_ag _fa"),t.__fg=_,_.on("scroll",function(){e.prop("sl",_.prop("scrollLeft")),t.__fj()}),t.on("destroy",function(){_.off("scroll")}),i.addClass("_fc");var a=i.find("tfoot");a.length&&s('<table class="_aA"></table>').append(a).appendTo(e)}t.__fq(i,r,e.width()),t.__fr(i,r);var h=t.__fn,d=i.find("tbody>tr");if(t.__fm(r,d),t.__ft(+h[0],r,d,i,e),t.__fu(+h[1],r,d,i,e),t.__fe&&!t.__fw){t.__fw=1;var n=i.attr("id");n||i.attr("id",n=f.guid("table_")),t.owner.mountVframe(n,"mx-table/isticky")}},__fj:function(){var t=this.__fg;if(t){var e=this.__j.prop("sl");e&&t.prop("scrollLeft",e);var i=this.__fh,f=this.__fi;if(t.prop("clientWidth")<t.prop("scrollWidth")){if(i){t.prop("scrollLeft")>=10?i.hasClass("_fd")||i.addClass("_fd"):i.hasClass("_fd")&&i.removeClass("_fd")}if(f){t.prop("scrollLeft")<t.prop("scrollWidth")-t.prop("clientWidth")-10?f.hasClass("_fe")||f.addClass("_fe"):f.hasClass("_fe")&&f.removeClass("_fe")}}}},render:function(){this.__fx(),this.__fj()},"$doc<htmlchanged>":function(t){if(t.vId==this.owner.pId){var e=this.__fl,i=e.find("thead>tr:first>th"),f=e.find("tbody>tr:first>td");i.length!=f.length&&f.length||(this.__fv=i,this.render())}},"$tbody>tr<mouseover,mouseout>":function(t){var e=this.__ff;if(e){var i=t.eventTarget;if(!f.inside(t.relatedTarget,i)){var r=s(i).parents("tbody").find("tr"),_=r.index(i);r=this.__fl.find("tbody>tr");var a="mouseover"==t.type?"addClass":"removeClass";r.eq(_)[a](e);var h=this.__fh;h&&(r=h.find("tbody>tr")).eq(_)[a](e),(h=this.__fi)&&(r=h.find("tbody>tr")).eq(_)[a](e)}}},"$win<resize>":function(){var t=this.__j,e=this.__fl,i=e.find("thead>tr:first>th");this.__fq(e,i,t.width()),this.__fj()}})});