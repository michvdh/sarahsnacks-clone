import Image from "next/image";
import Link from "next/link";
import classes from "./Header.module.scss";
import CompanyLogo from "../company-logo/CompanyLogo";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
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

  // console.log(intersectState);

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
        <div className={`${classes.cart} cart`}>
          <span>
            <FontAwesomeIcon
              className={`${classes[`fa-icon`]} fa-icon--left`}
              icon={faBagShopping}
            />
            <FontAwesomeIcon
              className={`${classes[`fa-icon`]} fa-icon--green`}
              icon={faCaretLeft}
            />
            <span className={`${classes["cart__count"]} cart__count`}>0</span>
          </span>
          <span className={`extra-bold`}>$0.00</span>
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
      </div>
    </header>
  );
};

export default Header;
