// Redux ToolKit
// createSlice: uma função que recebe um objeto
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PratoState = {
  items: Prato[]
  isOpen: boolean // determina se o Cart estara aberto
}

const initialState: PratoState = {
  items: [], //array onde ficam armazenados os ojetos do tipo Prato
  isOpen: false
}

//cartSlice : um pedaço de um estado
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // um objeto que possui as funções que vão alterar este o carrinho de compras
  // estas funções podem ser consideradas como actions, que serão disparadas
  // pelos dispatchs
  reducers: {
    // função de adicionar um item ao carrinho de compras.
    add: (state, action: PayloadAction<Prato>) => {
      const prato = state.items.find((items) => items.id === action.payload.id)

      if (prato === undefined) {
        state.items.push(action.payload) //Inseri os objetos do Tipo Prato em items
      } else {
        alert('O Jogo já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, clear } = cartSlice.actions
export default cartSlice.reducer
