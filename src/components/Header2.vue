<template>
  <header class="bg-white shadow">
    <nav
      class="container mx-auto flex items-center justify-between p-4"
      aria-label="Main navigation"
    >
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2">
        <img src="./assets/vue.svg" alt="Site Logo" class="h-8 w-8" />
        <span class="font-bold text-lg">MySite</span>
      </RouterLink>

      <!-- Desktop Nav Links -->
      <ul class="hidden md:flex items-center gap-6">
        <li>
          <RouterLink to="/" class="hover:text-blue-600 cursor-pointer"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/about" class="hover:text-blue-600 cursor-pointer"
            >About</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/services" class="hover:text-blue-600 cursor-pointer"
            >Services</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/contact" class="hover:text-blue-600 cursor-pointer"
            >Contact</RouterLink
          >
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Open menu"
        @click="isOpen = !isOpen"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>

    <!-- Mobile Nav Links -->
    <div v-if="isOpen" class="md:hidden bg-white border-t">
      <ul class="flex flex-col p-4 gap-3">
        <li>
          <RouterLink to="/" class="hover:text-blue-600">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" class="hover:text-blue-600">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/services" class="hover:text-blue-600"
            >Services</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/contact" class="hover:text-blue-600"
            >Contact</RouterLink
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
const isOpen = ref(false);
</script>

<style></style>
