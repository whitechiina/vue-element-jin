(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-367a5630"],{"47ea":function(e,t,a){"use strict";a("6a60")},"6a60":function(e,t,a){},d498:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("LineTitle",{attrs:{title:e.title}}),a("div",{staticClass:"form"},[a("vxe-toolbar",{ref:"xToolbar1",attrs:{custom:""},scopedSlots:e._u([{key:"buttons",fn:function(){return[a("div",{staticClass:"header",staticStyle:{display:"flex","justify-content":"space-between"}},[a("div",{staticClass:"search"},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"export"},[a("el-button",{attrs:{type:"primary"},on:{click:e.exportDataEvent}},[e._v("导出")]),a("el-button",{attrs:{type:"primary"},on:{click:e.print}},[e._v("打印")])],1)])]},proxy:!0}])})],1),a("vxe-table",{ref:"xTable1",attrs:{border:"",resizable:"",id:"toolbar_demo5",height:"400","custom-config":{storage:!0,checkMethod:e.checkColumnMethod},data:e.tableData},on:{"resizable-change":e.resizableChangeEvent}},[a("vxe-table-column",{attrs:{type:"seq",width:"60"}}),a("vxe-table-column",{attrs:{field:"name",title:"Name"}}),a("vxe-table-column",{attrs:{field:"role",title:"Role"}}),a("vxe-table-column",{attrs:{field:"sex",title:"Sex"}}),a("vxe-table-column",{attrs:{field:"age",title:"Age"}})],1)],1)},n=[],s=(a("d81d"),a("ed31")),r={data:function(){return{title:"报表筛选",options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value:"",tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"vxe-table 从入门到放弃"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:23,address:"vxe-table 从入门到放弃"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women",age:21,address:"vxe-table 从入门到放弃"},{id:10007,name:"Test7",role:"Test",sex:"Man",age:29,address:"vxe-table 从入门到放弃"},{id:10008,name:"Test8",role:"Develop",sex:"Man",age:35,address:"vxe-table 从入门到放弃"}]}},created:function(){var e=this;this.$nextTick((function(){e.$refs.xTable1.connect(e.$refs.xToolbar1)}))},methods:{checkColumnMethod:function(e){var t=e.column;return t.property,!0},resizableChangeEvent:function(){var e=this.$refs.xTable1.getColumns(),t=e.map((function(e){return{width:e.renderWidth}}));console.log(t)}},components:{LineTitle:s["a"]}},o=r,i=a("2877"),c=Object(i["a"])(o,l,n,!1,null,"f2bb7776",null);t["default"]=c.exports},d81d:function(e,t,a){"use strict";var l=a("23e7"),n=a("b727").map,s=a("1dde"),r=s("map");l({target:"Array",proto:!0,forced:!r},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},ed31:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("i"),a("h1",[e._v(e._s(e.title))])])},n=[],s={props:{title:{type:String,default:""}}},r=s,o=(a("47ea"),a("2877")),i=Object(o["a"])(r,l,n,!1,null,"e422f9cc",null);t["a"]=i.exports}}]);