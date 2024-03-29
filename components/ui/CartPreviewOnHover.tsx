import { useSelector, useDispatch } from "react-redux";
import { CartStateModel } from "../../model/cartStateModel.model";
import Image from "next/image";
import { cartActions } from "../../store/cart";
import classes from "./CartPreviewOnHover.module.scss";
import Link from "next/link";
import changeToKebabCase from "../../components/helpers/changeToKebabCase";
import { useState } from "react";
import InDevelopmentModal from "./modal/InDevelopmentModal";

interface CartPreviewInterface {
  className: string;
}

const CartPreviewOnHover: React.FC<CartPreviewInterface> = (props) => {
  const dispatch = useDispatch();

  const cart = useSelector(
    (state: { cart: CartStateModel }) =>
      state.cart
  );

  const removeItemHandler = (id: string) => {
    dispatch(cartActions.removeItem({ inputId: id }));
  };

  const cartItemsLength = cart.cartItems.length;

  const [showInDevModal, setShowInDevModal] = useState(false);

  const inDevelopmentHandler = () => {
    const newState = !showInDevModal;
    setShowInDevModal(newState);
  }

  return (
    <div
      className={`${classes["cart-preview"]} ${props.className} shadow`}
    >
      <div className={`${classes['preview-container']} ${cartItemsLength < 1 && classes.hide}`}>
        <div>
          <ul className={classes["list-container"]}>
            {cart.cartItems.map((item, index) => (
              <li key={index} className={classes.list}>
                {/* Image */}
                <div className={`${classes['image-container']}`}>
                  <Image
                    src={`/images/products${item.imagesFolder}${item.image}`}
                    layout="fill"
                    className={`${classes['image']}`}
                    alt={item.otherName ? item.otherName : item.productName}
                  />
                </div>
                {/* Text */}
                <div className={`${classes['item-details']}`}>
                  <p className={`${classes.product}`}>
                    {/* {item.productName} {item.varSize && `- ${item.varSize}`} */}
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
                    <a className={`${classes.text} ${classes["product-link"]}`}>
                      {item.productName}{" "}
                      {item.varSize !== "" && `- ${item.varSize}`}
                    </a>
                  </Link>
                  </p>
                  <p className={`${classes.qty} ${classes.text}`}>
                    {item.qty} × <span className={`price-range`}>{item.varPrice.toFixed(2)}</span>
                  </p>
                </div>
                {/* Close Button */}
                <div className={`${classes['remove-btn']}`}>
                  <button onClick={() => removeItemHandler(item.id)}>×</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Subtotal */}
        <div className={classes.subtotal}>
          <span className={classes.text}>Subtotal:</span>
          <span className={classes.total}>${cart.totalPrice.toFixed(2)}</span>
        </div>
        {/* Buttons */}
        <div className={classes['buttons-container']}>
          <Link href={"/cart"} passHref>
            <a className={`btn btn--gray`}>View Cart</a>
          </Link>
          <a className={`btn btn--green`} onClick={inDevelopmentHandler}>Checkout</a>
        </div>
      </div>

      <div className={`${classes['empty-container']} ${cartItemsLength > 0 && classes.hide}`}>
        <span>No products in the cart.</span>
      </div>
      {showInDevModal === true && <InDevelopmentModal onClick={inDevelopmentHandler}/>}
    </div>
  )
}

export default CartPreviewOnHover;