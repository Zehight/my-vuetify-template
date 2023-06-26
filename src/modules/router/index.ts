import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useKAComponent } from '@/modules/store'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/notfount',
    name: 'NotFound',
    component: () => import('@/views/common/NotFound.vue'),
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/common/HomePage.vue'),
  },
  {
    path: '/homepage',
    name: 'HomePage',
    component: () => import('@/views/common/HomePage.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    redirect: {
      name: 'NotFound',
    },
  },
]

// 二级目录，vite.config.ts base 配置的值。默认的全局变量
const base = import.meta.env.BASE_URL

const router = createRouter({
  // baseFolder('/context/') should be same with the base value in vite.config.ts
  history: createWebHistory(base),
  routes,
  // 只有一级路由可以使用
  scrollBehavior(to: any, from: any, savedPosition: any) {
    const store = useKAComponent()
    // keep-alive 的组件，保留滚动位置
    if (savedPosition && store.components.includes(to.name)) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  },
})



export default router
