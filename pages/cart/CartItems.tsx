import classes from "./CartItems.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";
import { useEffect, useRef } from "react";
import { useState } from "react";
// import { modalActions } from "../../store/modal";
import { Fragment } from "react";
import QtyErrorModal from "../../components/ui/modal/QtyErrorModal";

interface cartItemsInterface {
  id: string;
  productName: string;
  varPrice: number; // variation price
  varSize: string; // variation size
  qty: number;
}

const CartItems = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state: { cart: { cartItems: cartItemsInterface[] } }) =>
      state.cart.cartItems
  );

  const [inputId, setInputId] = useState(""); // id of the specific item being adjusted
  const [inputQty, setInputQty] = useState(1); // quantity of the specific item being adjusted

  const [showUndoBox, setShowUndoBox] = useState(false);
  const [itemToUndo, setItemToUndo] = useState({});

  const [showQtyInputError, setShowQtyInputError] = useState(false);

  const incrementQty = (id: string) => {
    const itemIndex = cartItems.findIndex((p) => p.id === id);
    setInputId(id);
    setInputQty(cartItems[itemIndex].qty + 1);
  };

  const decrementQty = (id: string) => {
    const itemIndex = cartItems.findIndex((p) => p.id === id);
    setInputId(id);

    if (cartItems[itemIndex].qty > 1) {
      setInputQty(cartItems[itemIndex].qty - 1);
    } else {
      setInputQty(1);
    }
  };

  // inputChangeHandler is not triggered for + and - buttons. Only for typing
  const inputChangeHandler = (e) => {
    setInputId(e.target.id);
    setInputQty(e.target.value);
  };

  const inputExitHandler = (e) => {
    if (e.target.value < 1) {
      setInputId(e.target.id);
      setInputQty(1);

      // dispatch(
      //   modalActions.showQtyErrorModal({
      //     qtyErrorModal: true,
      //   })
      // );

      setShowQtyInputError(true);
    }
  };

  useEffect(() => {
    dispatch(
      cartActions.adjustItemQty({ inputId: inputId, inputQty: inputQty })
    );

    if (showQtyInputError) {
      setTimeout(() => (setShowQtyInputError(false)), 3000);
    }

  }, [inputQty, inputId]);

  const removeItemHandler = (id: string) => {
    const itemIndex = cartItems.findIndex(
      (p) => p.id === id
    );
    
    const latestItemRemoved = cartItems[itemIndex];
    setItemToUndo(latestItemRemoved);

    setShowUndoBox(true);

    dispatch(cartActions.removeItem({ inputId: id }));
  };

  const undoHandler = () => {
    dispatch(cartActions.addItem(itemToUndo)); 
    setShowUndoBox(false);
    setItemToUndo({});
  }

  // useEffect(() => {
  //   if (showQtyInputError) {
  //     setTimeout(() => (setShowQtyInputError(false), 10000));
  //   }
  // }, [showQtyInputError])

  return (
    <Fragment>
      {showUndoBox && <div className={`${classes.undo}`}>
        <span>"name of item" removed</span>
        <button onClick={undoHandler}>Undo?</button>
      </div>}

      <div className={`${classes["cart-items"]}`}>
        {/* add a different JSX block for mobile view. This one below is for desktop / large tablet view */}
        <ul>
          <li className={classes.row}>
            <div></div>
            <div></div>
            <div>
              <h3>Product</h3>
            </div>
            <div>
              <h3>Price</h3>
            </div>
            <div>
              <h3>Quantity</h3>
            </div>
            <div>
              <h3>Subtotal</h3>
            </div>
          </li>
          {cartItems.map((item: cartItemsInterface, index) => (
            <li key={index} className={classes.row}>
              <div>
                <button onClick={() => removeItemHandler(item.id)}>x</button>
              </div>
              <div>image</div>
              <div>
                {item.productName} {item.varSize && `- ${item.varSize}`}
              </div>
              <div>{item.varPrice}</div>
              <div className={`${classes.quantity}`}>
                <button onClick={() => decrementQty(item.id)}>-</button>
                <input
                  id={item.id}
                  type="number"
                  min={0}
                  value={item.qty}
                  onChange={inputChangeHandler}
                  onBlur={inputExitHandler}
                />
                <button onClick={() => incrementQty(item.id)}>+</button>
              </div>
              <div>{item.varPrice * item.qty}</div>
            </li>
          ))}
        </ul>
      </div>
      {showQtyInputError && <QtyErrorModal />}
    </Fragment>
  );
};

export default CartItems;
