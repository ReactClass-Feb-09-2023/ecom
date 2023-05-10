import CartHeader from '../components/Cart/Header'
import CartList from '../components/Cart/List'
import CartSubtotal from '../components/Cart/Subtotal'

function Cart() {
  return (
    <div className="pages__cart">
      <CartHeader />
      <CartList />
      <CartSubtotal />
    </div>
  )
}

export default Cart
