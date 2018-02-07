<template>
    <div class="login">
        <h1>Login</h1>
        <input type="email" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <b-button variant="primary" @click="login">Zaloguj się</b-button>
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
                isAuthenticated: false,
                email: '',
                password: '',
                user: ''
            }
        },

        methods: {
            login() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    function (user) {
                        console.log(user.uid);
                        alert("Udało Ci się połączyć")
                    },
                    function (err) {
                        alert("Ojoj coś poszło nie tak " + err.message)
                    }
                )
            }
        }
    }
</script>

<style scoped>
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
        font-size: 13px;
    }


</style>