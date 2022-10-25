import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import classes from './AddToCartSuccessModal.module.scss';
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const Backdrop: React.FC<{onClick: () => void}> = (props) => {
  return (
    <div onClick={props.onClick} className={classes.backdrop}></div>
  );
};

const SuccessModalOverlay: React.FC<{onClick: () => void}> = (props) => {
  const cartTotalPrice = useSelector(
    (state: { cart: { totalPrice: number } }) => state.cart.totalPrice
  );
 
  const cartTotalQty = useSelector((state: {cart: {totalQty: number}}) => state.cart.totalQty);

  // total items and total qty
  return (
    <div className={classes['success-overlay']}>
      <p>insert check svg</p>
      <h2>Item added to your cart</h2>
      <p>{cartTotalQty} items in the cart (${cartTotalPrice})</p>
      <div>
        <button onClick={props.onClick}>Continue Shopping</button>
        <button onClick={props.onClick}>
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
  );
};

// this is the modal that appears once a user adds an item (with single variation) from the shop page
const AddToCartSuccessModal: React.FC<{onClick: () => void}> = (props) => {
  const [mounted, setMounted] = useState(false);
  const backdrop = document.getElementById("backdrop-root")!;
  const successOverlay = document.getElementById("success-overlay-root")!;

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <Fragment>
      {mounted && ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, backdrop)}

      {mounted &&
        ReactDOM.createPortal(<SuccessModalOverlay onClick={props.onClick} />, successOverlay)}
    </Fragment>
  );
};

export default AddToCartSuccessModal;