import { createSlice } from '@reduxjs/toolkit'

type CheckoutState = {
  isOpen: boolean
}

const initialState: CheckoutState = {
  isOpen: false
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    openForm: (state) => {
      state.isOpen = true
    },
    closeForm: (state) => {
      state.isOpen = false
    }
  }
})

export const { openForm, closeForm } = checkoutSlice.actions
export default checkoutSlice.reducer
