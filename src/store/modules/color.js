import { getCookie } from '@/utils'

const state = {
    color: '#0066CC',
    theme: getCookie("THEME")
}

const mutations = {
    //更新主题颜色
    setColor(state, val) {
        state.color = val
    },
    // 更新主题换肤
    upDateTheme(state, val) {
        state.theme = val
    }
}
const getters = {
    thÎeme: state => state.theme,
}

export default {
    state,
    mutations,
    getters
}