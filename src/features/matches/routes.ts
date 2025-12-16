import type {RouteRecordRaw} from "vue-router";
import Index from "@features/matches/ui/pages/index.vue";

export const matchesRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'main',
        component: Index,
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/:id',
        name: 'detail',
        component: () => import('@features/matches/ui/pages/matches-detail.vue'),
        meta: {
            layout: 'default'
        }
    }
]