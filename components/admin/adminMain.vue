<template lang="pug">

.adminMainContainer
v-tabs(v-model="tab") 
    v-tab Config
    v-tab Posts
    v-tab Pages
    v-tab Pictures

LazyAdminConfig(v-if="tab === 0")
LazyAdminPost(v-if="tab === 1")


</template>
<script lang="ts" setup>
const tab = ref(0);
</script>
