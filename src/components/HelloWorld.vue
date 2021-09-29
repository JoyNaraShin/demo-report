<script setup lang="ts">
// import { ref } from "vue";
import { fetchDemoData } from "/@/api/index";
defineProps<{ msg: string }>();

const data = await fetchDemoData({ search_year: 2021 });

console.log(data);
</script>

<template></template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
