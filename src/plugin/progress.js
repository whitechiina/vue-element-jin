// 进度条插件
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from '@/router'

NProgress.configure({     
    easing: 'ease',  // 动画方式    
    speed: 500,  // 递增进度条的速度    
    showSpinner: false, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
})

// 路由守卫
router.beforeEach((to, from , next) => {
    // 动态标题
    if(to.meta.title){
        document.title = to.meta.title + ' - Vue Element Jin'
    } else {
        document.title = 'Vue-Element-Jin后台管理系统'
    }

    // 每次切换页面时，调用进度条
    NProgress.start();
    // 这个一定要加，没有next()页面不会跳转的
    next();
});

router.afterEach(() => {  
    // 在即将进入新的页面组件前，关闭掉进度条
    NProgress.done()
})