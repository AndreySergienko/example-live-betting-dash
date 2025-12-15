import { baseApi } from '@/shared/api'
import type {DashboardEntity} from "@/features/dashboard/api/dashboard.entity.ts";

export class DashboardRepository {
    private url = '/dashboard/'

    // private api: ApiClient - можно в будущем сделать инициаилизацию как плагин DI
    constructor() {}

    public getAll(): Promise<DashboardEntity[]> {
        return baseApi<DashboardEntity[]>(this.url, {
            method: 'GET',
        })
    }
}