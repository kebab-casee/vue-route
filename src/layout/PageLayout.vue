<template>
  <Navbar />
  <main class="">
    <slot></slot>
  </main>
</template>

<script setup>
import Navbar from "../components/Header.vue";
</script>
