define("mx-medusa/index",["./zh-cn.js","./en-us.js"],(n,e,a)=>{var r={};for(var s in r["zh-cn"]=n("./zh-cn.js"),r["en-us"]=n("./en-us.js"),r)if(r.hasOwnProperty(s)&&"zh-cn"!=s)for(var h in r["zh-cn"])r["zh-cn"].hasOwnProperty(h)&&(r[s].hasOwnProperty(h)||(r[s][h]=r["zh-cn"][h]));r.appName="magix3-zs-gallery",r.groupName="magix3",r.defaultLocale="zh-cn",a.exports=r});