import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        user: null,
        pics: [],
        message: "to sekretna wiadomość w chuj",
        pictureNumber: 4,
        mylist: []
    },
    getters: {
        pictureNumbers(state) {
            return state.pictureNumber;
        }
    },
    mutations: {
        FETCH_PICTURES(state, pics) {
            state.pics = pics;
        }


    },
    actions: {
        fetchData({commit, getters}) {
            return new Promise((resolve) => {
                Vue.http.get("https://jsonplaceholder.typicode.com/photos")
                    .then((response) => response.body.slice(0, getters.pictureNumbers))
                    .then((photos) => {

                        commit("FETCH_PICTURES", photos);
                        resolve(photos);

                    })
                    .catch((error => {
                        console.log(error.statusText);
                    }));
            });


        }

    }
});


