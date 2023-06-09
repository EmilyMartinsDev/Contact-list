import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export type Contato = {
  name: string
  email: string
  tel: string
  id: number
}

type ListContato = {
  items: Contato[]
}

const initialState: ListContato = {
  items: [
    {
      name: 'emily',
      email: 'emilycaroline@teste',
      id: 1,
      tel: '1930494'
    },
    {
      name: 'emily',
      email: 'emilycaroline@teste',
      id: 2,
      tel: '1930494'
    },
    {
      name: 'emily',
      email: 'emilycaroline@teste',
      id: 3,
      tel: '1930494'
    }
  ]
}
const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      if (state.items.find((c) => c.name === action.payload.name)) {
        alert('Há um usuario com esse mesmo nome')
      } else {
        const ultimo = state.items[state.items.length - 1]
        state.items.push({
          id: ultimo ? ultimo.id + 1 : 1,
          name: action.payload.name,
          email: action.payload.email,
          tel: action.payload.tel
        })
      }
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.items.findIndex((c) => c.id === action.payload.id)
      state.items[index] = {
        email: action.payload.email,
        name: action.payload.name,
        tel: action.payload.tel,
        id: action.payload.id
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((c) => c.id !== action.payload)
    }
  }
})

export const { cadastrar, editar, remover } = contatoSlice.actions
export default contatoSlice.reducer
