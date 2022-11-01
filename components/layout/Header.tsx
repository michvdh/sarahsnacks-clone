import Image from "next/image";
import Link from "next/link";
import classes from "./Header.module.scss";
import CompanyLogo from "../company-logo/CompanyLogo";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from '../../store/cart';
import CartPreviewOnHover from "../ui/CartPreviewOnHover";
// import { useInView } from "react-intersection-observer";
// import { ioActions } from '../../store/intersectionObserver';

import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faPhone,
  faBagShopping,
  faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header: React.FC = () => {
  const intersectState = useSelector(
    (state: {
      io: {
        targetIntersect: boolean;
      };
    }) => state.io.targetIntersect
  );

  const dispatch = useDispatch();

  const cartTotalQty = useSelector(
    (state: { cart: { totalQty: number } }) => state.cart.totalQty
  );

  const cartTotalPrice = useSelector(
    (state: { cart: { totalPrice: number } }) => state.cart.totalPrice
  );

  const [cartHover, setCartHover] = useState(false);

  const cartHoverHandler = () => {
    setCartHover(!cartHover);
  };

  useEffect(() => {
    let cartLS =
      typeof window !== "undefined" &&
      "cartLS" in localStorage &&
      JSON.parse(localStorage.getItem("cartLS") || '{}');
      // we need to check if window is not undefined because localStorage api is not available on the server
      // cartLS = cart local storage

    cartLS && dispatch(cartActions.getCartDetailsFromLocalStorage(cartLS));
  }, []);

  console.log(cartHover);
  return (
    <header
      className={`${classes.header} header ${intersectState ? "" : "shadow"}`}
    >
      <div className={`${classes["header-container"]}`}>
        <div className={`${classes.call} call`}>
          <span>
            <FontAwesomeIcon
              className={`fa-icon--green fa-icon--left`}
              icon={faPhone}
            />
            <span className="call-now">Call Now</span>
          </span>
          <span className={`extra-bold`}>717-814-9648</span>
        </div>
        <CompanyLogo
          className={classes.logo}
          width={intersectState ? 243 : 138}
          height={intersectState ? 80 : 45.5}
        />
        <div 
          className={`${classes.cart} cart`}
          onMouseEnter={cartHoverHandler}
          onMouseLeave={cartHoverHandler}
        >
          <Link href={{ pathname: `/cart` }} passHref>
            <a>
              <div className={`${classes['cart-link']}`}>
                <span>
                  <FontAwesomeIcon
                    className={`${classes[`fa-icon`]} fa-icon--left`}
                    icon={faBagShopping}
                  />
                  <FontAwesomeIcon
                    className={`${classes[`fa-icon`]} fa-icon--green`}
                    icon={faCaretLeft}
                  />
                  <span className={`${classes["cart__count"]} cart__count`}>
                    {cartTotalQty}
                  </span>
                </span>
                <span className={`extra-bold`}>${cartTotalPrice.toFixed(2)}</span>
              </div>
            </a>
          </Link>
        </div>
        <div className={`${classes.nav} nav`}>
          <ul className={`extra-bold`}>
            <li>
              <Link href="/">
                <a className={`${classes.link}`}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <a className={`${classes.link}`}>Shop</a>
              </Link>
            </li>
            <li>
              <a className={`${classes.link}`}>Our Story</a>
            </li>
            <li>
              <a className={`${classes.link}`}>Where to buy</a>
            </li>
            <li>
              <a className={`${classes.link}`}>Recipes</a>
            </li>
            <li>
              <a className={`${classes.link}`}>News</a>
            </li>
            <li>
              <a className={`${classes.link}`}>Contact</a>
            </li>
          </ul>
        </div>
        <CartPreviewOnHover 
          className={`${cartHover ? classes['show-cart-preview'] : classes['hide-cart-preview']}`} 
          onMouseEnter={cartHoverHandler}
          onMouseLeave={cartHoverHandler}
        />
        {/* <CartPreviewOnHover className="" /> */}
      </div>
    </header>
  );
};

export default Header;
