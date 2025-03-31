<template>
  <div class="item flex flex-col p-4">
    <div class="flex flex-row items-start">
      <img :src="icono" alt="" class="mr-4" />
      <h3>{{ servicio }}</h3>
    </div>

    <p>{{ descripcion }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  icono: {
    type: String,
    required: true,
  },
  servicio: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
});

console.log();
</script>
