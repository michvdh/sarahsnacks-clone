import React, { useState, useEffect, useCallback, useRef } from "react";
import { PrevButton, NextButton } from "../buttons/EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import ProductMinDetails from "../ProductMinDetails";
import productsDB from "../../../model/productsDB";
import emblaClass from "./embla.module.scss";
import Autoplay from "embla-carousel-autoplay";

interface ProductsProps {
  className: string;
}

const EmblaCarouselFave: React.FC<ProductsProps> = (props, slides, options = { loop: false }) => {
  
  const autoplay = useRef(
    Autoplay(
      { delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [emblaRef, embla] = useEmblaCarousel(
    {
      align: "start",
      dragFree: false,
      inViewThreshold: 0,
      skipSnaps: true,
      loop: true,
    },
    [autoplay.current],
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  // const [viewportRef, embla] = useEmblaCarousel({
  //   align: "start",
  //   dragFree: false,
  //   inViewThreshold: 0,
  //   skipSnaps: true,
  //   loop: true,
  // }); // the parameters make it an infinite carousel

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);


  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
    onSelect();
  }, [embla, onSelect]);

  // this filters only the featuredProducts
  const featuredProducts = productsDB.filter((product) => {
    return product.featuredInCarousel == true;
  });

  // created this dummyCategSearch function because of productMinModel
  const dummyCategSearch = () => {
    return;
  };

  return (
    <div className={`${props.className} ${emblaClass.embla}`}>
      <div className={`${emblaClass["embla__viewport"]}`} ref={emblaRef}>
        <div className={`${emblaClass["embla__container"]}`}>
          {featuredProducts.map((product) => (
            <ProductMinDetails
              key={product.id}
              id={product.id}
              productName={product.productName}
              otherName={product.otherName}
              imagesFolder={product.images.folderName}
              images={product.images.thumbnailRegular}
              category={product.category}
              variations={product.variations}
              onCategorySearch={dummyCategSearch}
            />
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarouselFave;
