(function(e){function n(n){for(var r,o,u=n[0],i=n[1],l=n[2],d=0,f=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(f.length)f.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-0ba49004":"ed044bdf","chunk-15c99b02":"2d321fc6","chunk-1b53ef43":"c7ef4a43","chunk-2393c1bc":"1e784f40","chunk-2d0b8e66":"ed130452","chunk-17db863c":"a537178e","chunk-ffb11a80":"ce974bb9","chunk-2d0d30b9":"53455347","chunk-46d6b6e9":"5f2e3ef8","chunk-48d3ba68":"8a9d202c","chunk-54866ee8":"12205ac7","chunk-6a670514":"40c6d25f","chunk-86db2026":"284a72bb","chunk-9cae0e54":"6773f2bd","chunk-a4014d9a":"b0c88ac1","chunk-bb64d3ea":"af516908","chunk-dc9309c6":"2ba46c2e"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-15c99b02":1,"chunk-1b53ef43":1,"chunk-2393c1bc":1,"chunk-17db863c":1,"chunk-ffb11a80":1,"chunk-48d3ba68":1,"chunk-54866ee8":1,"chunk-6a670514":1,"chunk-86db2026":1,"chunk-9cae0e54":1,"chunk-a4014d9a":1,"chunk-bb64d3ea":1,"chunk-dc9309c6":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-0ba49004":"31d6cfe0","chunk-15c99b02":"d33629db","chunk-1b53ef43":"5e5eb26c","chunk-2393c1bc":"5fc5823a","chunk-2d0b8e66":"31d6cfe0","chunk-17db863c":"fd11cfcf","chunk-ffb11a80":"502ba513","chunk-2d0d30b9":"31d6cfe0","chunk-46d6b6e9":"31d6cfe0","chunk-48d3ba68":"04ac320e","chunk-54866ee8":"e4232254","chunk-6a670514":"d634af3c","chunk-86db2026":"13a8121b","chunk-9cae0e54":"52c20a24","chunk-a4014d9a":"74bfcc4e","chunk-bb64d3ea":"08f3df95","chunk-dc9309c6":"e8f789d1"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===a))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],d=l.getAttribute("data-href");if(d===r||d===a)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],s.parentNode.removeChild(s),t(c)},s.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(s)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=c);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var f=new Error;l=function(n){d.onerror=d.onload=null,clearTimeout(s);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,t[1](f)}a[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var s=d;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],c=(t("5c0b"),t("2877")),u={},i=Object(c["a"])(u,o,a,!1,null,null,null),l=i.exports,d=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f"));r["default"].use(d["a"]);var f=d["a"].prototype.push;d["a"].prototype.push=function(e){return f.call(this,e).catch((function(e){return e}))};var s=[{path:"/",redirect:"/home"},{path:"/login",component:function(){return t.e("chunk-a4014d9a").then(t.bind(null,"d9c9"))},hidden:!0,children:[],meta:{keepAlive:!1}},{path:"/redirect/:path*",component:function(){return t.e("chunk-0ba49004").then(t.bind(null,"ef3c"))},hidden:!0},{path:"/home",component:function(){return t.e("chunk-54866ee8").then(t.bind(null,"b175"))},children:[{path:"/home",name:"home",component:function(){return Promise.all([t.e("chunk-2d0b8e66"),t.e("chunk-ffb11a80")]).then(t.bind(null,"12be"))},meta:{title:"首页"}},{path:"/server",name:"server",component:function(){return t.e("chunk-46d6b6e9").then(t.bind(null,"6409"))},meta:{title:"网络请求"}},{path:"/page1",name:"page1",component:function(){return Promise.all([t.e("chunk-2d0b8e66"),t.e("chunk-17db863c")]).then(t.bind(null,"185e"))},meta:{title:"折线图"}},{path:"/page2",name:"page2",component:function(){return t.e("chunk-15c99b02").then(t.bind(null,"79b3"))},meta:{title:"报表打印"}},{path:"/page3",name:"page3",component:function(){return t.e("chunk-6a670514").then(t.bind(null,"0c61"))},meta:{title:"报表导出"}},{path:"/page4",name:"page4",component:function(){return t.e("chunk-9cae0e54").then(t.bind(null,"d498"))},meta:{title:"报表筛选"}},{path:"/page5",name:"page5",component:function(){return t.e("chunk-bb64d3ea").then(t.bind(null,"3cbd"))},meta:{title:"综合报表"}},{path:"/page6",name:"page6",component:function(){return t.e("chunk-2d0d30b9").then(t.bind(null,"5aa8"))},meta:{title:"PDF预览"}},{path:"/VideoView",name:"VideoView",component:function(){return t.e("chunk-86db2026").then(t.bind(null,"bf1e"))},meta:{title:"视频组件"}},{path:"/CropperImage",name:"CropperImage",component:function(){return t.e("chunk-1b53ef43").then(t.bind(null,"010b"))},meta:{title:"图片裁剪"}},{path:"/Scroll",name:"Scroll",component:function(){return t.e("chunk-dc9309c6").then(t.bind(null,"5d10"))},meta:{index:13,title:"无缝滚动"}},{path:"/flow",name:"flow",component:function(){return t.e("chunk-2393c1bc").then(t.bind(null,"3c8c"))},meta:{title:"流程编辑器"}}]},{path:"/404",name:"notFound",component:function(){return t.e("chunk-48d3ba68").then(t.bind(null,"dc75"))}},{path:"*",redirect:"/404"}],p=new d["a"]({routes:s}),h=p,m=t("2f62"),b=t("ed08"),k={token:Object(b["b"])("token")},g={setToken:function(e,n){e.token=n,Object(b["c"])("token",n,{expires:1/24})}},v={setTokens:function(e,n){var t=e.commit;return new Promise((function(e){t("setToken",n),e()}))}},w={token:function(e){return e.token}},y={namespaced:!0,state:k,actions:v,getters:w,mutations:g},j=(t("b0c0"),t("c740"),t("a434"),{menu:[],currentMenu:null,isCollapse:!1,tagFlag:!1,tabList:[{path:"/",label:"home",name:"home",icon:"video-play"}]}),T={selectMenu:function(e,n){if("home"!==n.name){e.currentMenu=n;var t=e.tabList.findIndex((function(e){return e.name===n.name}));-1===t&&e.tabList.push(n)}else e.currentMenu=null},allTab:function(e){e.tabList=[{path:"/",label:"home",name:"home",icon:"video-play"}]},closeTab:function(e,n){var t=e.tabList.findIndex((function(e){return e.name===n.name}));e.tabList.splice(t,1)},collapseMenu:function(e){e.isCollapse=!e.isCollapse},tagFlag:function(e){e.tagFlag=!e.tagFlag}},x={state:j,mutations:T},E={color:"#0066CC",theme:Object(b["b"])("THEME")},O={setColor:function(e,n){e.color=n},upDateTheme:function(e,n){e.theme=n}},P={"thÎeme":function(e){return e.theme}},S={state:E,mutations:O,getters:P},C={projectitle:Object(b["b"])("Title")},M={editTitlr:function(e,n){e.projectitle=n}},L={projectitle:function(e){return e.projectitle}},_={state:C,getters:L,mutations:M};r["default"].use(m["a"]);var F=new m["a"].Store({modules:{token:y,tab:x,color:S,title:_}}),A=F,D=t("4897"),N=t.n(D),V=t("a925"),I=t("5530"),$=t("b2d6"),J=t.n($),q=Object(I["a"])({routeName:{home:"home",network:"network",user:"user",statement:"statement",reportprinting:"reportprinting",reportexport:"reportexport",reportfiltrate:"reportfiltrate",reportsynthesize:"reportsynthesize",pdfpreview:"pdfpreview",components:"components",linechart:"linechart",video:"video",tailor:"tailor",roll:"roll",flow:"flow",notfound:"notfound"}},J.a),z=q,B=t("f0d9"),G=t.n(B),H=Object(I["a"])({routeName:{home:"主页",network:"网络请求",user:"用户管理",statement:"报表管理",reportprinting:"报表打印",reportexport:"报表导出",reportfiltrate:"报表筛选",reportsynthesize:"综合报表",pdfpreview:"PDF预览",components:"通用组件",linechart:"折线图",video:"视频组件",tailor:"裁剪组件",roll:"无缝滚动",flow:"流程编辑器",notfound:"404页面"}},G.a),R=H,U={en:z,cn:R};r["default"].use(V["a"]);var K=new V["a"]({locale:localStorage.lang||"cn",messages:U});N.a.i18n((function(e,n){return K.t(e,n)}));var X=K,Q=(t("ed2c"),t("77ed")),W=t.n(Q),Y=(t("da71"),t("323e")),Z=t.n(Y);h.beforeEach((function(e,n,t){Z.a.start();var r=A.getters["token/token"];r||"/login"===e.path?t():t("/login")})),h.afterEach((function(){Z.a.done()}));var ee=t("5c96"),ne=t.n(ee),te=t("a388"),re=t.n(te),oe=t("5734"),ae=t.n(oe);t("a5d8");Z.a.configure({easing:"ease",speed:500,showSpinner:!1,trickleSpeed:200,minimum:.3}),h.beforeEach((function(e,n,t){e.meta.title?document.title=e.meta.title+" - Vue Element Jin":document.title="Vue-Element-Jin后台管理系统",Z.a.start(),t()})),h.afterEach((function(){Z.a.done()}));t("778e"),t("78a7"),t("c695"),t("0fae");r["default"].use(ne.a),r["default"].use(re.a),r["default"].use(W.a),re.a.use(ae.a),r["default"].config.productionTip=!1,r["default"].prototype.$XModal=re.a.modal,r["default"].prototype.$message=ne.a.Message,new r["default"]({router:h,store:A,i18n:X,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"78a7":function(e,n,t){},"9c0c":function(e,n,t){},da71:function(e,n,t){"use strict";t("d3b7");var r=t("bc3a"),o=t.n(r),a=t("5c96");o.a.defaults.baseURL="/api",o.a.defaults.timeout=8e3;var c="";o.a.interceptors.request.use((function(e){console.log("全局请求拦截");var n=e,t=a["Loading"].service({lock:!0,text:"正在加载中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.5)"});return c=t,n}),(function(e){return c.close(),Promise.reject(e)})),o.a.interceptors.response.use((function(e){if(console.log("全局响应拦截"),e)return c.close(),e;c.close()}),(function(e){return c.close(),a["Message"].error("连接超时请重试"),Promise.reject(e)})),n["a"]=o.a},ed08:function(e,n,t){"use strict";t.d(n,"c",(function(){return r})),t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return a}));t("ac1f"),t("466d"),t("4d63"),t("25f0");var r=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=t,o=new Date;o.setTime(o.getTime()+24*r*60*60*1e3),document.cookie=e+"="+escape(n)+";expires="+o.toGMTString()},o=function(e){var n=document.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)"));return null!=n?unescape(n[2]):null},a=function(e){var n=new Date;n.setTime(n.getTime()-1);var t=o(e);null!=t&&(document.cookie=e+"="+t+";expires="+n.toGMTString())}},ed2c:function(e,n,t){}});