<template>
  <UContainer
    class="bg-slate-950 flex flex-col justify-center items-center h-screen"
    @click="counter++"
  >
    <div class="text-[14rem] text-white">{{ counter }}</div>
  </UContainer>
</template>
<script setup>
const counter = ref(0);
</script>
<style scoped></style>
