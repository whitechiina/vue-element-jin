(function(e){function n(n){for(var a,c,u=n[0],i=n[1],d=n[2],l=0,f=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);s&&s(n);while(f.length)f.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,c=1;c<t.length;c++){var u=t[c];0!==o[u]&&(a=!1)}a&&(r.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},c={app:0},o={app:0},r=[];function u(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-0699b9f2":"82e874e6","chunk-20adfc14":"7b3755cd","chunk-2d0b1998":"8c16039a","chunk-2d0b8e66":"ed130452","chunk-156d68c6":"38454f79","chunk-5aa7dd40":"1cf0df86","chunk-2d0bddf1":"ae09cab3","chunk-2d0c13d6":"f14aa5d4","chunk-367a5630":"72a82d3c","chunk-48d3ba68":"1cab4ac7","chunk-7614bd21":"1fd18ba9","chunk-7a597882":"10e35e43","chunk-86db2026":"7cd58e14","chunk-c7c750f2":"42b57f0f","chunk-d0f272b6":"3ac4ea16","chunk-dc9309c6":"52462061","chunk-ec2b1a2e":"1e75fd6f"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-20adfc14":1,"chunk-156d68c6":1,"chunk-5aa7dd40":1,"chunk-367a5630":1,"chunk-48d3ba68":1,"chunk-7614bd21":1,"chunk-7a597882":1,"chunk-86db2026":1,"chunk-c7c750f2":1,"chunk-d0f272b6":1,"chunk-dc9309c6":1,"chunk-ec2b1a2e":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="static/css/"+({}[e]||e)+"."+{"chunk-0699b9f2":"31d6cfe0","chunk-20adfc14":"36f2c215","chunk-2d0b1998":"31d6cfe0","chunk-2d0b8e66":"31d6cfe0","chunk-156d68c6":"be9d3610","chunk-5aa7dd40":"4af159ef","chunk-2d0bddf1":"31d6cfe0","chunk-2d0c13d6":"31d6cfe0","chunk-367a5630":"2258ed66","chunk-48d3ba68":"04ac320e","chunk-7614bd21":"b94060eb","chunk-7a597882":"5e5eb26c","chunk-86db2026":"13a8121b","chunk-c7c750f2":"2258ed66","chunk-d0f272b6":"b64c3512","chunk-dc9309c6":"e8f789d1","chunk-ec2b1a2e":"d2f7410e"}[e]+".css",o=i.p+a,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var d=r[u],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===a||l===o))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){d=f[u],l=d.getAttribute("data-href");if(l===a||l===o)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var a=n&&n.target&&n.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],s.parentNode.removeChild(s),t(r)},s.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(s)})).then((function(){c[e]=0})));var a=o[e];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(n,t){a=o[e]=[n,t]}));n.push(a[2]=r);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;d=function(n){l.onerror=l.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",f.name="ChunkLoadError",f.type=a,f.request=c,t[1](f)}o[e]=void 0}};var s=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=n,d=d.slice();for(var f=0;f<d.length;f++)n(d[f]);var s=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"275f":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],r=(t("5c0b"),t("2877")),u={},i=Object(r["a"])(u,c,o,!1,null,null,null),d=i.exports,l=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f"));a["default"].use(l["a"]);var f=l["a"].prototype.push;l["a"].prototype.push=function(e){return f.call(this,e).catch((function(e){return e}))};var s=[{path:"/login",component:function(){return t.e("chunk-7614bd21").then(t.bind(null,"d9c9"))},hidden:!0,children:[],meta:{keepAlive:!1}},{path:"/",component:function(){return t.e("chunk-ec2b1a2e").then(t.bind(null,"b175"))},children:[{path:"/",name:"home",component:function(){return Promise.all([t.e("chunk-2d0b8e66"),t.e("chunk-5aa7dd40")]).then(t.bind(null,"12be"))},meta:{index:1}},{path:"/server",name:"server",component:function(){return t.e("chunk-0699b9f2").then(t.bind(null,"6409"))},meta:{index:2}},{path:"/hometwo",name:"hometwo",component:function(){return t.e("chunk-2d0b1998").then(t.bind(null,"2114"))},meta:{index:3}},{path:"/user",name:"user",component:function(){return t.e("chunk-2d0bddf1").then(t.bind(null,"2e9a"))},meta:{index:5}},{path:"/page1",name:"page1",component:function(){return Promise.all([t.e("chunk-2d0b8e66"),t.e("chunk-156d68c6")]).then(t.bind(null,"185e"))},meta:{index:6}},{path:"/page2",name:"page2",component:function(){return t.e("chunk-d0f272b6").then(t.bind(null,"79b3"))},meta:{index:7}},{path:"/page3",name:"page3",component:function(){return t.e("chunk-20adfc14").then(t.bind(null,"0c61"))},meta:{index:8}},{path:"/page4",name:"page4",component:function(){return t.e("chunk-367a5630").then(t.bind(null,"d498"))},meta:{index:9}},{path:"/page5",name:"page5",component:function(){return t.e("chunk-c7c750f2").then(t.bind(null,"3cbd"))},meta:{index:10}},{path:"/VideoView",name:"VideoView",component:function(){return t.e("chunk-86db2026").then(t.bind(null,"bf1e"))},meta:{index:11}},{path:"/CropperImage",name:"CropperImage",component:function(){return t.e("chunk-7a597882").then(t.bind(null,"010b"))},meta:{index:12}},{path:"/Scroll",name:"Scroll",component:function(){return t.e("chunk-dc9309c6").then(t.bind(null,"5d10"))},meta:{index:13}},{path:"/table",name:"table",component:function(){return t.e("chunk-2d0c13d6").then(t.bind(null,"44cc"))},meta:{index:14}}]},{path:"/404",name:"notFound",component:function(){return t.e("chunk-48d3ba68").then(t.bind(null,"dc75"))}},{path:"*",redirect:"/404"}],h=new l["a"]({routes:s}),p=h,m=t("2f62"),b=(t("b0c0"),t("c740"),t("a434"),{state:{menu:[],currentMenu:null,isCollapse:!1,tagFlag:!1,tabList:[{path:"/",label:"home",name:"home",icon:"video-play"}]},mutations:{selectMenu:function(e,n){if("home"!==n.name){e.currentMenu=n;var t=e.tabList.findIndex((function(e){return e.name===n.name}));-1===t&&e.tabList.push(n)}else e.currentMenu=null},allTab:function(e){e.tabList=[{path:"/",label:"home",name:"home",icon:"video-play"}]},closeTab:function(e,n){var t=e.tabList.findIndex((function(e){return e.name===n.name}));e.tabList.splice(t,1)},collapseMenu:function(e){e.isCollapse=!e.isCollapse},tagFlag:function(e){e.tagFlag=!e.tagFlag}},actions:{}}),k={state:{color:"#0066CC"},mutations:{setColor:function(e,n){e.color=n,console.log(e.color)}}},g=t("a78e"),v=t.n(g);a["default"].use(m["a"]);var y=new m["a"].Store({state:{token:v.a.get("token"),projectitle:v.a.get("Title")},mutations:{setToken:function(e,n){e.token=n,v.a.set("token",n,{expires:1/24})},editTitlr:function(e,n){e.projectitle=n}},actions:{setToken:function(e,n){var t=e.commit;return new Promise((function(e){t("setToken",n),e()}))}},getters:{token:function(e){return e.token},projectitle:function(e){return e.projectitle}},modules:{tab:b,color:k}}),w=y,x=t("4897"),j=t.n(x),C=t("a925"),O=t("5530"),P=t("b2d6"),S=t.n(P),T=Object(O["a"])({routeName:{home:"home",network:"network",user:"user",statement:"statement",components:"components"}},S.a),E=T,L=t("f0d9"),M=t.n(L),_=Object(O["a"])({routeName:{home:"主页",network:"网络请求",user:"用户管理",statement:"报表管理",components:"通用组件"}},M.a),A=_,N={en:E,cn:A};a["default"].use(C["a"]);var F=new C["a"]({locale:localStorage.lang||"cn",messages:N});j.a.i18n((function(e,n){return F.t(e,n)}));var I=F,V=(t("ed2c"),t("77ed")),$=t.n(V),q=(t("da71"),t("323e")),B=t.n(q);p.beforeEach((function(e,n,t){B.a.start();var a=w.getters.token;a||"/login"===e.path?t():t("/login")})),p.afterEach((function(){B.a.done()}));t("840a");var D=t("5c96"),J=t.n(D),U=t("a388"),H=t.n(U),K=t("5734"),R=t.n(K);t("a5d8");B.a.configure({easing:"ease",speed:500,showSpinner:!1,trickleSpeed:200,minimum:.3}),p.beforeEach((function(e,n,t){B.a.start(),t()})),p.afterEach((function(){B.a.done()}));t("778e"),t("275f"),t("c695"),t("0fae");a["default"].use(J.a),a["default"].use(H.a),a["default"].use($.a),H.a.use(R.a),a["default"].config.productionTip=!1,a["default"].prototype.$XModal=H.a.modal,a["default"].prototype.$message=J.a.Message,new a["default"]({router:p,store:w,i18n:I,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"9c0c":function(e,n,t){},da71:function(e,n,t){"use strict";t("d3b7");var a=t("62c3"),c=t.n(a),o=t("5c96");c.a.defaults.baseURL="/api",c.a.defaults.timeout=8e3;var r="";c.a.interceptors.request.use((function(e){console.log("全局请求拦截");var n=e,t=o["Loading"].service({lock:!0,text:"正在加载中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.5)"});return r=t,n}),(function(e){return r.close(),Promise.reject(e)})),c.a.interceptors.response.use((function(e){if(console.log("全局响应拦截"),e)return r.close(),e;r.close()}),(function(e){return r.close(),o["Message"].error("连接超时请重试"),Promise.reject(e)})),n["a"]=c.a},ed2c:function(e,n,t){}});