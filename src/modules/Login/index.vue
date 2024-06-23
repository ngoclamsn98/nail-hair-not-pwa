<template>
  <div>
    <input
      class="border border-gray-100"
      placeholder="username"
      v-model="user.username"
    />
    <input
      class="border border-gray-100"
      placeholder="password"
      type="password"
      v-model="user.password"
    />
    <button @click="submitForm">submit</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const user = ref({
  username: "",
  password: "",
});
const submitForm = (e) => {
  console.log(user);
  e.preventDefault();
};
</script>