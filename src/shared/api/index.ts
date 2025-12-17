import {createApiClient} from "@/shared/api/createApiClient.ts";

const baseUrl = import.meta.env.VITE_BASE_URL

export const baseApi = createApiClient(baseUrl)