import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push= function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: '/',
    component: () => import('../layout/Main.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Index/Home.vue')
      },
      {
        path: '/hometwo',
        name: 'hometwo',
        component: () => import('@/views/HomeTwo/HomeTwo.vue')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/VideoManage/video.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/UserManage/UserManage.vue')
      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import('@/views/OtherManage/PageOne.vue')
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('@/views/OtherManage/PageTwo.vue')
      },
      {
        path: '/page3',
        name: 'page3',
        component: () => import('@/views/OtherManage/PageThree.vue')
      },
      {
        path: '/page4',
        name: 'page4',
        component: () => import('@/views/OtherManage/PageFour.vue')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
