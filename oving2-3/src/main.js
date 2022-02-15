import { createApp } from "vue";
import VeeValidate from "vee-validate";
import App from "./App.vue";
import store from './store/store'
import router from './router'

createApp(App).use(router).use(store).use(VeeValidate).mount("#app");
