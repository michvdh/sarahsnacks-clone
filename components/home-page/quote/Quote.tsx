import React from "react";
import classes from "./Quote.module.scss"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Quote = () => {
  return (
    <section className={`${classes.quote} quote`}>
      <div className={classes.overlay}></div>
      <div className={`${classes.content} content`}>
        <FontAwesomeIcon className={`${classes['fa-quote']} fa-icon--light-green`} icon={faQuoteRight} />
        <h1>
          I remember tasting the granola for the first time,
          <br />
          <span>Yum, I was hooked!</span>
        </h1>
      </div>
    </section>
  );
}

export default Quote;