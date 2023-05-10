import './Cart.Subtotal.styles.css'

import React, { useContext } from 'react'

import AppContext from '../../../context/AppContext'
import { Link } from 'react-router-dom'

function CartSubtotal() {
  const { cartList } = useContext(AppContext)
  const subtotal = () =>
    cartList.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)

  return (
    <div className="cart__subtotal__container">
      <div className="cart__subtotal__wrapper">
        <p>Subtotal:</p>
        <p>$ {subtotal()}</p>
      </div>
      <div>
        <Link className="cart__checkout__link" to="/checkout">
          CHECKOUT
        </Link>
      </div>
    </div>
  )
}

export default CartSubtotal
