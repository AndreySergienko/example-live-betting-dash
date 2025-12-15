import type {DashboardEntity} from "@/features/dashboard/api/dashboard.entity.ts";

export class DashboardRepository {
    private url: string;

    // Сюда можно передавать тип domen или инстанас api, например
    // 1. authApi - где автоматически прикрепляется один набор заголовков(например с Authorization)
    // 2. baseApi - публичный инстанс апи
    constructor() {
        this.url = '/dashboard/'
    }

    public async getAll(): Promise<DashboardEntity[]> {
        return fetch(this.url, {
            method: 'GET',
        }).then(response => response.json())
    }
}