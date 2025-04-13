<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
    <h1>
      Welcome to my test project
    </h1>
      <RouterLink to="/form">Go to multi step form!</RouterLink>
  </main>
</template>

<style scoped>
main {
  margin: auto;
}
</style>
