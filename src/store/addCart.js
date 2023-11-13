import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[],
    totalQuantity:0
}
const addCartSlice = createSlice({
    name:'addCart',
    initialState:initialState,
    reducers:{
        initialAdd(state,action){
            state.items = action.payload.items
            state.totalQuantity = action.payload.totalQuantity
        },
        addToCart(state,action){
            const addItem = action.payload
            const isExisting = state.items.findIndex(item=>item.id == addItem.id)
            if(isExisting == -1){
                state.items.push({
                    id: addItem.id,
                    price: addItem.price,
                    quantity: 1,
                    totalPrice: addItem.price,
                    name: addItem.title
                })
            }else{
                const newQuantity = Number(state.items[isExisting].quantity) + 1
                const newTotal = Number(state.items[isExisting].totalPrice) + Number(state.items[isExisting].price)
                state.items[isExisting] = {...state.items[isExisting],quantity:newQuantity,totalPrice:newTotal}
            }
            state.totalQuantity+=1
        },
        removeFromCart(state,action){
            const isExisting = state.items.findIndex(item=>item.id == action.payload)
            if(state.items[isExisting].quantity == 1){
                state.items = state.items.filter(item=>item.id != action.payload)
            }else{
                const newQuantity = Number(state.items[isExisting].quantity) - 1
                const newTotal = Number(state.items[isExisting].totalPrice) - Number(state.items[isExisting].price)
                state.items[isExisting] = {...state.items[isExisting],quantity:newQuantity,totalPrice:newTotal}
            }
            state.totalQuantity-=1
        },

    }
})
export const addCartActions = addCartSlice.actions
export default addCartSlice.reducer