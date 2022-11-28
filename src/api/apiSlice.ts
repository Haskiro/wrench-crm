import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest",
        prepareHeaders: (headers) => {
            const apiKey = "7a2bb29ca95c45b30a03c6d73d9d34bc3de6212a";

            headers.set('Authorization', `Token ${apiKey}`)
        }
    }),
    endpoints: builder => ({
        getAddressesByString: builder.query({
            query: query => ({
                url: "/address",
                method: "POST",
                body: { query }
            })
        })
    })
})

// Export the auto-generated hook for the `getAddresses` query endpoint
export const { useGetAddressesByStringQuery } = apiSlice



