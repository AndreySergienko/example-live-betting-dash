export async function safeJson<T>(response: Response): Promise<T> {
    try {
        return (await response.json()) as T
    } catch {
        return null as T
    }
}