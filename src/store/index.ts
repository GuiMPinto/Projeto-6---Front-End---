import { configureStore } from '@reduxjs/toolkit'

import { api } from '../services/api'

//reducers
import cartReducer from '../store/reducers/carrinhoCompras'

export const store = configureStore({
  reducer: {
    carroCompras: cartReducer,
    /*
      reducerPath é uma propriedade de api
      O api.reducer é uma propriedade do objeto api criado pelo createApi do RTK Query.
      Ele é gerado automaticamente, junto com todo o setup de endpoints e cache do RTK Query.
      O api.reducer serve para armazenar e gerenciar o estado das requisições feitas com o
      RTK Query dentro do Redux.

      Resumindo: api.reducer vem da instância do createApi. Ele é necessário para que
      o RTK Query possa controlar o estado relacionado às requisições API dentro do Redux.
    */
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
