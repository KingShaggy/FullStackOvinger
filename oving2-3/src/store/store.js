import { createStore } from "vuex";

const store = createStore({
    state: {
        history: []
    },
    mutations: {
        updateHistory(state, payload) {
            state.history.push(payload);
        }
    }
})

export default store