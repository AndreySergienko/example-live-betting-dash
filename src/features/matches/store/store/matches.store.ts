import { defineStore } from "pinia"
import { ref, readonly } from "vue"
import {MatchesRepository} from "@features/matches/api";
import type {MatchesModel} from "@features/matches/store/store/matches.model.ts";

export const useDashboardStore = defineStore("dashboard", () => {
    const repository = new MatchesRepository()

    const elements = ref<MatchesModel[]>([])

    async function getAll(): Promise<void> {
        const data = await repository.getAll()
        if (data) {
            // Alert, данные не удалось загрузить
        }
        elements.value = data
    }

    return {
        getAll,
        elements: readonly(elements),
    }
})