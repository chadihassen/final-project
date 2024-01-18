import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice/userSlice'
import productSlice  from './userSlice/productslice'
import commandeSlice from './userSlice/commandeSlice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    product:productSlice,
    commande: commandeSlice
  },
})