import classes from './Cart.module.scss';
import CartItems from './CartItems';
import CartTotals from './CartTotals';

const Cart = () => {
  return (
    <main className={`main`}>
      <section className={`${classes.cart} cart`}>
        <CartItems />
        <CartTotals />
      </section>
    </main> 
  )
}

export default Cart;