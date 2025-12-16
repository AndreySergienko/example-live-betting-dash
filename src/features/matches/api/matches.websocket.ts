interface DashboardWebsocketOptions {
    url: string;
    autoReconnect?: boolean;
    reconnectMs?: number;
}

export function createDashboardWs({ url, autoReconnect, reconnectMs }: DashboardWebsocketOptions) {
    let ws: WebSocket | null = null
    let timer: number | null = null
    let shouldReconnect = autoReconnect ?? true

    function connect(onMessage: Function) {
        ws = new WebSocket(url)
        ws.onmessage = (ev) => {
            try {
                onMessage(JSON.parse(ev.data))
            } catch {
                // если сервер шлёт не-JSON, можно игнорировать или логировать
            }
        }

        ws.onclose = () => {
            ws = null
            if (shouldReconnect) {
                timer = window.setTimeout(connect, reconnectMs ?? 1000)
            }
        }
    }
    function close() {
        shouldReconnect = false
        if (timer) window.clearTimeout(timer)
        timer = null
        ws?.close()
        ws = null
    }

    return {
        connect,
        close
    }
}