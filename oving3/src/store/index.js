import { createStore } from 'vuex'

const store = createStore({
  state: {
    username: '',
    password: '',
    fullName: '',
    token: null,
  },
  mutations: {
    updateUsername(state, payload) {
      state.usern = payload;
    },
    updatePassword(state, payload) {
      state.password = payload;
    },
    updateFullName(state, payload) {
      state.fullName = payload;
    },
    updateToken(state, payload) {
      state.token = payload;
    }
  }
})

export default store;
