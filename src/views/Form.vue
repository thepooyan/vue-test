<template>
  <main>
    <h1>
      Welcome to the form
    </h1>
    <p>
      Please enter your fake phone number:
    </p>
    <v-text-field label="Phone number"></v-text-field>
    <v-checkbox label="Checkbox"></v-checkbox>
    <v-otp-input></v-otp-input>
    <v-btn>
      Next
    </v-btn>
  </main>
</template>

<style scoped>
main {
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
