define("mx-storage/index",["magix"],(e,t,a)=>{var i,_,r,n=e("magix"),o={},c=!1,s={};_="localStorage";var d=function(){var e=(+new Date).toString(),t=JSON.stringify(s);o.__eM=t,o.__eN=e,"__eO"==_&&(r.setAttribute("__eN",e),r.setAttribute("__eM",t),r.save("__eP"))},l=n.mix({set:function(e,t){s[e]=t,d()},get:function(e){return s[e]},del:function(e){delete s[e],d()}},n.Event);if(_ in window)try{localStorage.setItem(_,n.guid()),c=!0,localStorage.removeItem(_)}catch(e){}if(c)o=localStorage,i=o.__eN;else if((_="globalStorage")in window)try{var g=window[_];o="localhost"==location.hostname?g.__eQ:g[location.hostname],i=o.__eN}catch(e){}else if((r=document.createElement("link")).addBehavior){r.style.behavior="url(#default#userData)",document.getElementsByTagName("head")[0].appendChild(r);try{r.load("__eP")}catch(e){r.setAttribute("__eP","{}"),r.save("__eP"),r.load("__eP")}var f="{}";try{f=r.getAttribute("__eP"),i=r.getAttribute("__eN")}catch(e){}_="__eO",o.__eM=f}var u=function(){var e;clearTimeout(u.timer),u.timer=setTimeout(function(){if("__eO"==_){r.load("__eP");try{e=r.getAttribute("__eN")}catch(e){}}else e=o.__eN;if(e&&e!=i){i=e;var t=void 0,a="{}";if("__eO"==_){r.load("__eP");try{a=r.getAttribute("__eP")}catch(e){}o.__eM=a}t=JSON.parse(o.__eM);for(var c={},d=0,g=n.keys(s).concat(n.keys(t));d<g.length;d++){var f=g[d];if(1!==c[f]){c[f]=1;var u=JSON.stringify(s[f]);JSON.stringify(t[f])!=u&&l.fire("change",{key:f,from:s[f],to:t[f]})}}s=t}},25)};if("addEventListener"in window&&window.addEventListener("pageshow",function(e){e.persisted&&u()},!1),"__eO"==_?setInterval(u,1e3):"addEventListener"in window?window.addEventListener("storage",u,!1):document.attachEvent("onstorage",u),o.__eM)try{s=JSON.parse(o.__eM)}catch(e){o.__eM="{}"}else o.__eM="{}";a.exports=l});