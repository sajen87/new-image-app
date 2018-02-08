<template>
    <div>

        <b-jumbotron header="Bootstrap Vue" lead="Bootstrap 4 Components for Vue.js 2">
            <p>For more information visit website</p>

            <div>

                <b-card-group deck>

                    <draggable v-model="myList" :options="{animation:100, scroll: true, scrollSensitivity: 200, scrollSpeed: 20}">
                        <transition-group>
                        <b-card v-for="pic in pictures" :key="pic.id"
                                :title="pic.id"
                                :img-src="pic.url"
                                img-alt="Img"
                                img-top>
                            <p class="card-number">
                                {{pic.title}}
                            </p>

                            <div slot="footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>

                        </b-card>
                        </transition-group>
                    </draggable>

                </b-card-group>

            </div>

            <b-btn variant="primary" href="/login">Back to login</b-btn>
        </b-jumbotron>


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
            pictures() {
                console.log(this.$store.state.pics);
                return this.$store.state.pics;
            },
            myList: {
                get() {
                    return this.$store.state.myList
                }
            }


        }
    }
</script>

<style scoped>

</style>