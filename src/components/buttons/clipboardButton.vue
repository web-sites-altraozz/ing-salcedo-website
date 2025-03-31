<script setup>
import { ref } from "vue";
const success = ref(false);

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

function clipboardHandler(text) {
  navigator.clipboard.writeText(text);
  success.value = true;
}

function mouseleaving() {
  success.value = false;
}
</script>

<template>
  <button
    class="button"
    @click="clipboardHandler(props.text)"
    @mouseleave="mouseleaving()"
  >
    <span
      :class="success ? 'mdi mdi-check-bold' : 'mdi mdi-content-copy'"
    ></span>
  </button>
</template>

<style lang="scss">
.button {
  padding-left: 1rem;
  padding-right: 1rem;
  transition: all 0.3s ease;
  color: #8080809f;

  &:hover {
    color: white;
  }
}
</style>
