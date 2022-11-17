import classes from "./CartItems.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import QtyErrorModal from "../../components/ui/modal/QtyErrorModal";
import changeToKebabCase from "../../components/helpers/changeToKebabCase";
import Link from "next/link";
import {CartStateModel} from "../../model/cartStateModel.model";
import { CartItemsModel } from "../../model/cartItemsModel.model";
import Image from "next/image";


interface cartItemsInterface {
  itemToUndoHandler: (item: CartItemsModel) => void;
}

const CartItems: React.FC<cartItemsInterface> = (props) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state: { cart: CartStateModel }) => state.cart.cartItems
  );

  const [inputId, setInputId] = useState(""); // id of the specific item being adjusted
  const [inputQty, setInputQty] = useState(1); // quantity of the specific item being adjusted

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
      setShowQtyInputError(true);
    }
  };

  useEffect(() => {
    dispatch(
      cartActions.adjustItemQty({ inputId: inputId, inputQty: inputQty })
    );

    if (showQtyInputError) {
      setTimeout(() => setShowQtyInputError(false), 3000);
    }
  }, [inputQty, inputId]);

  const removeItemHandler = (id: string) => {
    const itemIndex = cartItems.findIndex((p) => p.id === id);

    const latestItemRemoved = cartItems[itemIndex];

    props.itemToUndoHandler(latestItemRemoved);

    dispatch(cartActions.removeItem({ inputId: id }));
  };

  return (
    <Fragment>
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
          {cartItems.map((item, index) => (
            <li key={index} className={classes.row}>
              <div>
                <button onClick={() => removeItemHandler(item.id)}>x</button>
              </div>
              <div className={`${classes['image-container']}`}>
                <Image
                  src={`/images/products${item.imagesFolder}${item.image}`}
                  layout="fill"
                  className={`${classes['image']}`}
                />
              </div>
              <div>
                <Link
                  href={{
                    pathname: `/product/${changeToKebabCase(
                      [],
                      item.otherName ? item.otherName : item.productName
                    )}`,
                    query: {
                      id: item.id,
                    },
                  }}
                >
                  <a className={classes["product-link"]}>
                    {item.productName}{" "}
                    {item.varSize !== "" && `- ${item.varSize}`}
                  </a>
                </Link>
              </div>
              <div className={`price-range`}>{item.varPrice.toFixed(2)}</div>
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
              <div className={`price-range`}>{(item.varPrice * item.qty).toFixed(2)}</div>
            </li>
          ))}
        </ul>
      </div>
      {showQtyInputError && <QtyErrorModal />}
    </Fragment>
  );
};

export default CartItems;
