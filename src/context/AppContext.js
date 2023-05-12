import { createContext } from 'react'

const initialState = {
  products: [],
  setProduct: () => {},
  data: [],
  error: null,
  loading: false,
  categoriesData: [],
  categoriesError: null,
  categoriesLoading: false,
  filter: '',
  setFilter: () => {},
  cartList: [],
  setCartList: () => {},
  province: 'ON',
  setProvince: () => {}
}

const AppContext = createContext(initialState)

export default AppContext
