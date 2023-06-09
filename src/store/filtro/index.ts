import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Filtro = {
  pesquisa?: string
}
const initialState: Filtro = {
  pesquisa: ''
}
const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    pesquisa: (state, action: PayloadAction<string>) => {
      state.pesquisa = action.payload
    }
  }
})
export default filtroSlice.reducer
export const { pesquisa } = filtroSlice.actions
