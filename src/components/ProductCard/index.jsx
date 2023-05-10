import './ProductCard.styles.css'

import { CURRENCY_SIGN } from '../../utils'

function ProductCard({ product }) {
  const priceSegments = product.price.toString().split('.')
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
      <button className="product__card__add__to__cart">Add to Cart</button>
    </div>
  )
}

export default ProductCard
