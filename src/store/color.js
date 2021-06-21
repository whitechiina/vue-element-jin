// import { setCookie, getCookie } from '@/utils'

export default {
    state: {
        color: '#0066CC',
        theme: 'blue'
    },
    mutations: {
        //更新主题颜色
        setColor(state, val) {
            state.color = val
        },

        // 更新主题换肤
        upDateTheme(state, val) {
            state.theme = val
        }
    },
    getters: {
        theme: state => state.theme,
    }
}