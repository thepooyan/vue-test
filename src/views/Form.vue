<script setup>
import { ref } from 'vue';

const num = ref('');
const isChecked = ref(false);
const otpc = ref('');

const submit = () => {
  console.log(num.value);
  console.log(isChecked.value);
  console.log(optc.value);
};
</script>

<template>
  <form>
    <h1>
      Welcome to the form
    </h1>
    <p>
      Please enter your fake phone number:
    </p>
    <v-text-field v-model="num" label="Phone number"></v-text-field>
    <v-checkbox label="Checkbox" v-model="isChecked"></v-checkbox>
    <v-otp-input v-model="opt"></v-otp-input>
    <v-btn @click="submit">
      Next
    </v-btn>
  </form>
</template>

<style scoped>
form {
  border: .1em solid gray;
  width: 35em;
  margin: auto;
  border-radius: .2em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: .5em;
}
</style>
