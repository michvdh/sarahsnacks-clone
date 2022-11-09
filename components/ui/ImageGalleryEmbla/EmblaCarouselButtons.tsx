import React from "react";
import classes from "./embla.module.scss";
import Image from "next/image";
import { Fragment } from "react";

interface NavButtonInterface {
  selected: boolean;
  onClick: () => void;
  navType: string;
  imgSource: string;
}

export const NavButton = ({ selected, onClick, navType, imgSource }) => (
  <Fragment>
    {(navType === 'dot') ?
      <button
        className={`${classes[`embla__dot`]} ${selected ? classes[`is-selected`] : ""}`}
        type="button"
        onClick={onClick}
      /> :
      <Image
        className={`${classes[`embla__dot`]} ${selected ? classes[`is-selected`] : ""}`}
        src={imgSource}
        width={100}
        height={120}
        onClick={onClick}
      />
    }
  </Fragment>
);

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className={`${classes[`embla__button`]} ${classes[`embla__button--prev`]}`}
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
      <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
    </svg>
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className={`${classes[`embla__button`]} ${classes[`embla__button--next`]}`}
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
      <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
    </svg>
  </button>
);