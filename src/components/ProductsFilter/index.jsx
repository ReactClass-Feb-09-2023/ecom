import './ProductsFilter.styles.css'

import AppContext from '../../context/AppContext'
import ProductsCount from '../ProductsCount'
import { useContext } from 'react'

function ProductsFilter() {
  const { categoriesData, categoriesError, categoriesLoading, setFilter } =
    useContext(AppContext)

  const handleFilterChange = event => {
    const selectedCategory = event.target.value
    setFilter(selectedCategory)
  }

  if (categoriesLoading)
    return (
      <p>
        <small>loading ...</small>
      </p>
    )

  if (categoriesError)
    return (
      <p className="products__filter__category__error">
        <small>Products Filter is unavailable</small>
      </p>
    )

  return (
    <>
      <form className="products__filter__container">
        <ProductsCount />
        <h4>Filter By Group</h4>

        {categoriesData.map(category => (
          <div key={category}>
            <input
              type="radio"
              name="product-filter"
              id={category}
              value={category}
              onChange={handleFilterChange}
            />
            <label className="products__filter__category">{category}</label>
          </div>
        ))}
        <input
          className="products__filter__reset"
          type="reset"
          value="Reset Filter"
          onClick={() => setFilter('')}
        />
      </form>
    </>
  )
}

export default ProductsFilter
