import { useSelector, useDispatch } from "react-redux";
import { cartStateModel } from "../../model/cartStateModel";
import Image from "next/image";
import { cartActions } from "../../store/cart";
import classes from "./CartPreviewOnHover.module.scss";

interface CartPreviewInterface {
  className: string;
}

const CartPreviewOnHover: React.FC<CartPreviewInterface> = (props) => {
  const dispatch = useDispatch();

  const cart = useSelector(
    (state: { cart: cartStateModel }) =>
      state.cart
  );

  const removeItemHandler = (id: string) => {
    dispatch(cartActions.removeItem({ inputId: id }));
  };

  return (
    <div 
      className={`${classes["cart-preview"]} ${props.className}`}
    >
      <div>
        <ul className={classes["list-container"]}>
          {cart.cartItems.map((item, index) => (
            <li key={index} className={classes.list}>
              <div>
                <Image
                  src={`/images/products${item.imagesFolder}${item.image}`}
                  width="100"
                  height="100"
                />
              </div>
              <div>
                <p>{item.productName} {item.varSize && `- ${item.varSize}`}</p>
                <p>{item.qty} × {item.varPrice}</p>
              </div>
              <div>
                <button onClick={() => removeItemHandler(item.id)}>x</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.subtotal}>
        <span>Subtotal:</span>
        <span>${cart.totalPrice}</span>
      </div>
      <div className={classes['buttons-container']}>
        <button>View Cart</button>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default CartPreviewOnHover;