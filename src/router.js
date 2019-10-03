import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./components/home/Home.vue')
        },
        {
            path: '/connexion',
            name: 'connexion',
            component: () => import('./components/authentification/connexion/Connexion.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./components/authentification/register/Register.vue')
        },
        {
            path: '/world',
            name: 'world',
            component: () => import('./components/world/World.vue')
        },
        {
            path: '/cours',
            name: 'cours',
            component: () => import('./components/cours/cours')
        }
    ]
})
