import zhLocale from "element-ui/lib/locale/lang/zh-CN"
const cn = {
    routeName: {
        home: "主页",
        network: "网络请求",
        user: "用户管理",
        statement: "报表管理",
        components: "通用组件"
    },
    ...zhLocale //  合并element-ui内置翻译
}

export default cn