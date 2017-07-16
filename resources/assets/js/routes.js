/**
 * Created by maedc on 13/7/2017.
 */
import VueRouter from 'vue-router';

let routes = [{
    path: '/',
    component: require('./components/Home.vue')
},
    {
        path: '/about',
        component: require('./components/About.vue')
    }, {
        path: '/vision',
        component: require('./components/vision.vue')
    },
    {
        path: '/create',
        component: require('./components/form.vue')
    }];

export default new VueRouter({
    routes,
    linkActiveClass: 'active'
});