<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const goBack = () => {
    router.go(-1)
  }
</script>
<template>
    <v-btn @click="goBack">
      Back
    </v-btn>
</template>
<style scoped>
button {
  width: max-content;
}
</style>
