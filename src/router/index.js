import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/photo',
    component: () => import('@/views/Home/Index.vue')
  },
  {
    path: '/article',
    name: 'ArticleHome',
    redirect: '/article/list',
    component: () => import('@/views/Article/Index.vue'),
    children: [
      {
        path: 'list',
        name: 'ArticleList',
        component: () => import('@/views/Article/List.vue')
      },
      {
        path: ':id',
        name: 'ArticlePage',
        component: () => import('@/views/Article/Page.vue')
      }
    ]
  },
  {
    path: '/photo',
    name: 'PhotoHome',
    redirect: '/photo/list',
    component: () => import('@/views/Photo/Index.vue'),
    children: [
      {
        path: 'list',
        name: 'PhotoList',
        component: () => import('@/views/Photo/List.vue')
      },
      {
        path: ':id',
        name: 'PhotoPage',
        component: () => import('@/views/Photo/Page.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About/Index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
