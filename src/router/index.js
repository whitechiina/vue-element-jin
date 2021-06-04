import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/**
 * 重写路由的push方法
 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [{
    path: "/login",
    component: () => import('@/views/Login/index.vue'),
    hidden: true,
    children: []
  },
  {
    path: '/',
    component: () => import('../layout/Main.vue'),
    children: [{
        path: '/',
        name: 'home',
        component: () => import('@/views/Index/Home.vue'),
        meta: {
          index: 1
        }
      },
      {
        path: '/hometwo',
        name: 'hometwo',
        component: () => import('@/views/HomeTwo/HomeTwo.vue'),
        meta: {
          index: 2
        }
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/VideoManage/video.vue'),
        meta: {
          index: 3
        }

      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/UserManage/UserManage.vue'),
        meta: {
          index: 4
        }
      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import('@/views/OtherManage/PageOne.vue'),
        meta: {
          index: 5
        }
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('@/views/OtherManage/PageTwo.vue'),
        meta: {
          index: 6
        }
      },
      {
        path: '/page3',
        name: 'page3',
        component: () => import('@/views/OtherManage/PageThree.vue'),
        meta: {
          index: 7
        }
      },
      {
        path: '/page4',
        name: 'page4',
        component: () => import('@/views/OtherManage/PageFour.vue'),
        meta: {
          index: 8
        }
      },
      {
        path: '/page5',
        name: 'page5',
        component: () => import('@/views/OtherManage/PageFive.vue'),
        meta: {
          index: 9
        }
      },
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