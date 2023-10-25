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
        //state.products.push(action.payload)
        let item = {...action.payload, quantity: 1}
        state.products.push(item)
      }else{
        if(state.products[index]['quantity']){
          state.products[index]['quantity'] += 1
        }else{
          state.products[index]['quantity'] = 2
        }
      }
    },
    incrementQuantity : (state,action) => {
      state.products.map((item)=> {
        if(item.id === action.payload.id){
          if(item.quantity < item.stock){
            item['quantity'] += 1
          }
        }
      })
    },
    decrementQuantity : (state,action) => {
      state.products.map((item) => {
        if(item.id === action.payload.id)
          item.quantity > 1 ? item['quantity'] -= 1 : null
      })
    },
    clearCard : (state) => {
      state.products = [],
      state.number = 0
    }
  }
})

export const {addToCard, incrementQuantity, decrementQuantity, clearCard} = cardSlice.actions

export default cardSlice.reducer