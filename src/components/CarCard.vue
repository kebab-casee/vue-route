<template>
  <RouterLink :to="`/car/${car.id}`">
    <li class="bg-amber-100 shadow-md shadow-black m-2 p-4">
      <h1 class="text-lg">{{ car.make }}</h1>
      <p><span class="text-green-400">$</span>{{ car.price }}</p>
    </li>
  </RouterLink>
</template>

<script setup>
defineProps({
  car: {
    type: Object,
    required: true,
  },
});
</script>
