(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d30b9"],{"5aa8":function(e,i,t){"use strict";t.r(i);var a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("el-button",{attrs:{type:"primary"},on:{click:e.preview}},[e._v("点击跳转打开在线文件")]),t("embed",{attrs:{src:e.previewUrl,type:"application/pdf",width:"100%",height:"500px"}}),t("el-button",{attrs:{type:"primary"},on:{click:e.iframa}},[e._v("iframe弹窗打开")]),t("el-dialog",{attrs:{title:e.fileName,visible:e.visible,width:"60%",closeOnClickModal:!1},on:{"update:visible":function(i){e.visible=i}}},[e.visible?t("div",{staticClass:"view_box"},[t("iframe",{attrs:{src:e.pdfurl,width:"100%",height:"900px"}})]):e._e()])],1)},r=[],n={data:function(){return{fileName:"预览文件",visible:!1,previewUrl:"http://mongol.xjdaily.com/newspaper/2021-06-21/22/23-3748216.pdf"}},computed:{pdfurl:function(){return this.previewUrl}},methods:{preview:function(){window.open("http://mongol.xjdaily.com/newspaper/2021-06-21/22/23-3748216.pdf")},iframa:function(){this.visible=!0}}},l=n,p=t("2877"),o=Object(p["a"])(l,a,r,!1,null,"a078807a",null);i["default"]=o.exports}}]);