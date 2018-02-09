import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Images from '@/components/Images'

Vue.use(Router);

export default new Router({
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
            component: Images
        },
        {
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld,
            meta: {
                requiresAuth: true
            }
        }
    ],
    mode: 'history'
})
