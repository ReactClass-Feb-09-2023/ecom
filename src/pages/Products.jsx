import ProductCardsList from '../components/ProductCardsList'
import ProductsFilter from '../components/ProductsFilter'
function Products() {
  return (
    <div className="pages__products">
      <ProductsFilter />
      <ProductCardsList />
    </div>
  )
}

export default Products
