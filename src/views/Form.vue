<script setup lang="ts">
  import FormCard from "../components/FormCard.vue"
  import Back from "../components/Back.vue"
</script>
<template>
  <div>
    <FormCard/>
    <Back/>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
}
</style>
