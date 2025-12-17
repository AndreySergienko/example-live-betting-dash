import type { App } from "vue"
import { useMatchesStore } from "@features/matches/store/matches.store"
import { createWs } from "@/shared/api/createWs"
import type { WsResponseCell } from "@features/matches/lib/types"
import type {WebsocketOptions} from "@/shared/api/types";

function isWsResponseCell(message: unknown): message is WsResponseCell {
    return (
        typeof message === "object" &&
        message !== null &&
        "id" in message &&
        "coeff" in message &&
        typeof (message as any).id === "number" &&
        typeof (message as any).coeff === "number"
    )
}

export function createMatchesRealtimePlugin(options: WebsocketOptions) {
    return {
        install(app: App) {
            const store = useMatchesStore()

            const ws = createWs({
                url: options.url,
                autoReconnect: options.autoReconnect ?? true,
                reconnectMs: options.reconnectMs ?? 1000,
            })

            ws.connect((message: unknown) => {
                if (isWsResponseCell(message)) {
                    store.updateCoeff(message.id, message.coeff)
                }
            })

            window.addEventListener("beforeunload", () => ws.close())
        },
    }
}
