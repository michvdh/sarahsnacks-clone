import React from 'react';
import { useState } from 'react';
import classes from "./Favorites.module.scss";
import EmblaCarouselFave from "../../ui/FavoritesCarouselEmbla/EmblaCarouselFave";
import Image from 'next/image';
import Link from 'next/link';

const Favorites = () => {
  const [slides, setSlides] = useState<number[]>([0, 1, 2, 3]);

  const setSlidesHandler = (newSlides: number[]) => {
    setSlides(newSlides);
  }

  return (
    <section className={`${classes.favorites} favorites`}>
      {/* <EmblaCarouselFave className={`${classes.carousel}`} /> */}
      <EmblaCarouselFave />

      <div className={`${classes['side']}`}>
        <div className={`${classes['side-text']} side-text`}>
          <h1>
            Try one<br/>
            of our<br/>
            <span>favorites</span>
          </h1>
          <p>Enjoy your snacking experience. New here and not sure what to try first? Check out some of our most popular snacks and products.</p>
          <Link href={"/shop"} passHref>
            <a className={`btn btn--large btn--green btn--thick-font`}>Shop Now</a>
          </Link>
        </div>
        <div className={`${classes['image-container']}`}>
          <div>
            <Image
              className={classes.image}
              src="/images/granola-bg.jpg"
              alt="Granola image"
              layout="fill"
              // width="100"
              // height="200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favorites;
