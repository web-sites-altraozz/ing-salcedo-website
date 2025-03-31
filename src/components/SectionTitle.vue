<template>
  <h2 class="font-bold text-3xl mb-8 text-center">
    {{ name }}
  </h2>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
    default: "Undefined",
  },
});

console.log();
</script>
