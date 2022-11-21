<template lang="pug">
.login-container   
    form(@submit='getLogin')
        v-text-field.login-input(label="Login" hide-details="auto" v-model='login')
        v-text-field.login-input(label="Password" hide-details="auto" v-model='password')
        v-btn.login-input(type='submit') Auth

</template>

<script lang="ts" setup>

let login = ref('');
let password = ref('');
let errorMessageCmp = ref('');

const getLogin = (e : SubmitEvent) => {
    e.preventDefault();
    
    console.log(login.value, password.value)
}

</script>
