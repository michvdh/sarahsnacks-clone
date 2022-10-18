import classes from "./Cart.module.scss";
import CartItems from "./CartItems";
import CartTotals from "./CartTotals";
import { useSelector } from "react-redux";
import { Fragment } from "react";

interface cartItemsInterface {
  id: string;
  productName: string;
  varPrice: number; // variation price
  varSize: string; // variation size
  qty: number;
}

const Cart = () => {
  const cartItems = useSelector(
    (state: { cart: { cartItems: cartItemsInterface[] } }) =>
      state.cart.cartItems
  );

  return (
    <main className={`main`}>
      <section className={`${classes.cart} cart`}>
        {cartItems.length === 0 && (
          <div>
            <span>(icon here)</span>
            <span>YOUR CART IS CURRENTLY EMPTY.</span>
          </div>
        )}

        {cartItems.length > 0 && (
          <Fragment>
            <CartItems />
            <CartTotals />
          </Fragment>
        )}
      </section>
    </main>
  );
};

export default Cart;
