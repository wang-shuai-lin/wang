import Vue from 'vue'
import VueRouter from 'vue-router'
import Dl from "../components/dl.vue"
import Tu from "../components/tu.vue"
import Shuj from "../components/shuj.vue"

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Dl
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
    {
        path: '/tu',
        component: Tu
    },
    {
        path: '/shuj',
        component: Shuj
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router