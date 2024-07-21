import './styles/app.scss';
import {createApp} from "vue";
import App from "./vue/controllers/App.vue";
import {createRouter, createWebHashHistory} from "vue-router";
// @ts-ignore
import routes from './routes.js';

const app = createApp(App);
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
app.use(router)
app.mount('#app');
