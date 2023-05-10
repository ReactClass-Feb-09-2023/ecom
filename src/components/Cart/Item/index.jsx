/* eslint-disable react/prop-types */
import './Cart.Item.styles.css'

import React, { useContext, useState } from 'react'

import AppContext from '../../../context/AppContext'

function CartItem({ item }) {
  const [qty, setQty] = useState(1)
  const { id, title, price, image: src, rating } = item
  const { setCartList } = useContext(AppContext)

  const handleQtyDecrement = () => {
    if (qty === 1) {
      setCartList(prevState => prevState.filter(_item => _item.id !== id))
    }
    setQty(prevState => prevState - 1)
  }

  const handleRemoveItem = () => {
    setCartList(prevState => prevState.filter(_item => _item.id !== id))
  }
  return (
    <div className="cart__item__container">
      <div className="cart__item__close__icon" onClick={handleRemoveItem}>
        <img src="/close_icon.svg" />
      </div>
      <div className="cart__item__wrapper">
        <div className="cart__item__col">
          <img className="cart__item__image" src={src} />
        </div>
        <div className="cart__item__col">
          <p>{title}</p>
          <p>{rating?.rate}</p>
          <p>Quantity: {qty}</p>
        </div>
        <div className="cart__item__col">
          <p>$ {price}</p>
          <div className="cart__item__buttons_group">
            <button onClick={handleQtyDecrement}>-</button>
            <button onClick={() => setQty(prevState => prevState + 1)}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
