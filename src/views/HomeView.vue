<template>
  <main class="flex justify-center items-center h-screen flex-col gap-y-10">
    <div>
      <select @change="handleChange" v-model="make" name="filter">
        <option value="All">All</option>
        <option value="Chevrolet">Chevrolet</option>
        <option value="Porsche">Porsche</option>
        <option value="Audi">Audi</option>
      </select>
    </div>
    <ul class="grid grid-cols-4 gap-2 justify-center">
      <CarCard v-for="car in cars" :key="car.id" :car="car" />
    </ul>
  </main>
</template>

<script setup>
import carsData from "../data/data.json";
import CarCard from "../components/CarCard.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const cars = ref(carsData);
const make = ref("");
watch(make, (newMake) => {
  if (newMake === "" || newMake === "All") {
    cars.value = carsData;
  } else {
    cars.value = carsData.filter((car) => car.make === newMake);
  }
});

const handleChange = () => {
  router.push({
    query: {
      make: make.value,
    },
  });
};
</script>

<style></style>
