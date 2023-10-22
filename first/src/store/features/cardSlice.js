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
      //state.products.push(action.payload)
      let index = -1
      state.products.map((item, key) => {
        if(item.id  === action.payload.id){
          index = key
        }
      })
      if(index === -1){
        state.products.push(action.payload)
      }else{
        if(state.products[index]['quantity']){
          state.products[index]['quantity'] += 1
        }else{
          state.products[index]['quantity'] = 2
        }
      }
    }
  }
})

export const {addToCard} = cardSlice.actions

export default cardSlice.reducer