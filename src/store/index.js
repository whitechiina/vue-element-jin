import Vue from 'vue'
import Vuex from 'vuex'

// 导入的模块
import token from './modules/token'
import tab from './modules/tab'
import color from './modules/color'
import title from './modules/title'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    token,
    tab,
    color,
    title
  }
})


export default store