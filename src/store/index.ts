import { configureStore } from '@reduxjs/toolkit'
import contatoSlice from './contato/index'
import filtroSlice from './filtro/index'
export const store = configureStore({
  reducer: {
    contato: contatoSlice,
    filtro: filtroSlice
  }
})

export type RootRedux = ReturnType<typeof store.getState>
