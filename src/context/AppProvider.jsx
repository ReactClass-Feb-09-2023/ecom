import { CATEGORIES_API_URL, PRODUCTS_API_URL } from '../utils'
import { useEffect, useState } from 'react'

import AppContext from './AppContext'
import useFetch from '../hooks/useFetch'

function AppProvider({ children }) {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState('')
  const [cartList, setCartList] = useState([])

  const { data, error, loading } = useFetch(PRODUCTS_API_URL)

  const {
    data: categoriesData,
    error: categoriesError,
    loading: categoriesLoading
  } = useFetch(CATEGORIES_API_URL)

  useEffect(() => {
    setProducts(data)
  }, [data])

  useEffect(() => {
    // filtering the productsList
    if (!filter) {
      setProducts(data)
      return
    }
    setProducts(data.filter(product => product.category === filter))
  }, [filter])

  const value = {
    data,
    products,
    setProducts,
    error,
    loading,
    categoriesData,
    categoriesError,
    categoriesLoading,
    filter,
    setFilter,
    cartList,
    setCartList
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
