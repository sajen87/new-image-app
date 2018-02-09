import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Images from '@/components/Images'
import firebase from 'firebase'

Vue.use(Router);

var router = new Router({
    routes: [
        {
            path: '*',
            redirect: '/login'

        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/signup',
            name: 'signUp',
            component: SignUp
        },
        {
            path: '/images',
            name: 'images',
            component: Images,
            meta: {
                requiresAuth: true
            }
        }
    ],
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) next('login')
    else if (!requiresAuth && currentUser) next('helloworld')
    else next()

});

export default router