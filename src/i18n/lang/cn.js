import zhLocale from "element-ui/lib/locale/lang/zh-CN"
const cn = {
    routeName: {
        home: "主页",
        network: "网络请求",
        user: "用户管理",

        statement: "报表管理",
        reportprinting: "报表打印",
        reportexport: "报表导出",
        reportfiltrate: "报表筛选",
        reportsynthesize: "综合报表",
        pdfpreview: "PDF预览",
        
        components: "通用组件",
        linechart: "折线图",
        video: "视频组件",
        tailor: "裁剪组件",
        roll: "无缝滚动",
        flow: "流程编辑器",
        notfound: "404页面"
    },
    ...zhLocale //  合并element-ui内置翻译
}

export default cn