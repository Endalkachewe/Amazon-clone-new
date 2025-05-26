import React, { useContext } from 'react'
import LayOut from '../../Component/LayOut/LayOut'
import { DataContext } from '../../Component/DataProvider/DataProvider'
import ProductCard from '../../Component/Product/ProductCard'
import CurrencyFormat from '../../Component/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import classes from './cart.module.css'
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext)
  const total = basket?.reduce((amount, item) => amount + item.price, 0) || 0
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />

          {
            basket?.length === 0 ? (
              <p>Oops! No items in your cart.</p>
            ) : (
              basket?.map((item) => ( // Implicit return if map body is concise
                <ProductCard
                  key={item.id} // Assuming item has a unique 'id' property
                  product={item}
                  renderDescription={true}
                  renderAdd={false}
                  flex={true}
                />
              ))
            )
          }
        </div>
        {/* subtotal */}
        {basket?.length !== 0 && (
        <div className={classes.subtotal}>
          <div>
            <p>Subtotal ({basket?.length} items)</p>
            <CurrencyFormat amount={total} />
          </div>
          <span>
            <input type="checkbox" />
            <small>This order contains a gift</small>
          </span>
          <Link to="/payments">Continue to checkout</Link>
        </div>
      )}
</section>
    </LayOut>
  )
}

export default Cart
