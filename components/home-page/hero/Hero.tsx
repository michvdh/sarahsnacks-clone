import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";

import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { ioActions } from "../../../store/intersectionObserver";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Hero.module.scss";

const Hero: React.FC = () => {

  return (
    <section className={`${classes.hero} hero`}>
      <div className={`${classes['hero--upper']}`}>
        <div className={classes["image--main-container"]}>
          <div className={`${classes['image--container']} ${classes.exclamation}`}>
            <Image
              src="/images/white-exclamation.png"
              alt="White exclamation image"
              // width={850}
              // height={650}
              layout="fill"
              className={classes.image}
            />
          </div>
          <div className={`${classes['image--container']} ${classes.PBandChoco}`}>
            <Image
              src="/images/PBandChoco.png"
              alt="PB and Choco image"
              // width={850}
              // height={650}
              layout="fill"
              className={classes.image}
            />
          </div>
        </div>
      </div>

      <div className={classes["text-container"]}>
        <h1>
          <span className={`${classes.side}`}>Inspiring Mindful</span>
          {/* <br /> */}
          <span className={`extra-bold ${classes.highlight}`}>Snacking</span>
        </h1>
        <h3>Free Shipping on orders over $50</h3>
        <Link href={"/shop"} passHref>
          <a className={`${classes.btn} btn btn--brown btn--regular`}>
            <span>Shop Now</span>
            <FontAwesomeIcon className={`fa-icon--right fa-icon--white`} icon={faRightLong} />
          </a>
        </Link>
      </div>

      <div className={`${classes.overlay}`}></div>
    </section>
  );
};

export default Hero;
