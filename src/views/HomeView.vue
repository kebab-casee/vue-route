<template>
  <main class="flex justify-center items-center h-screen">
    <ul class="flex flex-row">
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
