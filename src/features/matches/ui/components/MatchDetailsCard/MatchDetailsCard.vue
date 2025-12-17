<script setup lang="ts">
interface Props {
  teamA: string
  teamB: string
  score: string
}
defineProps<Props>()
</script>

<template>
  <section class="card" aria-label="Match details">
    <div class="teams">
      <div class="team">{{ teamA }}</div>
      <div class="vs">vs</div>
      <div class="team">{{ teamB }}</div>
    </div>

    <div class="score" aria-label="Score">{{ score }}</div>
  </section>
</template>

<style scoped src="./MatchDetailsCard.css"></style>
