import { baseApi } from '@/shared/api'
import type {MatchesEntity} from "@features/matches/api/matches.entity.ts";

export class MatchesRepository {
    private url = '/dashboard/'

    // private api: ApiClient - можно в будущем сделать инициаилизацию как плагин DI
    constructor() {}

    public getAll(): Promise<MatchesEntity[]> {
        return baseApi<MatchesEntity[]>(this.url, {
            method: 'GET',
        })
    }
}