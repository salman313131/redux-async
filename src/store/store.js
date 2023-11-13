import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cart'
import addCartSlice from "./addCart";

const store = configureStore({
    reducer:{cart:cartSlice,addCart:addCartSlice}
})

export default store