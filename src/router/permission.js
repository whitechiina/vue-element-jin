import NProgress from "nprogress"
import router from "./index"
import store from "../store"

// 登录重定向
router.beforeEach((to, from, next) => {
    NProgress.start()
    // 判断token是否存在，否则返回登录页
    const role = store.getters['token/token'];
    if (!role && to.path !== '/login') {
        next('/login');
        console.log('meiyou token')
    } else next()
})

router.afterEach(() => {
    NProgress.done()
})