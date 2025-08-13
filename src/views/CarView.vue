<template>
  <main>
    <div class="container flex justify-center items-center h-screen">
      <div v-if="car">
        <div
          class="card bg-amber-200 p-9 shadow-2xl shadow-gray-400 rounded-2xl"
        >
          <h1 class="text-2xl">Car</h1>
          <p>Car Make: {{ car.make }}</p>
          <p>Price: ${{ car.price }}</p>
          <p>Body: {{ car.body }}</p>
          <p>Year: {{ car.year }}</p>
        </div>
      </div>
      <div v-else="car">
        <h1 class="text-lg font-bold">Car Not Found</h1>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import cars from "../data/data.json";
import { onBeforeMount } from "vue";

const car = ref(null);
const route = useRoute();
const { id } = route.params;
onBeforeMount(() => {
  car.value = cars.find((c) => c.id === Number(id));
});
</script>
