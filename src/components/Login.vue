<template>
    <div class="login">
        <img src="../assets/lpp.jpg">
        <h1>Login</h1>
        <input type="email" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <b-button variant="primary" @click.prevent="login">Zaloguj się</b-button>
        <p>Nie masz konta?
            <router-link to="/signup">Zapisz się</router-link>
        </p>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: "login",
        data: function () {
            return {
                status: false,
                email: '',
                password: '',
                user: null
            }
        },

        methods: {
            login() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                            this.status = true;
                            if(this.status){
                                this.$router.replace('images');
                            }


                    },
                    (err) => {
                        this.status = false;
                        console.log(err);
                        alert("Ojoj coś poszło nie tak ")
                    }
                )


            }

        }
    }
</script>

<style scoped>
    img {
        margin: 80px 0;
    }

    .login {
        margin-top: 40px;
    }

    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }

    button {
        margin-top: 20px;
        width: 10%;
        cursor: pointer;
    }

    p {
        margin-top: 40px;
        font-size: 16px;
    }


</style>