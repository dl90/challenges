import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import { auth } from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    webpackChunkName: 'home',
    component: Home
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
    component: () => import('../views/Forum.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    webpackChunkName: 'about',
    component: () => import('../views/About.vue')
  },
  // auth
  {
    path: '/login',
    name: 'Login',
    webpackChunkName: 'login',
    component: () => import('../components/AuthForm.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: 'localhost',
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  if (requiresAuth && !auth.currentUser) next('/login')
  else next()
})

export default router
