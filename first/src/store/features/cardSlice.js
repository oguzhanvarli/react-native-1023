import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number : 0,
  products : []
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers:{
    addToCard : (state,action) => {
      state.number += 1
      products.push(action.payload)
    }
  }
})

export const {addToCard} = cardSlice.actions

export default cardSlice.reducer