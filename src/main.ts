import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { stateSymbol, createUserStore } from '@/stores/userStore'


console.log("loading main.ts");

createApp(App)
    .provide(stateSymbol, createUserStore())
    .use(router)
    .mount("#app");
