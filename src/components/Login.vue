<template>
<h1>Log In</h1>
<form @submit.prevent="LogIn">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button>Log In</button>
</form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        const email = ref("")
        const password=ref("")

        const LogIn = () =>{
            console.log(email.value,password.value)
        }
        return{email,password,LogIn}
    }
}
</script>

<style>

</style>