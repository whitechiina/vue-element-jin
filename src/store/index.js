import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'
import color from './color'
import Cookies from "js-cookie"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: Cookies.get("token"),
    projectitle: Cookies.get("Title")
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      Cookies.set("token", token, { expires: 1 / 24 })
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