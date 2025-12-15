/// <reference types="vite/client" />

import type {ApiClient} from "@/shared/api/types";

declare module 'vue' {
    interface ComponentCustomProperties {
        $api: ApiClient
    }
}

export type LayoutKey = "default"

declare module "vue-router" {
    interface RouteMeta {
        layout?: LayoutKey
    }
}