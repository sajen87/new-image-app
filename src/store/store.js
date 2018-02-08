import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        user: null,
        pics: [],
        message: "to sekretna wiadomość w chuj",
        // pictureNumber: 2,
        mylist: [],
        count: 1
    },
    getters: {
        // pictureNumbers(state) {
        //     return state.pictureNumber;
        // },
        picNumb(state) {
           return state.count
        }
    },
    mutations: {
        FETCH_PICTURES(state, pics) {
            state.pics = pics;
        },
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        }

    },
    actions: {
        fetchData({commit, getters}) {
            return new Promise((resolve) => {
                Vue.http.get("https://jsonplaceholder.typicode.com/photos")
                    .then((response) => response.body.slice(0, getters.picNumb))
                    .then((photos) => {

                        commit("FETCH_PICTURES", photos);
                        resolve(photos);

                    })
                    .catch((error => {
                        console.log(error.statusText);
                    }));
            });


        },
        increment ({ commit, dispatch }) {
            commit('increment');
            dispatch('fetchData');
        },
        decrement ({ commit, dispatch }) {
            commit('decrement');
            dispatch('fetchData');

        }

    }
});


