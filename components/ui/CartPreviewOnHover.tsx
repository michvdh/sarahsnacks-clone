import { useSelector, useDispatch } from "react-redux";
import { cartItemsModel } from "../../model/cartItemsModel";

const CartPreviewOnHover = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state: { cart: { cartItems: cartItemsModel[] } }) =>
      state.cart.cartItems
  );


  return (
    <div>
      <div>
        <ul></ul>
      </div>
      <div>
        {/* subtotal */}
      </div>
      <div>
        {/* buttons */}
      </div>
    </div>
  )
}

export default CartPreviewOnHover;