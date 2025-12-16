<script setup lang="ts">
import SharedLogo from "@/shared/components/SharedLogo/SharedLogo.vue";
</script>

<template>
  <header class="header">
    <div class="header__inner container">
      <RouterLink class="header__link" to="/"><SharedLogo /></RouterLink>
    </div>
  </header>
</template>

<style scoped src="./SharedHeader.css"></style>