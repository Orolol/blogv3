<template lang="pug">
.configContainer
    v-form(@submit='handleSubmit' v-if="store && store.config"  v-for="post : postType  in store.posts")
        v-text-field(label="Title" hide-details="auto" v-model='post.Title' @blur="handleSubmit")

    </template>

<script setup lang="ts">
const store = useAdminStore();

store.fetchPosts();

const handleSubmit = async (e: SubmitEvent) => {
  e.preventDefault();
  store.config && (await store.setConfig(store.config));
};
</script>
