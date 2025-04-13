<script setup lang="ts">
  import Header from "./components/Header.vue"
  import Footer from "./components/Footer.vue"
</script>

<template>
  <div>
    <Header/>
    <RouterView />
    <Footer/>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100dvh;
}
</style>
