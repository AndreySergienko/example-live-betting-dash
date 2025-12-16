<script setup lang="ts">
import { computed } from "vue"

const PROJECT_NAME = "dashboard-live-betting"

const parts = computed<{ a: string; b: string; c: string }>(() => {
  const [a = "", b = "", c = ""] = PROJECT_NAME.split("-")
  return { a, b, c }
})
</script>

<template>
  <div class="logo" aria-label="Project logo">

    <div class="logo__mark" aria-hidden="true">
      <span class="dot dot--green"></span>
      <span class="dot dot--red"></span>
      <span class="dot dot--gray"></span>
    </div>

    <div class="logo__text">
      <div class="logo__name">
        <span class="t t--primary">{{ parts.a }}</span>
        <span class="sep">-</span>
        <span class="t t--accent">{{ parts.b }}</span>
        <span class="sep">-</span>
        <span class="t t--muted">{{ parts.c }}</span>
      </div>
      <div class="logo__tagline">Live odds dashboard</div>
    </div>
  </div>
</template>

<style scoped src="./SharedLogo.css"></style>