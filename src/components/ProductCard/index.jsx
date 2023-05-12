/* eslint-disable react/prop-types */
import './ProductCard.styles.css'

import AppContext from '../../context/AppContext'
import { CURRENCY_SIGN } from '../../utils'
import { useContext } from 'react'

function ProductCard({ product }) {
  const priceSegments = product.price.toString().split('.')
  const { cartList, setCartList } = useContext(AppContext)
  const isProductInCartList = !!cartList.filter(item => item.id === product.id)
    .length

  const updateCart = () => {
    if (isProductInCartList) {
      setCartList(prevState => prevState.filter(item => item.id !== product.id))
      return
    }
    // introduce the qty property to the product object
    product.qty = 1
    setCartList(prevState => [...prevState, product])
  }

  return (
    <div className="product__card__container">
      <img
        className="product__card__image"
        src={product.image}
        alt="clothing image"
      />
      <p className="product__card__title">{product.title}</p>
      <div className="product__card__divider" />
      <p className="product__card__price">
        <span className="product__card__currency">{CURRENCY_SIGN}</span>
        {priceSegments[0]}
        <span className="product__card__price_fraction">
          {'.'}
          {priceSegments[1]}
        </span>
      </p>
      <p className="product__card__rating">Rating: {product.rating.rate}</p>
      <button
        className="product__card__add__to__cart"
        onClick={updateCart}
        style={{
          background: isProductInCartList ? 'orange' : undefined
        }}
      >
        {isProductInCartList ? 'Remove frm Cart' : 'Add to Cart'}
      </button>
    </div>
  )
}

export default ProductCard
