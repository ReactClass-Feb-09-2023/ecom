import './ProductsCount.styles.css'

import AppContext from '../../context/AppContext'
import { useContext } from 'react'

function ProductsCount() {
  const { products } = useContext(AppContext)
  const productsCount = products.length
  return (
    <section className="productsCount__container">
      <p>{productsCount}</p>
      <p>Products Found</p>
    </section>
  )
}

export default ProductsCount
