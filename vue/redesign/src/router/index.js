import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    webpackChunkName: 'landing',
    component: () => import('../views/Landing.vue')
  },
  {
    path: '/home',
    name: 'Home',
    webpackChunkName: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/news',
    name: 'News',
    webpackChunkName: 'news',
    component: () => import('../views/News.vue')
  },
  {
    path: '/game',
    name: 'Game',
    webpackChunkName: 'game',
    component: () => import('../views/Game.vue')
  },
  {
    path: '/forum',
    name: 'Forum',
    webpackChunkName: 'forum',
    component: () => import('../views/Forum.vue')
  },
  {
    path: '/about',
    name: 'About',
    webpackChunkName: 'about',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({ mode: 'history', routes })
export default router
