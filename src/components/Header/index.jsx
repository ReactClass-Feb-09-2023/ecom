import { useContext } from 'react'
import './Header.styles.css'

import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext'

function Header() {
  const { province, setProvince } = useContext(AppContext)
  const handleProvinceChange = event => {
    setProvince(event.target.value)
  }
  return (
    <nav className="header__container">
      <ul className="header__list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
      <select
        className="header__province"
        onChange={handleProvinceChange}
        value={province}
      >
        <option value="AB">AB</option>
        <option value="BC">BC</option>
        <option value="ON">ON</option>
      </select>
    </nav>
  )
}

export default Header
