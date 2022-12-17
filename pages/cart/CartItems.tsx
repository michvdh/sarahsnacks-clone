import classes from "./CartItems.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import QtyErrorModal from "../../components/ui/modal/QtyErrorModal";
import changeToKebabCase from "../../components/helpers/changeToKebabCase";
import Link from "next/link";
import { CartStateModel } from "../../model/cartStateModel.model";
import { CartItemsModel } from "../../model/cartItemsModel.model";
import Image from "next/image";
import capitalizeFirstLetter from "../../components/helpers/capitalizeFirstLetter";

interface cartItemsInterface {
  cartItems: CartItemsModel[];
  itemToUndoHandler: (item: CartItemsModel) => void;
}

const CartItems: React.FC<cartItemsInterface> = (props) => {
  const dispatch = useDispatch();

  // const cartItems = useSelector(
  //   (state: { cart: CartStateModel }) => state.cart.cartItems
  // );

  const cartItems = props.cartItems;

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
      setTimeout(() => setShowQtyInputError(false), 800);
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
        <table className={`${classes.table}`}>
          <thead>
            <tr className={classes.row}>
              <th></th>
              <th></th>
              <th className={`${classes.product}`}>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} className={classes.row}>
                {/* Remove button */}
                <td className={`${classes["remove-btn-container"]}`}>
                  <div className={`${classes["remove-btn"]}`}>
                    <button onClick={() => removeItemHandler(item.id)}>
                      ×
                    </button>
                  </div>
                </td>

                {/* Image */}
                <td className={`${classes["image-container"]}`}>
                  <Image
                    src={`/images/products${item.imagesFolder}${item.image}`}
                    layout="fill"
                    className={`${classes["image"]}`}
                  />
                </td>

                {/* Product Name and variation */}
                <td className={`${classes.product}`}>
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
                      {capitalizeFirstLetter(item.productName)}{" "}
                      {item.varSize !== "" &&
                        `- ${capitalizeFirstLetter(item.varSize)}`}
                    </a>
                  </Link>
                </td>

                {/* Price */}
                <td className={`price-range`}>{item.varPrice.toFixed(2)}</td>

                {/* Quantity Control */}
                <td className={`${classes.quantity}`}>
                  <div>
                    <button
                      className={`${classes["qty-control"]} ${classes.btn}`}
                      onClick={() => decrementQty(item.id)}
                    >
                      -
                    </button>
                    <input
                      id={item.id}
                      type="number"
                      min={0}
                      value={item.qty}
                      onChange={inputChangeHandler}
                      onBlur={inputExitHandler}
                      className={`${classes["qty-control"]} ${classes.input} ${
                        showQtyInputError &&
                        item.id === inputId &&
                        classes["input--error"]
                      }`}
                    />
                    <button
                      className={`${classes["qty-control"]} ${classes.btn}`}
                      onClick={() => incrementQty(item.id)}
                    >
                      +
                    </button>
                  </div>
                </td>

                {/* Subtotal */}
                <td className={`price-range`}>
                  {(item.varPrice * item.qty).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cart Items Mobile */}
      <div className={`${classes["cart-items-mobile"]}`}>
        {cartItems.map((item, index) => (
          <table className={`${classes.table}`} key={index}>
            <tr>
              <td className={`${classes["remove-btn-container"]}`} colSpan={2}>
                <div className={`${classes["remove-btn"]}`}>
                  <button onClick={() => removeItemHandler(item.id)}>×</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${classes["image-td"]}`} colSpan={2}>
                <div className={`${classes["image-container"]}`}>
                  <Image
                    src={`/images/products${item.imagesFolder}${item.image}`}
                    layout="fill"
                    className={`${classes["image"]}`}
                  />
                </div>
              </td>
            </tr>
            <tr className={classes["space-between"]}>
              <th>Product:</th>
              <td className={`${classes.product}`}>
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
                    {capitalizeFirstLetter(item.productName)}{" "}
                    {item.varSize !== "" &&
                      `- ${capitalizeFirstLetter(item.varSize)}`}
                  </a>
                </Link>
              </td>
            </tr>
            <tr className={classes["space-between"]}>
              <th>Price:</th>
              <td className={`price-range`}>{item.varPrice.toFixed(2)}</td>
            </tr>
            <tr className={classes["space-between"]}>
              <th>Quantity:</th>
              <td className={`${classes.quantity}`}>
                <div>
                  <button
                    className={`${classes["qty-control"]} ${classes.btn}`}
                    onClick={() => decrementQty(item.id)}
                  >
                    -
                  </button>
                  <input
                    id={item.id}
                    type="number"
                    min={0}
                    value={item.qty}
                    onChange={inputChangeHandler}
                    onBlur={inputExitHandler}
                    className={`${classes["qty-control"]} ${classes.input} ${
                      showQtyInputError &&
                      item.id === inputId &&
                      classes["input--error"]
                    }`}
                  />
                  <button
                    className={`${classes["qty-control"]} ${classes.btn}`}
                    onClick={() => incrementQty(item.id)}
                  >
                    +
                  </button>
                </div>
              </td>
            </tr>
            <tr className={classes["space-between"]}>
              <th>Subtotal:</th>
              <td className={`price-range`}>
                {(item.varPrice * item.qty).toFixed(2)}
              </td>
            </tr>
          </table>
        ))}
      </div>

      {/* {showQtyInputError && <QtyErrorModal />} */}
    </Fragment>
  );
};

export default CartItems;
