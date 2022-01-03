import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const itemsCart = ({Cart}) => {
    const dataCart = JSON.parse(localStorage.getItem("Cart"))

    const displayItems = () => {
        if(Cart === []){
            if(dataCart){
                return dataCart
            } else {
                return null
            }
        } else {
            return Cart
        }
    }

    return displayItems
}
const maptoStatetoProps = (state) => ({
    Cart: state.Cart.product
})
export default connect(maptoStatetoProps, null)(itemsCart)
