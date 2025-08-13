<template>
  <header class="bg-green-400 text-white text-lg p-4">
    <nav aria-label="Main navigation" class="flex items-center justify-between">
      <div class="logo">
        <h1>Logo</h1>
      </div>
      <ul class="flex justify-center items-center gap-2">
        <li class="cursor-pointer hover:underline">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="cursor-pointer hover:underline">
          <RouterLink to="/about">About</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup></script>

<style></style>
