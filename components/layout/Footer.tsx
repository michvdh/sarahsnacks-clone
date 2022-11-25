import classes from './Footer.module.scss';
import Image from "next/image";

import '@fortawesome/fontawesome-svg-core/styles.css'
import { faFacebook, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CompanyLogo from '../company-logo/CompanyLogo';

const Footer: React.FC = () => {
  const mobileNavHandler = () => {
    // need to fix this later 
  }

  return (
    <footer className={`${classes.footer} footer`}>
      <div className={`${classes['footer--upper']}`}>
        <div className={classes.brands}>
          <div className={classes['logo-container']}>
            <CompanyLogo
              className={`${classes.logo}`}
              section={'footer'}
              intersectState={null}
              onClick={mobileNavHandler}
            />
            <div className={classes.media}>
              <ul>
                <li><FontAwesomeIcon className={`fa-icon--light-brown`} icon={faFacebook} /></li>
                <li><FontAwesomeIcon className={`fa-icon--light-brown`} icon={faTwitter} /></li>
                <li><FontAwesomeIcon className={`fa-icon--light-brown`} icon={faPinterest} /></li>
                <li><FontAwesomeIcon className={`fa-icon--light-brown`} icon={faInstagram} /></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes['contact-details']}>
            <ul>
              <li>
                <div>
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <span>9 W Philadelphia St. • York, PA 17401</span>
              </li>
              <li>
                <div>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <span>orders@nutsaboutgranola.com</span>
              </li>
              <li>
                <div>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <span>717-814-9648</span>
              </li>
            </ul>
          </div>
        <div className={classes.nav}>
          <ul>
            <li>Shop Now</li>
            <li>My Account</li>
            <li>Shopping Cart</li>
          </ul>
          <ul>
            <li>Where to buy</li>
            <li>Wholesale</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className={classes['women-owned']}>
          <Image
            className={classes.image}
            src="/images/WOB_POSITIVECOLOR_STD.png"
            alt="Women Owned logo"
            layout='fill'
            // width={212}
            // height={70}
          />
        </div>
      </div>
      {/* <hr /> */}
      <div className={`${classes.copyright} ${classes['footer--lower']}`}>
        <span>York | Manchester | Windsor | Jefferson | Loganville | Hershey | Lancaster | Harrisburg | Lebanon | Mechanicsburg</span>
        <span>© Copyright 2022 Sarah's Sweet & Savory Snacks | All Rights Reserved | This site designed and hosted by Enter.Net</span>
        <span>This site is protected by reCAPTCHA. Our Privacy Policy and Terms of Service apply.</span>
      </div>
    </footer>
  );
};

export default Footer;
