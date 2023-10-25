import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/cardSlice";
import userReducer from "./features/userSlice";
import categoryReducer from "./features/categorySlice";


export default configureStore({
  reducer:{
    card : cardReducer,
    user : userReducer,
    category : categoryReducer
  }
})