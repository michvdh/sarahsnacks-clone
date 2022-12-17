import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import classes from './AddToCartSuccessModal.module.scss';
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Backdrop from "./Backdrop";

interface SuccessInterface {
  onClick: () => void;
  addToCartConfirmation: boolean;
}

const SuccessModalOverlay: React.FC<{onClick: () => void}> = (props) => {
  const [closeWindow, setCloseWindow] = useState(false);

  const cartTotalPrice = useSelector(
    (state: { cart: { totalPrice: number } }) => state.cart.totalPrice
  );

  const cartTotalQty = useSelector((state: { cart: { totalQty: number } }) => state.cart.totalQty);

  const closeHandler = (e) => {
    if (e.target === e.currentTarget) {
      setCloseWindow(true);
      setTimeout(() => props.onClick(), 220);
      // adjust based on close animate -> ProductQuickViewModal.module.scss
    }
  }

  // total items and total qty
  return (
    <div className={classes['success-backdrop']} onClick={closeHandler} >
      <div className={`${classes['success-overlay']} ${closeWindow ? classes['animate-close'] : classes['animate-open']}`}>
        <div className={classes['check-icon']}>
          <div className={classes['icon-container']}>
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"></circle><path xmlns="http://www.w3.org/2000/svg" className="checkmark-check" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" d="M 14.1 27.2 l 7.1 7.2 l 16.7 -16.8"></path></svg>
          </div>
        </div>
        <div className={classes['cart-update']}>
          <h2>Item added to your cart</h2>
          <p>{cartTotalQty} items in the cart (<span>${cartTotalPrice.toFixed(2)}</span>)</p>
        </div>
        <div className={classes['btn-container']}>
          <button
            onClick={closeHandler}
            className={`btn btn--green btn--thick btn--curved`}
          >
            Continue Shopping
          </button>
          <button
            onClick={props.onClick}
            className={`btn btn--light-brown btn--thick btn--curved`}
          >
            <Link
              href={{
                pathname: `/cart`
              }}
              passHref
            >
              <a>Go to the cart</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

// this is the modal that appears once a user adds an item (with single variation) from the shop page
const AddToCartSuccessModal: React.FC<{onClick: () => void}> = (props) => {
  const backdrop = document.getElementById("backdrop-root")!;
  const successOverlay = document.getElementById("success-overlay-root")!;

  return (
    <Fragment>
      {/* {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, backdrop)} */}

      {ReactDOM.createPortal(<SuccessModalOverlay onClick={props.onClick} />, successOverlay)}
    </Fragment>
  );
};

export default AddToCartSuccessModal;
