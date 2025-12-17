<script setup lang="ts">
import type { MatchesModel } from "@features/matches/store/matches.model.ts"
import {MATCHES_TABLE_HEADERS} from "@features/matches/lib/constants.ts";
import MatchesTableRow from "@features/matches/ui/components/MatchesTableRow/MatchesTableRow.vue";

interface Props { rows?: Readonly<MatchesModel[]> }
interface Emits {
  (e: 'to-detail', row: MatchesModel): void
}

defineEmits<Emits>()
withDefaults(defineProps<Props>(), {
  rows: () => [],
})
</script>

<template>
  <section class="table" aria-label="Matches">
    <div class="head" role="row">
      <div class="th" role="columnheader">{{ MATCHES_TABLE_HEADERS.TEAM_A }}</div>
      <div class="th" role="columnheader">{{ MATCHES_TABLE_HEADERS.TEAM_B }}</div>
      <div class="th th--center" role="columnheader">{{ MATCHES_TABLE_HEADERS.SCORE }}</div>
      <div class="th th--right" role="columnheader">{{ MATCHES_TABLE_HEADERS.ODDS }}</div>
    </div>

    <MatchesTableRow v-for="row in rows" :key="row.id" :row="row" @click="$emit('to-detail', row)" />
  </section>
</template>

<style scoped src="./MatchesTable.css"></style>