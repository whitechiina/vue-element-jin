import { setCookie, getCookie } from '@/utils'

const state = {
    token: getCookie("token"),
}

const mutations = {
    setToken (state, token) {
        state.token = token
        setCookie("token", token, { expires: 1 / 24 })
    },
}

const actions = {
    setTokens ({commit}, token) {
        console.log('执行了？')
        return new Promise((resolve) => {
            commit("setToken", token)
            resolve()
        })
    }
}

const getters = {
    token: state => state.token,
}

export default {
    state,
    actions,
    getters,
    mutations
}