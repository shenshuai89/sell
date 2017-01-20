// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';

import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    linkActiveClass: 'active',
    routes: [
        {path: '/', redirect: '/goods'},
        {path: '/goods', name: 'goods', component: goods, alias: ['/']},
        {path: '/ratings', name: 'ratings', component: ratings},
        {path: '/seller', name: 'second', component: seller}
    ]
});

/* eslint-disable no-new */
new Vue({
    router,
    render: x => x(App)
}).$mount('#app');
