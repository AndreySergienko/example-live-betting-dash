export type ApiError = {
    status: number
    message: string
    data?: unknown
}

export type RequestOptions = Omit<RequestInit, 'body'> & {
    body?: BodyInit
}

export type ApiClient = <T>(url: string, options?: RequestOptions) => Promise<T>