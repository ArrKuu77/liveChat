<template>
<h1>Sign Up</h1>
<form @submit.prevent="SignUp">
    <input type="text" placeholder="display name" v-model="DisplayName">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button>Sing Up</button>
</form>
</template>

<script>
import { ref } from '@vue/reactivity'
// import { getAuth} from 'firebase/auth'
import { getAuth,createUserWithEmailAndPassword} from 'firebase/auth'


export default {
    setup(){
        const DisplayName = ref("")
        const email = ref("")
        const password=ref("")

        const SignUp = () =>{
        createUserWithEmailAndPassword(getAuth,email.value,password.value)
        .then((response)=>{
             console.log(response.user)
        })
        .catch((error)=>{
            console.log(error.message)
        })
        // console.log(auth.user)
        }
        return{DisplayName,email,password,SignUp}
    }
}
</script>

<style>

</style>