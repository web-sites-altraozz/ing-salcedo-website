<template>
  <button
    :type="type"
    class="border-solid border-2 border-yellow-500 w-max hover:bg-yellow-400 rounded-md py-2 px-4 text-yellow-500 hover:text-blue-950 font-medium hover:shadow-[0px_0px_20px_1px_rgba(255,255,0,0.3)] transition-all ease-in-out"
  >
    {{ name }}
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
});
</script>
