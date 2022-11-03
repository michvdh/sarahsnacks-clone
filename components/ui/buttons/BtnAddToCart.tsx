import classes from "./BtnAddToCart.module.scss";

interface BtnAddToCartInterface {
  onClick: () => void;
}

const BtnAddToCart: React.FC<BtnAddToCartInterface> = (props) => {
  return (
    <a
      className={`btn btn--thick-font btn--green btn--small btn--featured ${classes.btn}`}
      onClick={props.onClick}
    >
      Add to Cart
    </a>
  );
};

export default BtnAddToCart;
