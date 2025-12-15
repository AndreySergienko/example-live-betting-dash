import {createApiClient} from "@/shared/api/createApiClient.ts";

const baseUrl = import.meta.env.VITE_API_URL

export const baseApi = createApiClient(baseUrl)