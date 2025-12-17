<script setup lang="ts">
import { ODDS_PRECISION } from "@features/matches/lib/constants"
import { formatDelta, formatOdd } from "@features/matches/lib/utils/formatOdd"
import { Trend } from "@features/matches/lib/types"

interface Props {
  id: number
  coeff: number
  trend: Trend
  delta: number
}

defineProps<Props>()
</script>

<template>
  <div class="odds" role="cell">
    <span
        class="odds__chip"
        :class="{
        'odds__chip--up': trend === Trend.Up,
        'odds__chip--down': trend === Trend.Down,
      }"
    >
      {{ formatOdd(coeff, ODDS_PRECISION) }}
    </span>

    <span
        class="odds__delta"
        :class="{
        'odds__delta--up': trend === Trend.Up,
        'odds__delta--down': trend === Trend.Down,
      }"
    >
      {{ formatDelta(delta, ODDS_PRECISION) }}
    </span>
  </div>
</template>

<style scoped src="./OddsCell.css"></style>