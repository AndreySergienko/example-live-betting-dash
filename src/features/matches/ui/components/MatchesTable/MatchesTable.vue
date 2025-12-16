<script setup lang="ts">
export interface MatchRow {
  id: number
  teamA: string
  teamB: string
  score: string
  coeff: number
  newCoeff: number
}

defineProps<{
  rows: MatchRow[]
}>()

</script>

<template>
  <div class="table">
    <div class="table__head">
      <div>Team A</div>
      <div>Team B</div>
      <div>Score</div>
      <div>Coeff</div>
      <div>New coeff</div>
    </div>

    <div
        v-for="row in rows"
        :key="row.id"
        class="table__row"
    >
      <div>{{ row.teamA }}</div>
      <div>{{ row.teamB }}</div>
      <div class="score">{{ row.score }}</div>
      <div>{{ row.coeff.toFixed(2) }}</div>

      <div
          class="new"
          :class="{
          up: row.newCoeff > row.coeff,
          down: row.newCoeff < row.coeff
        }"
      >
        {{ row.newCoeff.toFixed(2) }}
      </div>
    </div>
  </div>
</template>

<style scoped src="SharedTable.css"></style>