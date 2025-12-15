import type { ApiClient, ApiError, RequestOptions } from './types'
import { safeJson } from './safeJson'

export function createApiClient(baseUrl = ''): ApiClient {
    return async function api<T>(url: string, options: RequestOptions = {}) {
        const body = options.body ? JSON.stringify(options.body) : null
        const response = await fetch(baseUrl + url, {
            ...options,
            headers: options.headers,
            body,
        })

        const data = await safeJson<T>(response)

        if (!response.ok) {
            throw { status: response.status, message: response.statusText, data } satisfies ApiError
        }

        return data
    }
}
