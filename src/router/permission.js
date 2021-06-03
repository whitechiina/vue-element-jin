import NProgress from "nprogress"
import router from "./index"
import store from "../store"

// 登录重定向
router.beforeEach((to, from, next) => {
    NProgress.start()
    const role = store.getters.token;
    if (!role && to.path !== '/login') {
        next('/login');
    } else next()
})


router.afterEach(() => {
    NProgress.done()
})