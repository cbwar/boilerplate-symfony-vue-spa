import PageNotFound from "./vue/pages/PageNotFound.vue";
import HomePage from "./vue/pages/HomePage.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: PageNotFound
    }
];
export default routes;
