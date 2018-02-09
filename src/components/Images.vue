<template>
    <div>
        <div>
            <b-navbar toggleable type="dark" variant="dark" position="sticky">
                <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
                <b-navbar-brand>LPP</b-navbar-brand>
                <b-nav-text>Draggable Image App</b-nav-text>
                <b-collapse is-nav id="nav_text_collapse">
                    <b-navbar-nav class="ml-auto">
                        <b-button @click="logOut" variant="success">Wyloguj sie</b-button>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <div>
            <div class="buttons">
                <b-button @click="increment" variant="success">dodaj obrazki</b-button>
                <b-button @click="decrement" variant="danger">wyrzuć obrazki</b-button>
            </div>


            <div class="container">


                <b-card-group columns>
                    <draggable v-model="myList"
                               :options="{animation:100, scroll: true, scrollSensitivity: 200, scrollSpeed: 20}"
                                @change="update">

                        <b-card v-for="(pic, index) in pictures" :key="pic.id"
                                :img-src="pic.url"
                                style="max-width: 20rem;"
                                class="mb-2"
                        >
                            <p @click="showInput">{{index}}</p>
                            <p class="card-text">
                                {{pic.title}}
                            </p>
                            <b-form-input class="invisible" type="text" v-model="pic.title" placeholder="Wpisz swój tekst"></b-form-input>

                        </b-card>


                    </draggable>

                </b-card-group>

            </div>

        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import firebase from 'firebase'

    export default {
        components: {
            draggable,
        },

        data() {
            return {}
        },
        created() {
            this.$store.dispatch("fetchData").then(() => {
                console.log("This would be printed after dispatch!!")
            })
        },
        computed: {
            count() {
                return this.$store.state.count;
            },
            pictures() {

                return this.$store.state.pics;
            },
            myList: {
                get() {
                    return this.$store.state.myList
                }
            }

        },
        methods: {
            increment() {
                this.$store.dispatch('increment')
            },
            decrement() {
                this.$store.dispatch('decrement')
            },
            logOut(){
                firebase.auth().signOut().then(function() {

                }).catch(function(error) {
                    // An error happened.
                });
            },
            update(){
                console.log(this.$store.state.pics)
            },
            showInput(){
                alert("dzds")
            }

        }
    }
</script>

<style scoped>

    .container {
        width: 100%;
    }

    p {
        font-size: 12px;
    }

    .buttons {
        margin-top: 40px;
    }

    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        color: yellow;
        text-decoration: none;
    }

    .container {
        margin-top: 40px;
    }

    img:hover {
        cursor: pointer;
    }

</style>

<!--:title="pic.id"-->


<!--<b-card v-for="pic in pictures" :key="pic.id"-->
<!--:img-src="pic.url"-->
<!--img-alt="Img"-->
<!--img-top>-->
<!--<p class="card-text">-->
<!--{{pic.title}}-->
<!--</p>-->

<!--<div slot="header">-->
<!--<small class="text-muted">LPP</small>-->
<!--</div>-->

<!--</b-card>-->
