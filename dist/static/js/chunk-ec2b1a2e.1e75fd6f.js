(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec2b1a2e"],{"046b":function(e,t,a){"use strict";a("2eab")},"0550":function(e,t,a){"use strict";a("6d67")},"070f":function(e,t,a){"use strict";a("20ca")},1254:function(e,t,a){},1360:function(e,t,a){"use strict";a("5fe9")},"1a9e":function(e,t,a){},"1abc2":function(e,t,a){},"20ca":function(e,t,a){},"25f0":function(e,t,a){"use strict";var n=a("6eeb"),l=a("825a"),s=a("d039"),o=a("ad6d"),i="toString",r=RegExp.prototype,c=r[i],u=s((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),m=c.name!=i;(u||m)&&n(RegExp.prototype,i,(function(){var e=l(this),t=String(e.source),a=e.flags,n=String(void 0===a&&e instanceof RegExp&&!("flags"in r)?o.call(e):a);return"/"+t+"/"+n}),{unsafe:!0})},"2eab":function(e,t,a){},"3ae5":function(e,t,a){"use strict";a("be11")},"40ee":function(e,t,a){"use strict";a("c072")},"453d":function(e,t,a){"use strict";a("e512")},"4e6e":function(e,t,a){"use strict";a("c380")},"5fe9":function(e,t,a){},"658c":function(e,t,a){"use strict";a("1254")},6764:function(e,t,a){},"6d67":function(e,t,a){},"716c":function(e,t,a){},"7aa8":function(e,t,a){"use strict";a("1a9e")},8700:function(e,t,a){"use strict";a("1abc2")},"93bf":function(e,t,a){
/*!
* screenfull
* v5.1.0 - 2020-12-24
* (c) Sindre Sorhus; MIT License
*/
(function(){"use strict";var t="undefined"!==typeof window&&"undefined"!==typeof window.document?window.document:{},a=e.exports,n=function(){for(var e,a=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,l=a.length,s={};n<l;n++)if(e=a[n],e&&e[1]in t){for(n=0;n<e.length;n++)s[a[0][n]]=e[n];return s}return!1}(),l={change:n.fullscreenchange,error:n.fullscreenerror},s={request:function(e,a){return new Promise(function(l,s){var o=function(){this.off("change",o),l()}.bind(this);this.on("change",o),e=e||t.documentElement;var i=e[n.requestFullscreen](a);i instanceof Promise&&i.then(o).catch(s)}.bind(this))},exit:function(){return new Promise(function(e,a){if(this.isFullscreen){var l=function(){this.off("change",l),e()}.bind(this);this.on("change",l);var s=t[n.exitFullscreen]();s instanceof Promise&&s.then(l).catch(a)}else e()}.bind(this))},toggle:function(e,t){return this.isFullscreen?this.exit():this.request(e,t)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,a){var n=l[e];n&&t.addEventListener(n,a,!1)},off:function(e,a){var n=l[e];n&&t.removeEventListener(n,a,!1)},raw:n};n?(Object.defineProperties(s,{isFullscreen:{get:function(){return Boolean(t[n.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[n.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(t[n.fullscreenEnabled])}}}),a?e.exports=s:window.screenfull=s):a?e.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}})()},"9d64":function(e,t,a){e.exports=a.p+"static/img/logo.44b6f341.png"},a44f:function(e,t,a){"use strict";a("6764")},ac33:function(e,t,a){"use strict";a("c6dd")},ad6d:function(e,t,a){"use strict";var n=a("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b175:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticStyle:{height:"100%"}},[a("el-header",{style:{background:e.color?e.color:"#0066CC"}},[a("common-header")],1),a("el-container",[a("el-aside",{style:{height:e.height+"px"},attrs:{width:"auto"}},[a("common-aside")],1),a("el-main",{staticClass:"content",style:{height:e.height+"px"}},[a("common-tag"),a("div",{staticClass:"content-main"},[a("transition",{attrs:{mode:"out-in","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOutRight"}},[a("keep-alive",[a("router-view")],1)],1)],1)],1)],1),a("right-panel")],1)},l=[],s=a("5530"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2",collapse:e.isCollage,"background-color":"#393D49","text-color":"#ccc","active-text-color":"#fff"},on:{open:e.handleOpen,close:e.handleClose}},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:e.isCollage?"安全":"安全监控",name:"first"}},[e._l(e.noChildren,(function(t){return a("el-menu-item",{key:t.path,attrs:{index:t.path+""},on:{click:function(a){return e.clickMenu(t)}}},[a("i",{class:"el-icon-"+t.icon}),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.isCollage,expression:"!isCollage"}]},[e._v(e._s(e.$t("routeName."+t.label)))])])})),e._l(e.hasChildren,(function(t,n){return a("el-submenu",{key:n,attrs:{index:t.path+""}},[a("template",{slot:"title"},[a("i",{class:"el-icon-"+t.icon}),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.isCollage,expression:"!isCollage"}]},[e._v(e._s(e.$t("routeName."+t.label)))])]),a("el-menu-item-group",e._l(t.children,(function(t,n){return a("el-menu-item",{key:n,attrs:{index:t.path},on:{click:function(a){return e.clickMenu(t)}}},[e._v(e._s(t.label))])})),1)],2)}))],2),a("el-tab-pane",{attrs:{label:e.isCollage?"人员":"人员定位",name:"second"}},[e._l(e.PeopleChildren,(function(t){return a("el-menu-item",{key:t.path,attrs:{index:t.path+""},on:{click:function(a){return e.clickMenu(t)}}},[a("i",{class:"el-icon-"+t.icon}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.label))])])})),e._l(e.hasPeopleChildren,(function(t,n){return a("el-submenu",{key:n,attrs:{index:t.path+""}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-location"}),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.isCollage,expression:"!isCollage"}]},[e._v(e._s(t.label))])]),a("el-menu-item-group",e._l(t.children,(function(t,n){return a("el-menu-item",{key:n,attrs:{index:t.path},on:{click:function(a){return e.clickMenu(t)}}},[e._v(e._s(t.label))])})),1)],2)}))],2)],1)],1)},i=[],r=(a("4de4"),a("b0c0"),{data:function(){return{activeName:"first",asideMenu:[{path:"/",label:"home",name:"home",icon:"s-home"},{path:"/server",label:"network",name:"server",icon:"loading"},{path:"/user",label:"user",name:"user",icon:"user"},{path:"/setting",label:"statement",name:"setting",icon:"edit-outline",children:[{path:"/page2",label:"报表打印",name:"page2"},{path:"/page3",label:"报表导出",name:"page3"},{path:"/page4",label:"报表筛选",name:"page4"},{path:"/page5",label:"综合报表",name:"page5"}]},{label:"components",name:"VideoView",icon:"menu",children:[{path:"/page1",label:"折线图",name:"page1"},{path:"/VideoView",label:"视频组件",name:"VideoView"},{path:"/CropperImage",label:"裁剪组件",name:"CropperImage"},{path:"/Scroll",label:"无缝滚动",name:"Scroll"},{path:"/404",label:"404页面",name:"notFound"},{path:"/table",label:"表格组件",name:"table"}]}],asideMenuTwo:[{path:"/setting",label:"人员定位",name:"setting",icon:"user",children:[{path:"/pageone",label:"人员定位综合表格"},{path:"/pagetwo",label:"历史人员定位信息"}]},{path:"/setting2",label:"橙合煤矿人员定位",name:"setting",icon:"user",children:[{path:"/pagethree",label:"人员分布",name:"page1"},{path:"/page2",label:"今日上下井人员",name:"page2"},{path:"/page3",label:"当前井下人员",name:"page3"},{path:"/page4",label:"历史井下人员",name:"page4"},{path:"/page5",label:"当前站点人员",name:"page5"},{path:"/page6",label:"历史站点人员",name:"page6"},{path:"/page7",label:"当前区域人员",name:"page7"},{path:"/page8",label:"当前井下超时人员",name:"page8"},{path:"/page9",label:"当前人员位置",name:"page9"},{path:"/page10",label:"人员轨迹",name:"page10"},{path:"/page11",label:"人员信息",name:"page11"}]},{path:"/setting3",label:"安里煤矿人员定位",name:"setting",icon:"user",children:[{path:"/pagethree",label:"人员分布",name:"page1"},{path:"/page2",label:"今日上下井人员",name:"page2"},{path:"/page3",label:"当前井下人员",name:"page3"},{path:"/page4",label:"历史井下人员",name:"page4"},{path:"/page5",label:"当前站点人员",name:"page5"},{path:"/page6",label:"历史站点人员",name:"page6"},{path:"/page7",label:"当前区域人员",name:"page7"},{path:"/page8",label:"当前井下超时人员",name:"page8"},{path:"/page9",label:"当前人员位置",name:"page9"},{path:"/page10",label:"人员轨迹",name:"page10"},{path:"/page11",label:"人员信息",name:"page11"}]}]}},computed:{noChildren:function(){return this.asideMenu.filter((function(e){return!e.children}))},hasChildren:function(){return this.asideMenu.filter((function(e){return e.children}))},PeopleChildren:function(){return this.asideMenuTwo.filter((function(e){return!e.children}))},hasPeopleChildren:function(){return this.asideMenuTwo.filter((function(e){return e.children}))},isCollage:function(){return this.$store.state.tab.isCollapse}},methods:{clickMenu:function(e){this.$router.push({name:e.name}),this.$store.commit("selectMenu",e)},handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},handleClick:function(e,t){console.log(e,t)}}}),c=r,u=(a("40ee"),a("2877")),m=Object(u["a"])(c,o,i,!1,null,null,null),d=m.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"left"},[n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"logo",class:e.isCollapse?"nowidth":"havewidth"},[n("div",{staticClass:"picture"},[n("img",{attrs:{src:a("9d64")}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isCollapse,expression:"!isCollapse"}],staticClass:"title"},[n("h1",[e._v(e._s(e.projectitle?e.projectitle:"可在右侧设置"))])])])]),n("div",{staticClass:"flex",on:{click:e.collapseMenu}},[n("i",{staticClass:"iconfont icon-indent"})]),n("div",{staticClass:"tips"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e.current?n("el-breadcrumb-item",{attrs:{to:e.current.path}},[e._v(" "+e._s(e.current.label)+" ")]):e._e()],1)],1)],1),n("div",{staticClass:"tools"},[n("div",{staticClass:"github"},[n("el-dropdown",{on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[n("svg",{staticClass:"icon",attrs:{t:"1623035437746",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2299",width:"30",height:"30"}},[n("path",{attrs:{d:"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z",fill:"#4186F5","p-id":"2300"}}),n("path",{attrs:{d:"M611.944 302.056c0-15.701 2.75-30.802 7.816-44.917a384.238 384.238 0 0 0-186.11 2.956c-74.501-50.063-93.407-71.902-107.975-39.618a136.243 136.243 0 0 0-3.961 102.287 149.515 149.515 0 0 0-39.949 104.806c0 148.743 92.139 181.875 179.961 191.61a83.898 83.898 0 0 0-25.192 51.863c-40.708 22.518-91.94 8.261-115.181-32.058a83.117 83.117 0 0 0-60.466-39.98s-38.871-0.361-2.879 23.408a102.97 102.97 0 0 1 43.912 56.906s23.398 75.279 133.531 51.863v65.913c0 10.443 13.548 42.63 102.328 42.63 71.275 0 94.913-30.385 94.913-42.987V690.485a90.052 90.052 0 0 0-26.996-72.03c83.996-9.381 173.328-40.204 179.6-176.098a164.706 164.706 0 0 1-21.129 1.365c-84.07 0-152.223-63.426-152.223-141.666z",fill:"#FFFFFF","p-id":"2301"}}),n("path",{attrs:{d:"M743.554 322.765a136.267 136.267 0 0 0-3.961-102.289s-32.396-10.445-107.979 39.618a385.536 385.536 0 0 0-11.853-2.956 132.623 132.623 0 0 0-7.816 44.917c0 78.24 68.152 141.667 152.222 141.667 7.171 0 14.222-0.472 21.129-1.365 0.231-5.03 0.363-10.187 0.363-15.509a149.534 149.534 0 0 0-42.105-104.083z",fill:"#FFFFFF",opacity:".4","p-id":"2302"}})])]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("a",{attrs:{href:"https://gitee.com/yao_wei_jin/Vue-Element-Jin",target:"_blank"}},[e._v("gitee地址")])]),n("el-dropdown-item",[n("a",{attrs:{href:"https://github.com/whitechiina",target:"_blank"}},[e._v("github地址")])])],1)],1)],1),n("div",{staticClass:"full",on:{click:e.full}},[n("i",{staticClass:"iconfont icon-quanping"})]),n("div",{staticClass:"language"},[n("CommonLang")],1),n("div",{staticClass:"login"},[n("el-dropdown",{on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[e._v(" 比克大魔王"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"info"}},[e._v("基本资料")]),n("el-dropdown-item",{attrs:{command:"password"}},[e._v("修改密码")]),n("el-dropdown-item",{attrs:{command:"logout"}},[e._v("退出")])],1)],1),n("div",{staticClass:"username"},[e._v("[ 管理员 ]")]),e._m(0)],1)]),e.userInfoLog?n("UserInfo",{attrs:{dialogVisible:e.userInfoLog,title:e.title},on:{userinfoCallback:e.userinfoCallback}}):e._e(),e.passwordLog?n("EditPassword",{attrs:{dialogVisible:e.passwordLog,title:e.title},on:{passwordCallback:e.passwordCallback}}):e._e()],1)},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"userpic"},[a("img",{attrs:{src:"https://nirongxu.github.io/vue-xuAdmin/dist/static/images/icon.jpg"}})])}],h=a("a78e"),g=a.n(h),b=a("93bf"),v=a.n(b),w=a("2f62"),C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.title,width:"600px",visible:e.visible,"destroy-on-close":""},on:{"update:visible":function(t){e.visible=t},close:e.closeCallback}},[a("div",{staticClass:"card"},[a("p",{staticClass:"title"},[a("i",{staticClass:"fa fa-th-large fa-lg"}),e._v("个人资料")]),a("el-form",{ref:"Form",staticClass:"demo-ruleForm",attrs:{model:e.Form,"status-icon":"",rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.Form.username,callback:function(t){e.$set(e.Form,"username",t)},expression:"Form.username"}})],1),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.Form.password,callback:function(t){e.$set(e.Form,"password",t)},expression:"Form.password"}})],1),a("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.Form.checkPass,callback:function(t){e.$set(e.Form,"checkPass",t)},expression:"Form.checkPass"}})],1),a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.Form.name,callback:function(t){e.$set(e.Form,"name",t)},expression:"Form.name"}})],1),a("el-form-item",{attrs:{label:"性别"}},[a("el-radio-group",{model:{value:e.Form.sex,callback:function(t){e.$set(e.Form,"sex",t)},expression:"Form.sex"}},[a("el-radio",{attrs:{label:"1"}},[e._v("男")]),a("el-radio",{attrs:{label:"2"}},[e._v("女")])],1)],1),a("el-form-item",{attrs:{label:"年龄",prop:"age"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.Form.age,callback:function(t){e.$set(e.Form,"age",t)},expression:"Form.age"}})],1),a("el-form-item",{attrs:{label:"手机号",prop:"mobilePhone"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.Form.mobilePhone,callback:function(t){e.$set(e.Form,"mobilePhone",t)},expression:"Form.mobilePhone"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("Form")}}},[e._v("确 定")]),a("el-button",{on:{click:function(t){return e.resetForm()}}},[e._v("重 置")])],1)],1)],1)])},_=[],k={props:{title:{type:String,default:"账号信息"},dialogVisible:{type:Boolean,default:!1}},data:function(){return{visible:this.dialogVisible,Form:{mobilePhone:"",username:"",password:"",checkPass:"",roleId:"",sex:"1",age:"",name:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:18,message:"长度在 3 到 18 个字符",trigger:"blur"}],roleId:[{required:!0,message:"请选择用户角色",trigger:"change"}]}}},methods:{closeCallback:function(){this.$emit("userinfoCallback")},submitForm:function(e){console.log(e)},resetForm:function(){this.Form={}}}},F=k,x=(a("b390"),Object(u["a"])(F,C,_,!1,null,"556a521d",null)),E=x.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.title,width:"600px",visible:e.visible,"destroy-on-close":""},on:{"update:visible":function(t){e.visible=t},close:e.closeCallback}},[a("div",{staticClass:"card"},[a("p",{staticClass:"title"},[a("i",{staticClass:"fa fa-th-large fa-lg"}),e._v("修改密码")]),a("el-form",{ref:"Form",staticClass:"demo-ruleForm",attrs:{model:e.Form,"status-icon":"",rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"原密码",prop:"oldpassword"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.Form.oldpassword,callback:function(t){e.$set(e.Form,"oldpassword",t)},expression:"Form.oldpassword"}})],1),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.Form.password,callback:function(t){e.$set(e.Form,"password",t)},expression:"Form.password"}})],1),a("el-form-item",{attrs:{label:"确认密码",prop:"surepassword"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.Form.surepassword,callback:function(t){e.$set(e.Form,"surepassword",t)},expression:"Form.surepassword"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm(e.Form)}}},[e._v("确 定")]),a("el-button",{on:{click:function(t){return e.resetForm()}}},[e._v("重 置")])],1)],1)],1)])},y=[],j=(a("d3b7"),a("25f0"),{props:{title:{type:String,default:"账号信息"},dialogVisible:{type:Boolean,default:!1}},data:function(){var e=this,t=function(t,a,n){""===a?n(new Error("请输入密码")):a.toString().length<6?n(new Error("密码长度不能低于6位")):(""!==e.Form.checkPass&&e.$refs.Form.validateField("checkPass"),n())},a=function(t,a,n){""===a?n(new Error("请再次输入密码")):a.toString().length<6?n(new Error("密码长度不能低于6位")):a!==e.Form.password?n(new Error("两次输入密码不一致!")):n()};return{visible:this.dialogVisible,Form:{oldpassword:"",password:"",surepassword:""},rules:{oldpassword:[{required:!0,trigger:"blur"}],password:[{required:!0,validator:t,trigger:"blur"}],surepassword:[{required:!0,validator:a,trigger:"blur"}]}}},methods:{closeCallback:function(){this.$emit("passwordCallback")},submitForm:function(e){console.log(e)},resetForm:function(){this.Form={}}}}),M=j,O=(a("046b"),Object(u["a"])(M,$,y,!1,null,"37bfd4f4",null)),S=O.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dropdown",{staticClass:"international",on:{command:e.handleSetLanguage}},[a("div",[a("span",{staticClass:"el-dropdown-link"},[a("i",{staticClass:"fa fa-language fa-lg"}),e._v(" "+e._s(e.language)),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})])]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"cn"}},[e._v("中文")]),a("el-dropdown-item",{attrs:{command:"en"}},[e._v("English")])],1)],1)},P=[],I={data:function(){return{language:""}},mounted:function(){var e=localStorage.lang||"cn";this.getLanguage(e)},methods:{handleSetLanguage:function(e){console.log(this.$i18n),this.$i18n.locale=e,localStorage.setItem("lang",e),this.getLanguage(e)},getLanguage:function(e){"cn"===e&&(this.language="中文"),"en"===e&&(this.language="English")}}},N=I,V=(a("453d"),a("ac33"),Object(u["a"])(N,L,P,!1,null,"5b2a24d3",null)),q=V.exports,T={components:{UserInfo:E,EditPassword:S,CommonLang:q},data:function(){return{isFullscreen:!1,userInfoLog:!1,passwordLog:!1,title:""}},computed:Object(s["a"])({},Object(w["c"])({current:function(e){return e.tab.currentMenu},isCollapse:function(e){return e.tab.isCollapse},projectitle:function(e){return e.projectitle}})),methods:{collapseMenu:function(){this.$store.commit("collapseMenu")},userinfoCallback:function(){this.userInfoLog=!1},passwordCallback:function(){this.passwordLog=!1},full:function(){if(!v.a.isEnabled)return this.$message({message:"浏览器不支持全屏",type:"warning"}),!1;v.a.toggle()},handleCommand:function(e){switch(e){case"info":this.title="编辑资料",this.userInfoLog=!0;break;case"password":this.title="修改密码",this.passwordLog=!0;break;case"logout":g.a.remove("token"),location.reload();break}}}},z=T,R=(a("7aa8"),a("a44f"),Object(u["a"])(z,p,f,!1,null,"d328c1aa",null)),B=R.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.tagflag?e._e():a("div",{style:{width:e.tagwidth+"px"},attrs:{id:"tags"}},e._l(e.tags,(function(t){return a("el-tag",{key:t.name,attrs:{size:"small",closable:"home"!==t.name,"disable-transitions":!1,effect:e.$route.name===t.name?"dark":"plain"},on:{click:function(a){return e.changeMenu(t)},close:function(a){return e.handleClose(t)}}},[a("span",{staticClass:"tag-item",on:{contextmenu:function(a){return a.preventDefault(),e.openMenu(a,t)}}},[e._v(" "+e._s(e.$t("routeName."+t.label))+" ")]),a("ul",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"contextmenu",style:{left:e.left+"px",top:e.top+"px"}},[a("li",{on:{click:function(a){return e.allClose(t)}}},[e._v("关闭所有")])])])})),1)},D=[],J={data:function(){return{visible:!1,top:0,left:0,inputVisible:!1,inputValue:""}},mounted:function(){var e=this;this.$nextTick((function(){e.scrollInit()}))},computed:Object(s["a"])(Object(s["a"])({},Object(w["c"])({tags:function(e){return e.tab.tabList},tagflag:function(e){return e.tab.tagFlag},isCollapse:function(e){return e.tab.isCollapse}})),{},{tagwidth:function(){if(this.isCollapse){var e=window.innerWidth-64;return e}var t=window.innerWidth-248;return t}}),watch:{visible:function(e){e?document.body.addEventListener("click",this.closeMenu):document.body.removeEventListener("click",this.closeMenu)}},methods:Object(s["a"])(Object(s["a"])({},Object(w["b"])({close:"closeTab",all:"allTab"})),{},{handleClose:function(e){this.close(e)},allClose:function(e){this.all(e),this.$router.push({name:"home"})},changeMenu:function(e){this.$router.push({name:e.name}),this.$store.commit("selectMenu",e)},openMenu:function(e){var t=105,a=this.$el.getBoundingClientRect().left,n=this.$el.offsetWidth,l=n-t,s=e.clientX-a;this.left=s>l?l:s,this.top=e.clientY-60,this.visible=!0},closeMenu:function(){this.visible=!1},scrollInit:function(){var e=document.getElementById("tags");function t(t){var a=t.wheelDelta||t.detail,n=1,l=-1,s=0;s=a<0?100*n:100*l,e.scrollLeft+=s}e.addEventListener("mousewheel",t,!1)}})},W=J,H=(a("8700"),Object(u["a"])(W,A,D,!1,null,"35685d6c",null)),U=H.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"panel-shade"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"shade",class:e.show?"shade":""}),a("div",{staticClass:"panel-setting",class:e.show?"havewidth":"nowidth"},[a("div",{staticClass:"btn-flex",on:{click:e.showClick}},[a("i",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"iconfont icon-guanbi"}),a("i",{directives:[{name:"show",rawName:"v-show",value:!e.show,expression:"!show"}],staticClass:"iconfont icon-shezhi"})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"custom-setting-item"},[a("CustomTitle"),a("CustomColor"),a("CustomAside"),a("CustomTag")],1)])])},Y=[],Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[a("h4",[e._v("自定义项目title名")]),a("div",{staticClass:"flex"},[a("el-input",{attrs:{placeholder:"请输入项目名称"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),a("el-button",{attrs:{type:"primary"},on:{click:e.sureSave}},[e._v("确定")])],1)])},G=[],K={data:function(){return{input:""}},methods:{sureSave:function(){g.a.remove("Title"),g.a.set("Title",this.input),this.$store.commit("editTitlr",this.input)}}},Q=K,ee=(a("e506"),Object(u["a"])(Q,Z,G,!1,null,"be8640aa",null)),te=ee.exports,ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[e._m(0),a("div",{staticClass:"flex"},[a("el-color-picker",{on:{change:e.themeChange},model:{value:e.color1,callback:function(t){e.color1=t},expression:"color1"}})],1)])},ne=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("h4",[e._v("顶部主题")])])}],le={data:function(){return{color1:"#0066CC"}},methods:{themeChange:function(){this.$store.commit("setColor",this.color1)}}},se=le,oe=(a("4e6e"),Object(u["a"])(se,ae,ne,!1,null,"192d6ef2",null)),ie=oe.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[e._m(0),a("div",{staticClass:"flex"},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:e.isCollage},model:{value:e.flag,callback:function(t){e.flag=t},expression:"flag"}})],1)])},ce=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("h4",[e._v("侧栏收缩")])])}],ue={methods:{isCollage:function(){this.$store.commit("collapseMenu")}},computed:{flag:function(){return this.$store.state.tab.isCollapse}}},me=ue,de=(a("1360"),Object(u["a"])(me,re,ce,!1,null,"0a7c86d2",null)),pe=de.exports,fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[e._m(0),a("div",{staticClass:"flex"},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:e.isCollage},model:{value:e.flag,callback:function(t){e.flag=t},expression:"flag"}})],1)])},he=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("h4",[e._v("标签选项")])])}],ge={methods:{isCollage:function(){this.$store.commit("tagFlag")}},computed:{flag:function(){return this.$store.state.tab.tagFlag}}},be=ge,ve=(a("070f"),Object(u["a"])(be,fe,he,!1,null,"9c1c6002",null)),we=ve.exports,Ce={data:function(){return{show:!1}},methods:{showClick:function(){this.show=!this.show}},components:{CustomTitle:te,CustomColor:ie,CustomAside:pe,CustomTag:we}},_e=Ce,ke=(a("d459"),a("3ae5"),Object(u["a"])(_e,X,Y,!1,null,"3aa310ac",null)),Fe=ke.exports,xe={components:{CommonAside:d,CommonHeader:B,CommonTag:U,RightPanel:Fe},computed:Object(s["a"])(Object(s["a"])({},Object(w["c"])({color:function(e){return e.color.color}})),{},{height:function(){var e=window.innerHeight-56;return e}})},Ee=xe,$e=(a("0550"),a("658c"),Object(u["a"])(Ee,n,l,!1,null,"2a233cf2",null));t["default"]=$e.exports},b390:function(e,t,a){"use strict";a("c21d")},be11:function(e,t,a){},c072:function(e,t,a){},c21d:function(e,t,a){},c380:function(e,t,a){},c6dd:function(e,t,a){},d459:function(e,t,a){"use strict";a("de53")},de53:function(e,t,a){},e506:function(e,t,a){"use strict";a("716c")},e512:function(e,t,a){}}]);