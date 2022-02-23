import Home from '@/views/Home.vue'
import { mount } from '@vue/test-utils'
import { createStore } from '@/store'
import router from '@/router'

function mountHome(config = {}) {
    config.mountOptions = config.mountOptions || {}
    config.plugins = config.plugins || {}

    return mount(Home, {
        global: {
            plugins: [createStore(config.plugins.store), router]
        },
        ...config.mountOptions
    })
}

describe('Home', () => {
    test('Home is displayed when user is authenticated', async () => {
        const wrapper = mountHome({
            plugins: [{
                store: {
                    state: () => ({
                        token: 1,
                    })
                },
            }, router]
        })
        await router.isReady()
        expect(wrapper.html()).toContain('Hello')
    }),
    test('Login is displayed when user is not authenticated', async () => {
        router.push('/')
        await router.isReady()
        const wrapper = mountHome({
            plugins: [{
                store: {
                    state: () => ({
                        token: null,
                    })
                },
            }, router]
        })
        expect(window.location.href).toEqual("http://localhost/login")
    })
})
