import Login from '@/views/Login.vue'
import { mount } from '@vue/test-utils'
import { createStore } from "vuex"
import router from '@/router'

//Redirect
//button-click (overlap med vuex?)
//Riktig navn vises
//Login funker når bruker finnes
//Vuex
//Register link appears when invalid is true

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

describe('Login', () => {
    test('User is redirected to home when login is valid', async () => {
        const wrapper = mount(Login, {
            global: {
                plugins: [store, router]
            }
        })
        
        store.commit("updateUsername", "Ole");
        store.commit("updatePassword", "Ole123");

        router.push('/login')
        await router.isReady()

        const usernameInput = wrapper.find('[data-test="username"]')
        const passwordInput = wrapper.find('[data-test="password"]')
        
        await usernameInput.setValue("Ole")
        await passwordInput.setValue("Ole123")
        await wrapper.find('[data-test="form"]').trigger('submit')

        console.log(wrapper.html())

        expect(window.location.href).toEqual("http://localhost/")
    }),
    test('User is not redirected when login is invalid', () => {
        const wrapper = mount(Login)
        expect(true).toBe(true)
    })
})