import "vue-router"

export type LayoutKey = "default"

declare module "vue-router" {
    interface RouteMeta {
        layout?: LayoutKey
    }
}