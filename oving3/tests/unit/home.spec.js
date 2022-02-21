import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import { mount } from '@vue/test-utils'
import { createStore } from '@/store'
import router from '@/router'
import routes from '@/router'
import { createRouter, createMemoryHistory } from "vue-router"

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
        router.push('/')
        await router.isReady()
        const wrapper = mountHome({
            plugins: [{
                store: {
                    state: () => ({
                        token: 1,
                        fullName: 'Ole'
                    })
                },
            }, router]
        })
        expect(wrapper.html()).toContain('Ole')
    })
})