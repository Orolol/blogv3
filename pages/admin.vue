<template lang="pug">

client-only
    .adminContainer
        .login(v-if="!adminStore.isAdmin")
            login
        .adminPage(v-else)
            LazyAdminMain
        
</template>

<script setup lang="ts">
const adminStore = useAuthStore();

if (process.client) {
  const localApi = window.localStorage.getItem("blog-api");
  if (localApi) {
    adminStore.token = localApi;
    adminStore.isAdmin = true;
  }
}
</script>
