import { createSlice } from "@reduxjs/toolkit";

const initCart = {
    product: [],
    items: 0
}
const Cart = createSlice({
    
    name: "Cart",
    initialState: initCart,
    reducers: {
        ADDPRODUCT(state, action) {
            state.product.push(action.payload)
            state.items=state.product.length
        },
        REMOVEPRODUCT(state, action) {
            let result = state.product.filter(items => items.id !== action.payload)
            state.product = [...result]
            state.items=state.product.length
        },
        UPDATECART(state, action) {
            state.product=[...action.payload]
        },
        BUYPRODUCT(state, action) {
            
        }  
    }
})
export const {ADDPRODUCT, REMOVEPRODUCT, UPDATECART, BUYPRODUCT} = Cart.actions
export default Cart.reducer