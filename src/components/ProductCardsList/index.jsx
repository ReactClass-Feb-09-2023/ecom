import './ProductCardsList.styles.css'

import AppContext from '../../context/AppContext'
import ProductCard from '../ProductCard'
import { useContext } from 'react'

function ProductCardsList() {
  const { products, loading, error } = useContext(AppContext)
  return (
    <div>
      {error && <p>Something went wrong</p>}
      {loading && <p>loading...</p>}
      {!!products.length && (
        <ul className="product__cards__list__grid">
          {products.map(product => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ProductCardsList
