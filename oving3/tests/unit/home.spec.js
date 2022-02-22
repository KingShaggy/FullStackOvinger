import Home from '@/views/Home.vue'
import { mount } from '@vue/test-utils'
import { createStore } from "vuex"
import router from '@/router'

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

describe('Home', () => {
    test('Home is displayed when user is authenticated', async () => {
        const wrapper = mount(Home, {
            global: {
                plugins: [store, router]
            }
        })
        store.commit("updateToken", 123);

        router.push('/')
        await router.isReady()

        expect(wrapper.html()).toContain('Hello')
    }),
    test('Login is displayed when user is not authenticated', async () => {
        const wrapper = mount(Home, {
            global: {
                plugins: [store, router]
            }
        })

        router.push('/')
        await router.isReady()
        expect(window.location.href).toContain('login')
    })
})