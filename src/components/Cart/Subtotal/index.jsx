import './Cart.Subtotal.styles.css'

import React, { useContext, useState, useEffect } from 'react'

import AppContext from '../../../context/AppContext'
import { Link } from 'react-router-dom'
import { taxRateForProvinceMap } from '../../../utils'

function CartSubtotal() {
  const { cartList, province } = useContext(AppContext)
  const [cost, setCost] = useState({
    subtotal: 0,
    gst: function () {
      return 0
    },
    total: function () {
      return 0
    }
  })

  useEffect(() => {
    setCost({
      subtotal: cartList.reduce((acc, curr) => acc + curr.qty * curr.price, 0),
      gst: function () {
        return taxRateForProvinceMap.get(province) * this.subtotal
      },
      total: function () {
        return this.gst() + this.subtotal
      }
    })
  }, [cartList, province])

  return (
    <div className="cart__subtotal__container">
      <div className="cart__subtotal__wrapper">
        <p>Subtotal:</p>
        <p>$ {cost.subtotal?.toFixed(2)}</p>
      </div>
      <div className="cart__subtotal__wrapper">
        <p>GST/HST:</p>
        <p>
          $ {(taxRateForProvinceMap.get(province) * cost.subtotal)?.toFixed(2)}
        </p>
      </div>
      <div className="cart__subtotal__wrapper">
        <p>Total:</p>
        <p>$ {cost.total()?.toFixed(2)}</p>
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
