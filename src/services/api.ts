// Biblioteoca do Redux Toolkit Query (RTK Query)
/*
    createApi:  método do Redux Toolkit que serve para centralizar e
                definir todas as configurações de endpoints, métodos de
      requisição (GET, POST, etc.), tratamento de cache e gerenciamento
      automático do estado das chamadas à API da sua aplicação.
*/
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Componentes
import { Restaurante } from '../models/restaurante'

// Api é o objeto exportado que reúne todos os endpoints, configurações
// e ferramentas para consumir APIs no seu projeto React de forma
// integrada com Redux. Você importa esse objeto para configurar a store
// e também para usar hooks automáticos gerados para cada endpoint.

// Tipo que receberá a Api para o uso de POST
type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    adress: {
      description: string
      city: string
      zipCode: string
      number: string
      complement: string
    }
  } // delivery
  payment: {
    card: {
      name: string
      number: string
      code: string
      expires: {
        month: string
        year: string
      }
    }
  } //payment
} //PurchasePayload
/*
{
  "products": [
    {
      "id": 1,
      "price": 0
    }
  ],
  "delivery": {
    "receiver": "string",
    "address": {
      "description": "string",
      "city": "string",
      "zipCode": "string",
      "number": 12,
      "complement": "string"
    }
  },
  "payment": {
    "card": {
      "name": "string",
      "number": "string",
      "code": 123,
      "expires": {
        "month": 12,
        "year": 1234
      }
    }
  }
}

*/

export const api = createApi({
  reducerPath: 'api',
  /* baseQuery: a propriedade baseQuery serve como a função responsável
                por fazer as requisições à API para todos os endpoints
        definidos no serviço. O uso mais comum é realmente o
        fetchBaseQuery, que simplifica a configuração para REST APIs.

  */
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/restaurantes'
  }),
  /*
    builder:  é um construtor de endpoints que serve para criar e
              configurar os endpoints que seu servidor vai expor para
      consultar ou modificar dados na API. O builder é um objeto
      fornecido automaticamente pelo RTK Query dentro da função
      endpoints. Com ele, você define cada endpoint, seja para buscar
      dados (queries) ou alterar dados (mutations). Cada método
      builder.query ou builder.mutation constrói um endpoint específico.
      O construtor de endpoints é a função builder responsável por criar,
      configurar e organizar cada endpoint de API dentro do seu servidor
      no Redux Toolkit Query.
  */
  // endpoints = requisições
  endpoints: (builder) => ({
    /*
    getRestaurants e getRestaurantById são funções, do tipo endpoint
    definida dentro do slice de API criado pelo Redux Toolkit Query.
    Estas funções identifica as suas respectivas consultas que serão
    usadas para buscar dados da API.
  */
    getRestaurants: builder.query<Restaurante[], void>({
      query: () => ''
    }),

    getRestaurantById: builder.query<Restaurante, string | number>({
      query: (id) => `/${id}`
    }),

    // metodo POST
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body: body
      })
    })
  })
})
/*
  useGetRestaurantsQuery e useGetRestaurantByIdQuery: são os hooks
  gerado automaticos de dos endpoints getRestaurants e getRestaurantById.
*/
export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  usePurchaseMutation
} = api
