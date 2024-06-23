<template>
  <router-view />
  <vue3-confirm-dialog />
</template>

<script setup>
import { getCurrentInstance, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();

const instance = getCurrentInstance();
const app = instance.appContext.app;
</script>