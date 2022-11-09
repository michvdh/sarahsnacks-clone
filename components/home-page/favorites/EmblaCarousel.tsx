import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "../../ui/EmblaCarouselButton";
import useEmblaCarousel from "embla-carousel-react";
import ProductMinDetails from "../../ui/ProductMinDetails";
import productsDB from "../../../model/productsDB";

// import { useInfiniteScroll } from "./useInfiniteScroll";
// import { mediaByIndex } from "../media";
// import "./embla.scss";

// const mockApiCall = (minWait: number, maxWait: number, callback) => {
//   const min = Math.ceil(minWait);
//   const max = Math.floor(maxWait);
//   const wait = Math.floor(Math.random() * (max - min + 1)) + min;
//   setTimeout(callback, wait);
// };

interface ProductsProps {
  className: string;
}

const EmblaCarousel: React.FC<ProductsProps> = (props) => {
  // const [hasMoreToLoad, setHasMoreToLoad] = useState(true);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const [viewportRef, embla] = useEmblaCarousel({
    align: "start",
    dragFree: false,
    inViewThreshold: 0,
    skipSnaps: true,
    loop: true,
  }); // the parameters make it an infinite carousel

  // const loadingMore = useInfiniteScroll(embla, props.slides, hasMoreToLoad);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  // useEffect(() => {
  //   if (!loadingMore) return;
  //   mockApiCall(1000, 2000, () => {
  //     props.setSlides((currentSlides: number[]) => {
  //       console.log(currentSlides);
  //       if (currentSlides.length === 9) {
  //         setHasMoreToLoad(false);
  //         return currentSlides;
  //       }
  //       const newSlideCount = currentSlides.length + 4;
  //       return Array.from(Array(newSlideCount).keys());
  //     });
  //   });
  // }, [props.setSlides, loadingMore]);

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
    <div className={`${props.className} embla`}>
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {featuredProducts.map((product) => (
            <ProductMinDetails
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

          {/* {hasMoreToLoad && (
            <div className="embla__slide embla__slide--loading">
              <div className="embla__slide__inner embla__slide__inner--loading">
                {loadingMore && <div className="embla__slide__loading" />}
              </div>
            </div>
          )} */}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel;
