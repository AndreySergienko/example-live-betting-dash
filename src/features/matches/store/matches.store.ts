import { defineStore } from "pinia"
import { ref, readonly } from "vue"
import {MatchesRepository} from "@features/matches/api";
import type {MatchesModel} from "@features/matches/store/matches.model.ts";
import {Trend} from "@features/matches/lib/types.ts";

export const useMatchesStore = defineStore("matches", () => {
    const repository = new MatchesRepository()

    const matches = ref<MatchesModel[]>([])

    async function getAll(): Promise<void> {
        const data = await repository.getAll()
        if (data) {
            // Alert, данные не удалось загрузить
        }
        matches.value = data.map(match => ({
            ...match,
            trend: Trend.None,
            delta: 0,
        }))
    }

    function getById(id: number) {
        return matches.value.find((m) => m.id === id)
    }

    function updateCoeff(id: number, coeff: number) {
        const match = matches.value.find((m) => m.id === id)
        if (!match) return
        calculateDelta(match, coeff)
    }

    function calculateDelta(match: MatchesModel, coeff: number) {
        const old = match.coeff

        match.coeff = coeff

        if (coeff === old) {
            match.trend = Trend.Same
            match.delta = 0
            return
        }

        match.trend = coeff > old ? Trend.Up : Trend.Down
        match.delta = coeff - old
    }

    return {
        matches: readonly(matches),
        getAll,
        updateCoeff,
        getById,
    }
})