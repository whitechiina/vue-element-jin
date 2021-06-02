import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'
import Cookies from "js-cookie"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: Cookies.get("token")
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      Cookies.set("token", token, { expires: 1 / 24 })
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
  modules: {
    tab
  }
})


export default store