import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { tipoRestaurante } from '../../pages/Perfil'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<tipoRestaurante[], void>({
      query: () => ''
    }),

    getRestaurantById: builder.query<tipoRestaurante, string | number>({
      query: (id) => `/${id}`
    })
  })
})
export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery } = api
