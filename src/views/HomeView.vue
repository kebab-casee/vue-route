<template>
  <main class="flex justify-center items-center h-screen">
    <ul class="grid grid-cols-4 gap-2 justify-center">
      <CarCard v-for="car in cars" :key="car.id" :car="car" />
    </ul>
  </main>
</template>

<script setup>
import carsData from "../data/data.json";
import CarCard from "../components/CarCard.vue";

const cars = ref(carsData);
</script>

<style></style>
