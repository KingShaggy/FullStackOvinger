import { createStore as vuexCreateStore } from 'vuex'

const storeConfiguration = {
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
}

const defaultOverrides = {
  state: () => {
    return {}
  }
}

function makeState(initialState, overrideState) {
  return {
    ...(typeof initialState === 'function' ? initialState() : initialState),
    ...overrideState()
  }
}

export function createStore(storeOverrides = defaultOverrides) {
  return vuexCreateStore({
    ...storeConfiguration,
    ...storeOverrides,
    ...{
      state: makeState(storeConfiguration.state, storeOverrides.state)
    }
  })
}

export default createStore()
