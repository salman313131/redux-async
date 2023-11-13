import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVisible: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState:initialState,
    reducers:{
        view(state){
            state.isVisible=!state.isVisible
        }
    }
})
export const cartActions = cartSlice.actions
export default cartSlice.reducer