<template lang="pug">
    .postForm
        v-form(@submit='handleSubmit')
          
</template>

<script setup lang="ts">
import { postType } from '~~/types/api';

const props = defineProps<{
  post: postType;
}>();

const handleSubmit = async (e: SubmitEvent) => {
  e.preventDefault();
};
</script>
