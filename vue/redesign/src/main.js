import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import { auth } from './firebase'

Vue.config.productionTip = false

let app
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

  if (user) store.dispatch('fetchUserProfile', user)
})
