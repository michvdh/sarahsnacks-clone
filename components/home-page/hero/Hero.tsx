import Image from "next/image";
import React, { useRef } from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { ioActions } from "../../../store/intersectionObserver";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Hero.module.scss";

interface RefDetails {
  ref: React.Ref<HTMLElement>
}

// const Hero: React.FC<RefDetails> = React.forwardRef((props, ref) => {
//   const heroRef = useRef();

const Hero: React.FC = () => {
  // const heroRef = useRef();

  const dispatch = useDispatch();

  const { ref: heroRef, entry } = useInView({
    threshold: 0.8, // this means IO will trigger once 10% of the target is inside the viewport
    root: null,
    rootMargin: '0px'
  });

  console.log(entry);

  const intersectState = entry?.isIntersecting;

  if (intersectState !== undefined) {
    dispatch(ioActions.changeIOState(intersectState));
  }

  console.log(intersectState);

  return (
    <section ref={heroRef} className={`${classes.hero} hero`}>
      <div>
        <div className={classes["image-container"]}>
          <div className={`${classes.image} ${classes.exclamation}`}>
            <Image
              src="/images/white-exclamation.png"
              alt="White exclamation image"
              width={850}
              height={650}
            />
          </div>
          <div className={`${classes.image} ${classes.PBandChoco}`}>
            <Image
              src="/images/PBandChoco.png"
              alt="PB and Choco image"
              width={950}
              height={650}
            />
          </div>
        </div>
      </div>
      <div className={classes["text-container"]}>
        <h1>
          Inspiring Mindful
          <br />
          <span className={`extra-bold`}>Snacking</span>
        </h1>
        <h3>Free Shipping on orders over $50</h3>
        <button className={`${classes.btn} btn btn--brown btn--regular`}>
          <span>Shop Now</span>
          <FontAwesomeIcon className={`fa-icon--right fa-icon--white`} icon={faRightLong} />
        </button>
      </div>
      <div className={`${classes.overlay}`}></div>
    </section>
  );
};

export default Hero;
