import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import UserStore, { stateSymbol} from '@/stores/userStore'


console.log("loading main.ts");

createApp(App)
    .provide(stateSymbol, UserStore)
    .use(router)
    .mount("#app");
