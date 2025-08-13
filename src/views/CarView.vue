<template>
  <main>
    <div
      class="container flex justify-center items-center h-screen flex-col gap-y-10"
    >
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
      <button
        @click="router.back()"
        class="p-2 bg-green-500 rounded-md text-white cursor-pointer"
      >
        <
        <span class="hover:underline"> Go back </span>
      </button>
    </div>
  </main>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import cars from "../data/data.json";
import { onBeforeMount } from "vue";

const car = ref(null);
const route = useRoute();
const router = useRouter();
const { id } = route.params;
onBeforeMount(() => {
  car.value = cars.find((c) => c.id === Number(id));
});
</script>
