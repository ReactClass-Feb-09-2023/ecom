import './Cart.Header.styles.css'

import React, { useContext } from 'react'

import AppContext from '../../../context/AppContext'

function CartHeader() {
  const { cartList } = useContext(AppContext)
  return (
    <div className="cart__header__container">
      <div className="cart__header__icon">
        <img
          src={'shopping_cart_icon.svg'}
          className="material-symbols-outlined"
        />
        <p className="cart__header__pill">{cartList.length}</p>
      </div>
      <span className="cart__header__label">Cart</span>
    </div>
  )
}

export default CartHeader
