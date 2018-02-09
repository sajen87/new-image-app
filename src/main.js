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

var app;
var config = {
    apiKey: "AIzaSyCpuJj4ZVyLY533g0mOWBqEdkzvhX1Zv2A",
    authDomain: "lpp-image-app.firebaseapp.com",
    databaseURL: "https://lpp-image-app.firebaseio.com",
    projectId: "lpp-image-app",
    storageBucket: "lpp-image-app.appspot.com",
    messagingSenderId: "217358328034"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
    if(!app) {
        app = new Vue({
            el: '#app',
            template: '<App/>',
            components: { App },
            store: store,
            router

        });
    }
});


