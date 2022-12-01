<template lang="pug">

.configContainer
    v-form(@submit='handleSubmit' v-if="store && store.config" )
         v-text-field(label="Title" hide-details="auto" v-model='store.config.Title' @blur="handleSubmit")
         v-text-field(label="Meta" hide-details="auto" v-model='store.config.Meta')
         v-checkbox(label="Grid" v-model='store.config.Grid')
         v-checkbox(label="Comments" v-model='store.config.Comments')




</template>

<script setup lang="ts">
const store = useAdminStore();

store.getConfig();

const handleSubmit = async (e: SubmitEvent) => {
  e.preventDefault();
  store.config && (await store.setConfig(store.config));
};
</script>
