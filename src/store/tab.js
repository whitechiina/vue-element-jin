export default {
    state: {
        menu: [],
        currentMenu: null,
        isCollapse: false,  //伸缩条
        tabList: [
            {
                path: "/",
                label: "首页",
                name: 'home',
                icon: "video-play"
            },
        ]
    },
    mutations: {
        selectMenu(state, val) {
            if (val.name !== 'home') {
                state.currentMenu = val
                let result = state.tabList.findIndex(item => item.name === val.name)
                result === -1 ? state.tabList.push(val) : ''
            } else  {
                state.currentMenu = null
            }
        },
        closeTab(state, val) {
            let result = state.tabList.findIndex(item => item.name === val.name)
            state.tabList.splice(result, 1)
        },
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        }
    },
    actions: {

    }
}