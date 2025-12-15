<script setup lang="ts">
import { computed } from "vue"
import {useRoute} from "vue-router";

import DefaultLayout from "@/layouts/default.vue"
const route = useRoute()

const layouts = {
  default: DefaultLayout,
} as const

const layout = computed(() => {
  const key = route.meta.layout ?? "default"
  return layouts[key]
})
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>