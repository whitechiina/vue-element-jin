(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15c99b02"],{"4e74":function(e,t,a){},"59c7":function(e,t,a){},"79b3":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("LineTitle",{attrs:{title:e.title}}),a("div",{staticClass:"header form"},[a("div",{staticClass:"date"},[a("span",[e._v("时间范围")]),a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),a("div",{staticClass:"choose"},[a("span",[e._v("煤矿")]),a("el-select",{attrs:{placeholder:"请选择数据类型"},model:{value:e.value0,callback:function(t){e.value0=t},expression:"value0"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"handle"},[a("el-button",{attrs:{type:"primary"}},[e._v("查询")]),a("el-button",{attrs:{type:"primary"},on:{click:e.printEvent1}},[e._v("打印")])],1)]),e._m(0),a("vxe-table",{ref:"xTable",attrs:{border:"",height:"530",loading:e.loading,"print-config":{},data:e.tableData}},[a("vxe-table-column",{attrs:{type:"checkbox",width:"60"}}),a("vxe-table-column",{attrs:{type:"seq",width:"60"}}),a("vxe-table-column",{attrs:{field:"name",title:"Name"}}),a("vxe-table-column",{attrs:{field:"role",title:"Role"}}),a("vxe-table-column",{attrs:{field:"age",title:"Age"}}),a("vxe-table-column",{attrs:{field:"address",title:"Address"}})],1),a("common-pager",{attrs:{page:e.page},on:{getData:e.getData}})],1)},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"text-align":"center","font-size":"26px"}},[a("h1",[e._v("监控设备故障记录报表")])])}],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vxe-pager",{attrs:{align:"left","current-page":e.page.currentPage,"page-size":e.page.pageSize,total:e.page.totalResult},on:{"update:currentPage":function(t){return e.$set(e.page,"currentPage",t)},"update:current-page":function(t){return e.$set(e.page,"currentPage",t)},"update:pageSize":function(t){return e.$set(e.page,"pageSize",t)},"update:page-size":function(t){return e.$set(e.page,"pageSize",t)},"page-change":e.handlePageChange}})],1)},s=[],r={props:{page:[Object]},data:function(){return{}},methods:{handlePageChange:function(e){this.$emit("getData",e)}}},o=r,c=a("2877"),d=Object(c["a"])(o,i,s,!1,null,null,null),u=d.exports,p=a("ed31"),g={data:function(){return{title:"监控设备故障记录报表",loading:!1,tableData:[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,address:"vxe-table 从入门到放弃"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,address:"Shanghai"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:32,address:"Beijing"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:23,address:"vxe-table 从入门到放弃"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:30,address:"Shenzhen"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"Women",age:21,address:"vxe-table 从入门到放弃"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"Man",age:29,address:"vxe-table 从入门到放弃"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"Man",age:35,address:"vxe-table 从入门到放弃"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"Man",age:35,address:"vxe-table 从入门到放弃"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"Man",age:35,address:"vxe-table 从入门到放弃"}],page:{currentPage:1,pageSize:10,totalResult:200},value0:"",options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],date:""}},methods:{getData:function(e){var t=this;this.loading=!0,setTimeout((function(){t.loading=!1}),1e3);var a={};a.pageSize=e.pageSize,a.currentPage=e.currentPage,console.log(a)},printEvent1:function(){this.$refs.xTable.print({sheetName:"打印表格",style:m,columns:[{type:"seq"},{field:"name"},{field:"role"},{field:"address"}],beforePrintMethod:function(e){var t=e.content;return v+t+b}})}},components:{LineTitle:p["a"],CommonPager:u}},m="\n.title {\n    text-align: center;\n}\n.my-list-row {\n    display: inline-block;\n    width: 100%;\n}\n.my-list-col {\n    float: left;\n    width: 33.33%;\n    height: 28px;\n    line-height: 28px;\n}\n.my-top,\n.my-bottom {\n    font-size: 12px;\n}\n.my-top {\n    margin-bottom: 5px;\n}\n.my-bottom {\n    margin-top: 30px;\n    text-align: right;\n}\n",v='\n<h1 class="title">监控设备故障记录报表</h1>\n<div class="my-top">\n    <div class="my-list-row">\n    <div class="my-list-col">起止时间:</div>\n    <div class="my-list-col">煤矿:</div>\n</div>\n',b='\n<div class="my-bottom">\n    <div class="my-list-row">\n    <div class="my-list-col"></div>\n    <div class="my-list-col"></div>\n    <div class="my-list-col">报表日期:</div>\n    </div>\n</div>\n',f=g,h=(a("d2d9"),Object(c["a"])(f,n,l,!1,null,"be016d3a",null));t["default"]=h.exports},a029:function(e,t,a){"use strict";a("59c7")},d2d9:function(e,t,a){"use strict";a("4e74")},ed31:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("i"),a("h1",{on:{click:e.back}},[e._v(e._s(e.title))]),e.subtitle?a("h1",[e._v(">>> "+e._s(e.subtitle))]):e._e()])},l=[],i={props:{title:{type:String,default:""},subtitle:{type:String,default:""}},methods:{back:function(){this.$emit("back")}}},s=i,r=(a("a029"),a("2877")),o=Object(r["a"])(s,n,l,!1,null,"36189083",null);t["a"]=o.exports}}]);