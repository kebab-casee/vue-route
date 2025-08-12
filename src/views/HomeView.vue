<template>
  <Navbar />
  <main>
    <div class="container">
      <div class="cards">
        <div class="card">
          <ul>
            <li v-for="car in carsData" :key="car.id">
              <h1 class="text-lg font-bold">{{ car.make }}</h1>
              <p>${{ car.price }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Navbar from "../components/Header.vue";
import carsData from "../data/data.json";
</script>

<style></style>
