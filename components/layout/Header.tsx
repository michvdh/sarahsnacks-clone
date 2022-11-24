import Image from "next/image";
import Link from "next/link";
import classes from "./Header.module.scss";
import CompanyLogo from "../company-logo/CompanyLogo";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from '../../store/cart';
import CartPreviewOnHover from "../ui/CartPreviewOnHover";

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

  const [checked, setChecked] = useState(false);

  const checkboxHandler = (e) => {
    setChecked(e.target.checked);
  }


  useEffect(() => {
    let cartLS =
      typeof window !== "undefined" &&
      "cartLS" in localStorage &&
      JSON.parse(localStorage.getItem("cartLS") || '{}');
      // we need to check if window is not undefined because localStorage api is not available on the server
      // cartLS = cart Local Storage

    cartLS && dispatch(cartActions.getCartDetailsFromLocalStorage(cartLS));
  }, []);


  // If intersectState = true, this means default state

  return (
    <header
      className={`${classes.header} header shadow`}
    >
      <div className={`${classes["header-container"]}`}>
        
        <div className={`${classes.call} call`}>
          <span>
            <FontAwesomeIcon
              className={`fa-icon--green fa-icon--left`}
              icon={faPhone}
            />
            <span className={`${classes['call-now']} call-now`}>Call Now</span>
          </span>
          <span className={`${classes['call-number']} `}>717-814-9648</span>
        </div>

        <CompanyLogo
          className={`${classes.logo}`}
          section={'header'}
          intersectState={intersectState}
        />

        <div 
          className={`${classes.cart}`}
        >
          <Link href={{ pathname: `/cart` }} passHref>
            <a>
              <div className={`${classes['cart__link']}`}>
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
                <span className={`${classes['cart__price']} `}>${cartTotalPrice.toFixed(2)}</span>
              </div>
            </a>
          </Link>
          <CartPreviewOnHover className={classes['cart-hover']} />
        </div>

        <div className={classes.border}></div>

        <div className={classes.hamburger}>
          <input type="checkbox" className={classes.checkbox} id="navi-toggle" onChange={checkboxHandler} />
          <label htmlFor="navi-toggle" className={classes['mobile-nav']}>
            <span className={classes['mobile-nav__icon']}>&nbsp;</span>
          </label> 
        </div>

        <div className={`${classes.nav} nav ${checked ? classes.open : classes.closed}`}>
          <ul className={``}>
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
      </div>
    </header>
  );
};

export default Header;
