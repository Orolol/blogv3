<template lang="pug">

.adminMainContainer
v-tabs(v-model="tab") 
    v-tab Config
    v-tab Posts
    v-tab Pages
    v-tab Pictures

LazyAdminConfig(v-if="tab === 0")


</template>
<script lang="ts" setup>
const tab = ref(0);
</script>
