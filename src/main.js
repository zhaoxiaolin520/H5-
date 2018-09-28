import "babel-polyfill";
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(Vuex);
Vue.use(VueRouter);
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
import App from './App.vue'

const r = [
    {
        path: "/active",
        component: require('./active/active.vue').default,
        name: "活动"
    },
    {
        path: "/rater",
        component: require('./rater/rater.vue').default,
        name: "评委"
    },
    {
        path: "/vote",
        component: require('./vote/vote.vue').default,
        name: "投票"
    },
    {
        path:"*",
        redirect: '/active'
    }
]

const router = new VueRouter({
    routes: r
})

new Vue({
  el: '#app',
    router,
    components: {
        App
    }
})
