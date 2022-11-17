import { useSelector, useDispatch } from "react-redux";
import { CartStateModel } from "../../model/cartStateModel.model";
import Image from "next/image";
import { cartActions } from "../../store/cart";
import classes from "./CartPreviewOnHover.module.scss";

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

  return (
    <div 
      className={`${classes["cart-preview"]} ${props.className}`}
    >
      <div>
        <ul className={classes["list-container"]}>
          {cart.cartItems.map((item, index) => (
            <li key={index} className={classes.list}>
              <div className={`${classes['image-container']}`}>
                <Image
                  src={`/images/products${item.imagesFolder}${item.image}`}
                  layout="fill"
                  className={`${classes['image']}`}
                />
              </div>
              <div>
                <p>{item.productName} {item.varSize && `- ${item.varSize}`}</p>
                <p>{item.qty} × <span className={`price-range`}>{item.varPrice.toFixed(2)}</span></p>
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
        <span className={`price-range`}>${cart.totalPrice.toFixed(2)}</span>
      </div>
      <div className={classes['buttons-container']}>
        <button>View Cart</button>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default CartPreviewOnHover;