/// <reference types="vite/client" />
import type {ApiClient} from "@/shared/api/types";


interface ImportMetaEnv {
    readonly VITE_BASE_URL: string
    readonly VITE_SOCKET_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

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