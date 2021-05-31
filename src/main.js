import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as axios from '@/api/config'

// 第三方库
import ElementUI from 'element-ui'
import VXETable from 'vxe-table'
import VXETablePluginExportXLSX from 'vxe-table-plugin-export-xlsx'

// 全局配置
import 'vxe-table/lib/style.css'
import '@/assets/scss/reset.scss'
import 'xe-utils'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VXETable)
VXETable.use(VXETablePluginExportXLSX)

Vue.config.productionTip = false

Vue.prototype.$XModal = VXETable.modal
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
