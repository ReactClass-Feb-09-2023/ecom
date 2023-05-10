import './Header.styles.css'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
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
    </nav>
  )
}

export default Header
