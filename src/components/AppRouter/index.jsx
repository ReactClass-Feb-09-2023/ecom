import { Route, Routes } from 'react-router-dom'

import Cart from '../../pages/Cart'
import Checkout from '../../pages/Checkout'
import Home from '../../pages/Home'
import Layout from '../Layout'
import Product from '../../pages/Product'
import Products from '../../pages/Products'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path="product/:productId" element={<Product />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRouter
