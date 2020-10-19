import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'

Vue.use(Vuex)

fb.postsCollection.orderBy('createdOn', 'desc').onSnapshot(snapshot => {
  const postsArray = []

  snapshot.forEach(doc => {
    const post = doc.data()
    post.id = doc.id
    postsArray.push(post)
  })

  store.commit('setPosts', postsArray)
})

const store = new Vuex.Store({
  state: {
    userProfile: {},
    posts: []
  },
  mutations: {
    setUserProfile (state, val) {
      state.userProfile = val
    },
    setPosts (state, val) {
      state.posts = val
    }
  },
  actions: {
    /* auth */
    async login ({ dispatch }, form) {
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
      dispatch('fetchUserProfile', user)
    },

    async fetchUserProfile ({ commit }, user) {
      const userProfile = await fb.usersCollection.doc(user.uid).get()
      commit('setUserProfile', userProfile.data())
      if (router.currentRoute.path === '/login') router.push('/forum')
    },

    async signup ({ dispatch }, form) {
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
      await fb.usersCollection.doc(user.uid).set({ name: form.name })
      dispatch('fetchUserProfile', user)
    },

    async logout ({ commit }) {
      await fb.auth.signOut()
      commit('setUserProfile', {})
      router.push('/')
    },

    /* post */
    async createPost ({ state }, post) {
      await fb.postsCollection.add({
        createdOn: new Date(),
        title: post.title,
        content: post.content,
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.name,
        comments: 0,
        upvotes: 0
      })
    }
  }
})

export default store
