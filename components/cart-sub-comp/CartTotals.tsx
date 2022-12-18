import classes from "./CartTotals.module.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import InDevelopmentModal from "../ui/modal/InDevelopmentModal";

const CartTotals = () => {
  const cartTotalPrice = useSelector(
    (state: { cart: { totalPrice: number } }) => state.cart.totalPrice
  );

  const [showInDevModal, setShowInDevModal] = useState(false);

  const inDevelopmentHandler = () => {
    const newState = !showInDevModal;
    setShowInDevModal(newState);
  }

  return (
    <div className={classes["cart-totals"]}>
      <div className={classes["totals-container"]}>
        <h2>Cart Totals</h2>
        <div className={`${classes['totals-table']}`}>
          <table>
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
          </table>
        </div>

        <button className={`btn btn--green btn--regular btn--rounded`} onClick={inDevelopmentHandler}>Proceed to checkout</button>
      </div>
      {showInDevModal === true && <InDevelopmentModal onClick={inDevelopmentHandler}/>}
    </div>
  );
};

export default CartTotals;
