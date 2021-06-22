import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入英语
// import en from "../i18n/lang/en"
Vue.use(VueRouter)

/**
 * 重写路由的push方法
 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {path:'/',redirect:'/home'},
  {
    path: "/login",
    component: () => import('@/views/Login/index.vue'),
    hidden: true,
    children: [],
    meta: {
      keepAlive: false // 不需要缓存
    }
  },
  // 创建空页面刷新跳转
  {
    path: '/redirect/:path*',
    component: () => import('@/views/redirect'),
    hidden: true
  },
  {
    path: '/home',
    component: () => import('../layout/Main.vue'),
    children: [{
        path: '/home',
        name: 'home',
        component: () => import('@/views/Index/Home.vue'),
        meta: { title: '首页' }
      },
      {
        path: '/server',
        name: 'server',
        component: () => import('@/views/ServerApi/index.vue'),
        meta: { title: '网络请求' }
      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import('@/views/OtherManage/PageOne.vue'),
        meta: { title: '折线图' }
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('@/views/OtherManage/PageTwo.vue'),
        meta: { title: '报表打印' }
      },
      {
        path: '/page3',
        name: 'page3',
        component: () => import('@/views/OtherManage/PageThree.vue'),
        meta: { title: '报表导出' }
      },
      {
        path: '/page4',
        name: 'page4',
        component: () => import('@/views/OtherManage/PageFour.vue'),
        meta: { title: '报表筛选' }
      },
      {
        path: '/page5',
        name: 'page5',
        component: () => import('@/views/OtherManage/PageFive.vue'),
        meta: { title: '综合报表' }
      },
      {
        path: '/page6',
        name: 'page6',
        component: () => import('@/views/OtherManage/PagePdf.vue'),
        meta: { title: 'PDF预览' }
      },
      {
        path: '/VideoView',
        name: 'VideoView',
        component: () => import('@/views/VideoView/index.vue'),
        meta: { title: '视频组件' }
      },
      {
        path: '/CropperImage',
        name: 'CropperImage',
        component: () => import('@/views/CropperImage/index.vue'),
        meta: { title: '图片裁剪' }
      },
      {
        path: '/Scroll',
        name: 'Scroll',
        component: () => import('@/views/ScrollView/index.vue'),
        meta: { index: 13, title: '无缝滚动' }
      },
      {
        path: "/flow",
        name: 'flow',
        component: () => import('@/views/FlowView/index.vue'),
        meta: { title: '流程编辑器' }
      }
    ]
  },
  {
    path: "/404",
    name: "notFound",
    component: () => import('@/views/404/index.vue'),
  }, {
    path: "*", // 此处需特别注意置于最底部
    redirect: "/404"
  }
]

const router = new VueRouter({
  routes
})



export default router