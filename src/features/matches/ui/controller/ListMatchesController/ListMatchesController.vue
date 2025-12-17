<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router";

import MatchesTable from "@features/matches/ui/components/MatchesTable/MatchesTable.vue";
import {useMatchesStore} from "@features/matches/store/matches.store.ts";
import type {MatchesModel} from "@features/matches/store/matches.model.ts";
import {onMounted} from "vue";

const router = useRouter()
const matchesStore = useMatchesStore()
const { matches } = storeToRefs(matchesStore)

onMounted(matchesStore.getAll)

function openDetails(row: MatchesModel) {
  router.push({ name: "match-detail", params: { id: row.id } })
}
</script>

<template>
  <div class="list-matches-controller">
    <MatchesTable :rows="matches" @to-detail="openDetails" />
  </div>
</template>

<style scoped src="./ListMatchesController.css"></style>