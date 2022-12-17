import classes from "./Cart.module.scss";
import CartItems from "../../components/cart-sub-comp/CartItems";
import CartTotals from "../../components/cart-sub-comp/CartTotals";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { CartStateModel } from "../../model/cartStateModel.model";
import { useState } from "react";
import { cartActions } from "../../store/cart";
import { CartItemsModel } from "../../model/cartItemsModel.model";
import Link from "next/link";
import Head from "next/head";
import capitalizeFirstLetter from "../../components/helpers/capitalizeFirstLetter";
// import {modalActions} from '../../store/modal';

const Cart = () => {
  const cartItems = useSelector(
    (state: { cart: CartStateModel }) => state.cart.cartItems
  );

  console.log(cartItems);

  const dispatch = useDispatch();
  const [showUndoBox, setShowUndoBox] = useState(false);
  const [itemToUndo, setItemToUndo] = useState({
    id: "",
    productName: "",
    otherName: "",
    varPrice: 0,
    varSize: "",
    qty: 0,
    imagesFolder: "",
    image: "",
  });

  // const dispatch = useDispatch();

  // dispatch(
  //   modalActions.showAddToCartSuccessModal({
  //     addItemSuccesModal: false
  //   })
  // );

  const undoHandler = () => {
    dispatch(cartActions.addItem(itemToUndo));
    setShowUndoBox(false);
    setItemToUndo({
      id: "",
      productName: "",
      otherName: "",
      varPrice: 0,
      varSize: "",
      qty: 0,
      imagesFolder: "",
      image: "",
    });
  };

  const itemToUndoHandler = (latestItemRemoved: CartItemsModel) => {
    setItemToUndo(latestItemRemoved);
    setShowUndoBox(true);
  };

  return (
    <Fragment>
      <Head>
        <title>Cart - Sarah&apos;s Snacks</title>
        <link rel="shortcut icon" href="/sarahsnacks-fav.png" />
      </Head>
      <main className={`main`}>
        <section className={`${classes.cart} cart`}>
          {showUndoBox && (
            <div className={`${classes.undo}`}>
              <div className={classes.description}>
                <span className={classes.icon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className={classes.text}>
                  &quot;{capitalizeFirstLetter(itemToUndo.productName)}&quot;
                  removed
                </span>
              </div>
              <button
                className={`btn btn--green btn--thin`}
                onClick={undoHandler}
              >
                Undo?
              </button>
            </div>
          )}
          {cartItems.length === 0 && (
            <div className={`${classes["empty-cart"]}`}>
              <div className={`${classes["box"]}`}>
                <span className={`${classes["icon"]}`}>
                  <svg
                    // width="24"
                    // height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className={`${classes["text"]}`}>
                  YOUR CART IS CURRENTLY EMPTY.
                </span>
              </div>
              <Link href="/shop">
                <a className="btn btn--green btn--rounded">
                  <span className={classes.container}>
                    <span className={`${classes.icon}`}>
                      <svg
                        // width="24"
                        // height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span className={classes.label}>Return to shop</span>
                  </span>
                </a>
              </Link>
            </div>
          )}
          {cartItems.length > 0 && (
            <Fragment>
              <CartItems
                cartItems={cartItems}
                itemToUndoHandler={itemToUndoHandler}
              />
              <CartTotals />
            </Fragment>
          )}
        </section>
      </main>
    </Fragment>
  );
};

export default Cart;
