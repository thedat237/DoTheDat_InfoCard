import { createSlice } from "@reduxjs/toolkit";

const initCart = {
    product: [],
    items: 0,
    cart:[]
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
            let data=JSON.parse(localStorage.getItem("Cart"))
            if(data.length === 1) {
                localStorage.removeItem("Cart")
            } else {
                localStorage.setItem("Cart", JSON.stringify(result)) 
            }
        },
        UPDATECART(state, action) {
            state.product=[...action.payload]
            state.items=action.payload.length
            console.log("kkk", state.product);
        },
        BUYPRODUCT(state, action) {
            let result = []
            console.log("kk",action.payload);
            state.product.map(item => {
                for (let element of action.payload) {
                    if(item.id === element.id) {
                        result.push(element)
                    }
                }
            })
            console.log("result redux", result);
            state.cart = [...result]
            // state.items=result.length

        }
    }
})
export const {ADDPRODUCT, REMOVEPRODUCT, UPDATECART, BUYPRODUCT} = Cart.actions
export default Cart.reducer