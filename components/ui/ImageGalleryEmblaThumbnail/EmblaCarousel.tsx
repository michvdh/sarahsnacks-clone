import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumb";
// import { mediaByIndex } from "../media";
import "./embla.module.scss";
import { ImageGalleryEmblaModel } from "../../../model/imageGalleryEmblaModel.model";
import Image from "next/image";
import classes from "./embla.module.scss";
import { Fragment } from "react";
import Zoom from "../ImageGalleryEmbla/Zoom";

const EmblaCarousel: React.FC<ImageGalleryEmblaModel> = (props) => {
  const slides = props.images.thumbnailLarge;
  const slidesHD = props.images.hd;
  const imagesFolder = props.images.folderName;
  const basePath = `/images/products${imagesFolder}`;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });

  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    selectedClass: "",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <>
      <div className={classes.embla}>
        <div className={`${classes["embla__viewport"]}`} ref={mainViewportRef}>
          <div className={`${classes[`embla__container`]}`}>
            {slides.map((slide, index) => (
              <div className={`${classes[`embla__slide`]}`} key={index}>
                <div
                  className={`${classes[`embla__slide__inner`]}`}
                  key={index}
                >
                  <div>
                    {/* <div className={`${classes["embla__slide__img-container"]}`}> */}
                    {/* <Image
                        className={`${classes[`embla__slide__img`]}`}
                        src={`${basePath}${slide}`}
                        layout='fill'
                      /> */}
                    <Zoom
                      // containerClass={`${classes["embla__slide__img-container"]}`}
                      key={index}
                      imageClass={`${classes[`embla__slide__img`]}`}
                      src={`${basePath}${slide}`}
                      srcHD={`${basePath}${slidesHD[index]}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${classes["embla embla--thumb"]}`}>
        <div className={`${classes["embla__viewport"]}`} ref={thumbViewportRef}>
          <div
            className={`${classes["embla__container"]} ${classes["embla__container--thumb"]}`}
          >
            {slides.map((slide, index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex ? true : false}
                imgSrc={`${basePath}${slide}`}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
