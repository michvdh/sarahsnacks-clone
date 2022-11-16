import React from "react";
import classes from "./embla.module.scss";
import Image from "next/image";

export const Thumb = ({ selected, onClick, imgSrc }) => (
  <div
    className={`${classes["embla__slide"]} ${classes["embla__slide--thumb"]} ${
      selected ? `${classes["is-selected"]}` : ""}`}
  >
    <button
      onClick={onClick}
      className={`${classes["embla__slide__inner"]} ${classes["embla__slide__inner--thumb"]}`}
      type="button"
    >
      <div className={`${classes["embla__slide__img-container"]}`}>
        <Image
          className={`${classes["embla__slide__img"]} ${classes["embla__slide__thumbnail"]}`}
          src={imgSrc}
          layout="fill"
        />
      </div>
    </button>
  </div>
);
