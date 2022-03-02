import { createStore } from "vuex";

const store = createStore({
    state: {
        history: [],
        name: '',
        email: ''
    },
    mutations: {
        updateHistory(state, payload) {
            state.history.push(payload);
        },
        updateName(state, payload) {
            state.name = payload;
        },
        updateEmail(state, payload) {
            state.email = payload;
        }
    }
})

export default store