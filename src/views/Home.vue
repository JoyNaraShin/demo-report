<script setup lang="ts">
// import { ref } from "vue";
import { fetchDemoData } from "/@/api/index";
// defineProps<{ msg: string }>();

const data = await fetchDemoData({ search_year: 2021 });

console.log(data);
</script>

<template></template>

<style scoped></style>
