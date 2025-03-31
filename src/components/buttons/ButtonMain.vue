<template>
  <button
    :type="type"
    :disabled="disable"
    class="bg-yellow-500 w-max hover:bg-yellow-400 rounded-md py-2 px-4 text-blue-950 font-medium hover:shadow-[0px_0px_20px_1px_rgba(255,255,0,0.3)] transition-all ease-in-out"
  >
    {{ disable ? "Enviando..." : name }}
  </button>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  disable: {
    type: Boolean,
    default: false,
  },
});
</script>
