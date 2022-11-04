import classes from './CartTotals.module.scss';
import { useSelector } from 'react-redux';

const CartTotals = () => {
  const cartTotalPrice = useSelector(
    (state: { cart: { totalPrice: number } }) => state.cart.totalPrice
  );

  return (
    <div className={classes['cart-totals']}>
      <div className={classes['totals-table']}>
        <ul>
          <li className={classes.full}>Cart Totals</li>
          <li className={classes.divided}>
            <span>Subtotal</span>
            <span className={`price-range`}>{cartTotalPrice.toFixed(2)}</span>
          </li>
          <li className={classes.divided}>
            <span>Shipping</span>
            <span>Calculate Shipping</span>
          </li>
          <li className={classes.divided}>
            <span>Total</span>
            <span className={`price-range`}>{cartTotalPrice.toFixed(2)}</span>
          </li>
          <li className={classes.full}>
            <button>Proceed to checkout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CartTotals;