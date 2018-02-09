<template>
    <div class="sign-up">
        <img src="../assets/lpp.jpg">
        <h1>Utwórz nowe konto</h1>
        <input type="email" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <b-button variant="success" @click="signUp">Zapisz się</b-button>
        <span>albo cofnij się to <router-link to="/login">logowania</router-link> </span>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: "signUp",
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            signUp() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    function (user) {
                        alert("Twoje konto zostało utworzone");
                    },
                    function (error) {
                        alert("ups " + error.message)
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

    .sign-up {
        margin-top: 40px;
    }

    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }

    button {
        margin-top: 10px;
        width: 10%;
        cursor: pointer;
    }

    span {
        display: block;
        margin-top: 20px;
        font-size: 12px;
    }

    span {
        margin-top: 40px;
        font-size: 16px;
    }
</style>