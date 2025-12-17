<script setup lang="ts">
import SharedHeader from "@/shared/components/SharedHeader/SharedHeader.vue";
</script>

<template>
  <main class="bg">
    <SharedHeader />
    <slot />
  </main>
</template>

<style scoped lang="css">
.bg {
  background-color: #313230;
  min-height: 100vh;
}
</style>