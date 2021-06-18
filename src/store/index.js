import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'
import color from './color'
import { setCookie, getCookie } from '@/utils'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: getCookie("token"),
    projectitle: getCookie("Title")
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      setCookie("token", token, { expires: 1 / 24 })
    },
    editTitlr(state, projectitle) {
      state.projectitle = projectitle
    }
  },
  actions: {
    setToken ({commit}, token) {
      return new Promise((resolve) => {
        commit("setToken", token)
        resolve()
      })
    }
  },
  getters: {
    token: state => state.token,
    projectitle: state => state.projectitle,
  },
  modules: {
    tab,
    color
  }
})


export default store