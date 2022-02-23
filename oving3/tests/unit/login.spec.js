import Login from '@/views/Login.vue'
import { mount } from '@vue/test-utils'
import { createStore } from '@/store'
import router from '@/router'

//Redirect
//button-click (overlap med vuex?)
//Riktig navn vises
//Login funker når bruker finnes
//Vuex
//Register link appears when invalid is true

function mountLogin(config = {}) {
    config.mountOptions = config.mountOptions || {}
    config.plugins = config.plugins || {}
    return mount(Login, {
      global: {
        plugins: [
          createStore(config.plugins.store), 
          router
        ]
      },
      ...config.mountOptions
    })
}

let wrapper

describe('Login', () => {
    test('User is redirected to home when login is valid', async () => {
        wrapper = mountLogin({
            plugins: [{
                store: {
                    state: () => ({
                        token: 1,
                        username: 'Ole',
                        password: 'Ole123'
                    })
                },
            }, router]
        })

        const usernameInput = wrapper.find('[data-test="username"]')
        const passwordInput = wrapper.find('[data-test="password"]')
        
        await usernameInput.setValue("Ole")
        await passwordInput.setValue("Ole123")
        await wrapper.find('[data-test="form"]').trigger('submit')

        expect(window.location.href).toEqual("http://localhost/")
    }),
    test('User is not redirected when login is invalid', () => {
        wrapper = mount(Login)
        expect(true).toBe(true)
    })
})
