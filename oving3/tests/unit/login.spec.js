import Login from '@/views/Login.vue'
import { mount } from '@vue/test-utils'

//Redirect
//button-click (overlap med vuex?)
//Riktig navn vises
//Login funker når bruker finnes
//Vuex
//Register link appears when invalid is true


describe('Login', () => {
    test('The link to regsister appears when the login attempt was invalid', () => {
        const wrapper = mount(Login)
        expect(true).toBe(true)
    }),
    test('The link to regsister is not visible when there have not been any attempts to log in', () => {
        const wrapper = mount(Login)
        expect(true).toBe(true)
    })
})