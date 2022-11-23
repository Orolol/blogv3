<template lang="pug">
.login-container   
    form(@submit='getLogin')
        v-text-field.login-input(label="Login" hide-details="auto" v-model='login')
        v-text-field.login-input(label="Password" hide-details="auto" v-model='password' :type="'password'" :error-messages="errorMessageCmp")
        v-btn.login-input(type='submit') Auth


</template>

<script lang="ts" setup>
const login = ref('');
const password = ref('');
const errorMessageCmp = ref('');

const store = useAuthStore();

const getLogin = async (e: SubmitEvent) => {
  e.preventDefault();
  errorMessageCmp.value = await store.getToken(login.value, password.value);
};
</script>
