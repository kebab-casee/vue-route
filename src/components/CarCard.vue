<template>
  <li class="bg-amber-100 shadow-md shadow-black m-2 p-4">
    <h1>{{ car.make }}</h1>
    <p>${{ car.price }}</p>
  </li>
</template>

<script setup>
defineProps({
  car: {
    type: Object,
    required: true,
  },
});
</script>
