export default {
    state: {
        menu: [],
        currentMenu: null,
        isCollapse: false,  //伸缩条
        tagFlag: false,  //标签卡
        tabList: [
            {
                path: "/",
                label: "home",
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
        allTab(state) {
            state.tabList = [
                {
                    path: "/",
                    label: "首页",
                    name: 'home',
                    icon: "video-play"
                },
            ];
        },
        closeTab(state, val) {
            let result = state.tabList.findIndex(item => item.name === val.name)
            state.tabList.splice(result, 1)
        },
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        tagFlag(state) {
            state.tagFlag = !state.tagFlag
        },
        
    },
    actions: {

    }
}