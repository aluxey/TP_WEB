import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    clearUser(state) {
      state.user = null
    }
  },
  actions: {
  },
  getters: {
    isLoggedIn: state => !!state.user,
    currentUser: state => state.user
  }
})
