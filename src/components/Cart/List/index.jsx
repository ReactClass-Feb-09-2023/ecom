import './Cart.List.styles.css'

import React, { useContext } from 'react'

import AppContext from '../../../context/AppContext'
import CartItem from '../Item'

function CartList() {
  const { cartList } = useContext(AppContext)
  return (
    <div className="cart__list__container">
      {cartList.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default CartList
