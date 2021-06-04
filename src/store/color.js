export default {
    state: {
        color: '#0066CC'
    },
    mutations: {
        //更新主题颜色
        setColor(state, val) {
            state.color = val
            console.log(state.color)
        }
    }
}