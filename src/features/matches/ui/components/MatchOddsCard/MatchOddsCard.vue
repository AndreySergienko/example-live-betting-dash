<script setup lang="ts">
import { ODDS_PRECISION } from "@features/matches/lib/constants"
import { formatDelta, formatOdd } from "@features/matches/lib/utils/formatOdd"
import { Trend } from "@features/matches/lib/types"

interface Props {
  coeff: number
  trend: Trend
  delta: number
}

defineProps<Props>()
</script>

<template>
  <section class="card">
    <div class="row">
      <div class="label">Коэффициент</div>

      <div
          class="value"
          :class="{
          'value--up': trend === Trend.Up,
          'value--down': trend === Trend.Down,
        }"
      >
        {{ formatOdd(coeff, ODDS_PRECISION) }}
      </div>
    </div>

    <div
        class="delta"
        :class="{
        'delta--up': trend === Trend.Up,
        'delta--down': trend === Trend.Down,
      }"
        aria-label="Delta"
    >
      {{ formatDelta(delta, ODDS_PRECISION) }}
    </div>

    <div class="meta">
      <span class="badge">Live</span>
      <span class="trend">
        {{
          trend === Trend.Up ? "Up" :
              trend === Trend.Down ? "Down" :
                  trend === Trend.Same ? "Same" : "—"
        }}
      </span>
    </div>
  </section>
</template>

<style scoped src="./MatchOddsCard.css"></style>
