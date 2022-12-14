import React, { useState, useEffect, useCallback } from "react";
import {
  NavButton,
  PrevButton,
  NextButton,
} from "../buttons/EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import classes from "./embla.module.scss";
import Image from "next/image";
import { Fragment } from "react";
import { ImageGalleryEmblaModel } from "../../../model/imageGalleryEmblaModel.model";

/*
  embla and embla__viewport
    - controls the size of what is to be displayed by the slide

  embla__container
    - container of all slides stacked in a row
    - slides outside of "embla and embla__viewport" are not displayed

  embla__slide
    - this is the container of the currently displayed image
*/

const EmblaCarousel: React.FC<ImageGalleryEmblaModel> = (props) => {
  const slides = props.images.thumbnailLarge;
  const imagesFolder = props.images.folderName;
  const basePath = `/images/products${imagesFolder}`;

  const [viewportRef, embla] = useEmblaCarousel({
    align: "start",
    dragFree: false,
    inViewThreshold: 0,
    skipSnaps: true,
    loop: true,
    // draggable: false,
    // containScroll: "keepSnaps",
  }); // the parameters make it an infinite carousel

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      {/* main image */}
      <div className={`${classes.embla} ${props.className}`}>
        <div className={`${classes["embla__viewport"]}`} ref={viewportRef}>
          <div className={`${classes[`embla__container`]}`}>
            {slides.map((index) => (
              <div className={`${classes[`embla__slide`]}`} key={index}>
                <div className={`${classes[`embla__slide__inner`]}`}>
                  <div className={`${classes["embla__slide__img-container"]}`}>
                    <Image
                      className={`${classes[`embla__slide__img`]}`}
                      src={`${basePath}${index}`}
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* {(props.navType === "dot") &&
          <Fragment>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
          </Fragment>
        } */}
        <Fragment>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </Fragment>
      </div>

      {/* navigation */}
      <div className={`${classes[`embla__dots`]}`}>
        {scrollSnaps.map((_, index) => (
          <NavButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
            // navType={props.navType}
            // imgSrc={`${basePath}${slides[index]}`}
          />
        ))}
      </div>
    </>
  );
};

export default EmblaCarousel;
