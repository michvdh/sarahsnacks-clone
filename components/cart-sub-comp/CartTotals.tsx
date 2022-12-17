import classes from "./CartTotals.module.scss";
import { useSelector } from "react-redux";

const CartTotals = () => {
  const cartTotalPrice = useSelector(
    (state: { cart: { totalPrice: number } }) => state.cart.totalPrice
  );

  return (
    <div className={classes["cart-totals"]}>
      <div className={classes["totals-container"]}>
        <h2>Cart Totals</h2>
        <div className={`${classes['totals-table']}`}>
          <table>
            {/* <thead>
              <tr className={`${classes.full} ${classes.header}`}>
                <th colSpan={2}>Cart Totals</th>
              </tr>
            </thead> */}
            <tbody>
              <tr>
                <th>
                  <span>Subtotal</span>
                </th>
                <td>
                  <span className={`price-range`}>{cartTotalPrice.toFixed(2)}</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span>Shipping</span>
                </th>
                <td>
                  <span>Calculate Shipping</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span>Total</span>
                </th>
                <td>
                  <span className={`price-range`}>{cartTotalPrice.toFixed(2)}</span>
                </td>
              </tr>
            </tbody>
            {/* <tr className={classes.full}>
              <td colSpan={2}>
                <button>Proceed to checkout</button>
              </td>
            </tr> */}
          </table>
        </div>

        <button className={`btn btn--green btn--regular btn--rounded`}>Proceed to checkout</button>
      </div>
    </div>
  );
};

export default CartTotals;
