<template>
    <div>

        <div>
            <b-button @click="increment" size="lg" variant="success">+</b-button>
            <b-button @click="decrement" size="lg" variant="danger">-</b-button>

            <b-card-group deck>
                <div class="images d-flex justify-content-center">


                        <div v-for="number in count" :key="number.id">
                            <draggable v-model="myList"
                                       :options="{animation:100, scroll: true, scrollSensitivity: 200, scrollSpeed: 20}">

                            <b-card v-for="pic in pictures" :key="pic.id"
                                    :img-src="pic.url"
                                    img-alt="Img"
                                    img-top>
                                <p class="card-text">

                                    {{pic.title}}
                                </p>

                                <div slot="footer">
                                    <small class="text-muted">LPP</small>
                                </div>

                            </b-card>
                            </draggable>
                        </div>



                </div>
            </b-card-group>
            <b-btn variant="primary" href="/login">Back to login</b-btn>
        </div>


    </div>
</template>

<script>
    import draggable from 'vuedraggable'

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
            }
        }
    }
</script>

<style scoped>

    .images {
        width: 20%;
        display: grid;
        grid-template-columns: 30% 30% 30%;
        grid-gap: 8px;
        position: absolute;
        left: 50%;
        top: 15%;
        transform: translateX(-50%);
    }
</style>

<!--:title="pic.id"-->
