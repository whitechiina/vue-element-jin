import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/icon/iconfont.css'
import animated from "animate.css";
import '@/api/config'  //网络请求

// 第三方库
import ElementUI from 'element-ui'
import VXETable from 'vxe-table'
import VXETablePluginExportXLSX from 'vxe-table-plugin-export-xlsx'
import './plugin/progress'  //进度条

// 全局配置
import 'vxe-table/lib/style.css'
import '@/assets/scss/reset.scss'
import 'xe-utils'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VXETable)
Vue.use(animated);
VXETable.use(VXETablePluginExportXLSX)

Vue.config.productionTip = false

Vue.prototype.$XModal = VXETable.modal
Vue.prototype.$message = ElementUI.Message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
