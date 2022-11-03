import Link from "next/link";
import classes from "./BtnViewCart.module.scss";

const BtnViewCart = () => {
  return (
    <Link
      href={{
        pathname: `/cart`,
      }}
      passHref
    >
      <a
        className={`btn btn--thick-font btn--green btn--small btn--featured ${classes.btn}`}
      >
        View Cart
      </a>
    </Link>
  );
};

export default BtnViewCart;
