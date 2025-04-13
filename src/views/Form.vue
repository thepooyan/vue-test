<script setup>
 const rules = {
  required: value => !!value || 'Field is required',
}
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const num = ref('');
const isChecked = ref(false);
const otp = ref([]);

const pageStates = ["num", "checkbox", "opt", "done"]
const state = ref("num")

const nextState = () => {
  let ind = pageStates.indexOf(state.value)
  if (pageStates[ind+1])
    state.value = pageStates[ind+1]
}

const done = () => {
  let data = {number: num.value, isChecked: isChecked.value, otp: otp.value}
  alert(`send to api: ${JSON.stringify(data)}`)
  router.push("/")
}
</script>

<template>
  <main>
    <h1>
      Welcome to the form
    </h1>
    <div v-if="state === 'num'">
      <p>
        Please enter your fake phone number:
      </p>
      <v-text-field v-model="num" label="Phone number" :rules="[rules.required]"></v-text-field>
    </div>
    <div v-if="state === 'checkbox'">
      <p>
        Are you a programmers?
      </p>
      <v-checkbox label="Yes i am" v-model="isChecked"></v-checkbox>
    </div>
    <div v-if="state === 'opt'">
      <p>
        Now put in this number: 123456
      </p>
      <v-otp-input v-model="otp" ></v-otp-input>
    </div>
    <v-btn @click="nextState" v-if="state !== 'done'">
      Next
    </v-btn>
    <div v-else>
      <p>
        Thank you! Your information is as follows: 
        <br/>
        Number: {{num}}
        <br/>
        Programmer: {{isChecked}}
        <br/>
        Opt: {{otp}}
      </p>
      <v-btn @click="done">
        Submit and done!
      </v-btn>
    </div>
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
