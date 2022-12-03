import { useDispatch } from "react-redux";
import classes from "./BtnRemoveItem.module.scss";

const BtnRemoveItem = () => {
  const dispatch = useDispatch();

  const removeItemHandler = (id: string) => {
    const itemIndex = cartItems.findIndex((p) => p.id === id);

    const latestItemRemoved = cartItems[itemIndex];

    props.itemToUndoHandler(latestItemRemoved);

    dispatch(cartActions.removeItem({ inputId: id }));
  };

  // const removeItemHandler = (id: string) => {
  //   dispatch(cartActions.removeItem({ inputId: id }));
  // };

  return (
    <div className={`${classes['remove-btn']}`}>
      <button onClick={() => removeItemHandler(item.id)}>×</button>
    </div>
  )
}