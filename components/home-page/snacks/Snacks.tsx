import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import classes from './Snacks.module.scss';
import Image from "next/image";

const Snacks = () => {
  return (
    <section className={`${classes.snacks} snacks`}>
      <div className={`${classes['text-container']} text-container`}>
        <h1>
          Don't miss out on
          <br/>
          <span>A chance to get:</span>
        </h1>
        <ul>
          <li>
            <div>
              <FontAwesomeIcon className={`${classes['fa-icon']} fa-icon`} icon={faArrowRight} />
            </div>
            <span>Great snacks containing organic ingredients</span>
          </li>
          <li>
            <div>
              <FontAwesomeIcon className={`${classes['fa-icon']} fa-icon`} icon={faArrowRight} />
            </div>
            <span>Paleo snacks</span>
          </li>
          <li>
            <div>
              <FontAwesomeIcon className={`${classes['fa-icon']} fa-icon`} icon={faArrowRight} />
            </div>
            <span>Dairy-free snacks</span>
          </li>
          <li>
            <div>
              <FontAwesomeIcon className={`${classes['fa-icon']} fa-icon`} icon={faArrowRight} />
            </div>
            <span>Gluten-free snacks</span>
          </li>
        </ul>
        <button className={`btn btn--light-brown btn--large btn--thick-font`}>Shop Now</button>
      </div>
      <div className={`${classes['image-container']}`}>
        <div>
          <Image
            className={classes.image}
            src="/images/snacks.jpg"
            alt="Snacks image"
            layout="fill"
          />
        </div>
      </div>
    </section>
  )
}

export default Snacks;