import classes from "./Cart.module.scss";
import CartItems from "./CartItems";
import CartTotals from "./CartTotals";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import {cartStateModel} from "../../model/cartStateModel";
import { useState } from "react";
import {cartActions} from "../../store/cart";
import {cartItemsModel} from "../../model/cartItemsModel";
// import {modalActions} from '../../store/modal';


const Cart = () => {
  const cartItems = useSelector(
    (state: { cart: cartStateModel }) =>
      state.cart.cartItems
  );
  
  const dispatch = useDispatch();
  const [showUndoBox, setShowUndoBox] = useState(false);
  const [itemToUndo, setItemToUndo] = useState({
    id: '',
    productName: '',
    otherName: '',
    varPrice: 0, 
    varSize: '', 
    qty: 0,
    imagesFolder: '', 
    image: '',
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
      id: '',
      productName: '',
      otherName: '',
      varPrice: 0, 
      varSize: '', 
      qty: 0,
      imagesFolder: '', 
      image: '',
    });
  };

  const itemToUndoHandler = (latestItemRemoved: cartItemsModel) => {
    setItemToUndo(latestItemRemoved);
    setShowUndoBox(true); 
  }

  console.log(itemToUndo ? "true" : "false");

  return (
    <main className={`main`}>
      <section className={`${classes.cart} cart`}>
        {showUndoBox && (
          <div className={`${classes.undo}`}>
            <span>"{itemToUndo.productName}" removed</span>
            <button onClick={undoHandler}>{`Undo?`}</button>
          </div>
        )}

        {cartItems.length === 0 && (
          <div>
            <span>(icon here)</span>
            <span>YOUR CART IS CURRENTLY EMPTY.</span>
          </div>
        )}

        {cartItems.length > 0 && (
          <Fragment>
            <CartItems itemToUndoHandler={itemToUndoHandler} />
            <CartTotals />
          </Fragment>
        )}
      </section>
    </main>
  );
};

export default Cart;
