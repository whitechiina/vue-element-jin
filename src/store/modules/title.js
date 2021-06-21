import { getCookie } from '@/utils'

const state = {
    projectitle: getCookie("Title"),
}

const mutations = {
    editTitlr(state, projectitle) {
      state.projectitle = projectitle
    }
}

const getters = {
    projectitle: state => state.projectitle,
}

export default {
    state,
    getters,
    mutations
}