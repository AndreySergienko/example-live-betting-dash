<script setup lang="ts">
import {useMatchesStore} from "@features/matches/store/matches.store.ts";
import {useRoute} from "vue-router";
import MatchDetailsCard from "@features/matches/ui/components/MatchDetailsCard/MatchDetailsCard.vue";
import MatchOddsCard from "@features/matches/ui/components/MatchOddsCard/MatchOddsCard.vue";
import {computed} from "vue";
import type {MatchesModel} from "@features/matches/store/matches.model.ts";

const route = useRoute()
const matchesStore = useMatchesStore()

const match = computed<MatchesModel | undefined>(() => matchesStore.getById(Number(route.params.id)))

// Для получения конкретного по ссылке будем использовать getById с бэка.
</script>

<template>
  <div class="match-controller" v-if="match">
    <MatchDetailsCard
        :team-a="match.teamA"
        :team-b="match.teamB"
        :score="match.score"
    />

    <MatchOddsCard
        :coeff="match.coeff"
        :trend="match.trend"
        :delta="match.delta"
    />
  </div>

  <div v-else class="match-controller">
    <div class="card card--empty">
      Матч не найден
    </div>
  </div>
</template>

<style scoped src="./MatchController.css"></style>