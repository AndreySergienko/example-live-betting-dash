<script setup lang="ts">
import type { MatchesModel } from "@features/matches/store/matches.model.ts"
import OddsCell from "@features/matches/ui/components/OddsCell/OddsCell.vue";

interface Props {
  row: MatchesModel
}

defineProps<Props>()
</script>

<template>
  <div class="row" role="row">
    <div class="cell" role="cell">
      <span class="team">{{ row.teamA }}</span>
    </div>

    <div class="cell" role="cell">
      <span class="team">{{ row.teamB }}</span>
    </div>

    <div class="cell cell--center score" role="cell">
      {{ row.score }}
    </div>

    <div class="cell cell--right" role="cell">
      <OddsCell
          :id="row.id"
          :coeff="row.coeff"
          :trend="row.trend"
          :delta="row.delta"
      />
    </div>
  </div>
</template>

<style scoped src="./MatchesTableRow.css"></style>
