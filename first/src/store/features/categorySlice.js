import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseService from "../../services/service/baseService";


export const getCategory = createAsyncThunk(
  'category/getCategory', async() => {
    const response = await baseService.get('/products/categories')
    return response
  }
)

export const categorySlice = createSlice({
  name: 'categoty',
  initialState: {
    categories: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.categories = action.payload
    })
  }
})

export default categorySlice.reducer