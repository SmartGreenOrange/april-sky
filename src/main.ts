import {createApp} from "vue";
import router from "./router";
import App from "./App.vue";
import Particles from "particles.vue3";
import Vant from 'vant';
import './assets/css/reset.css'
import 'vant/lib/index.css';

createApp(App).use(router).use(Particles).use(Vant).mount("#app");
