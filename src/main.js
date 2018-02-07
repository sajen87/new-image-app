// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import firebase from 'firebase'
import VueResource from 'vue-resource'
import {store} from "./store/store"


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueResource);


// Initialize Firebase
var config = {
    apiKey: "AIzaSyCpuJj4ZVyLY533g0mOWBqEdkzvhX1Zv2A",
    authDomain: "lpp-image-app.firebaseapp.com",
    databaseURL: "https://lpp-image-app.firebaseio.com",
    projectId: "lpp-image-app",
    storageBucket: "lpp-image-app.appspot.com",
    messagingSenderId: "217358328034"
};
firebase.initializeApp(config);


/* eslint-disable no-new */
new Vue({
    store: store,
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
