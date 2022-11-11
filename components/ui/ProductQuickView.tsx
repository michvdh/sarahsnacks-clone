import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./ProductQuickView.module.scss";
import emblaClass from "./FavoritesCarouselEmbla/embla.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import ProductQuickViewModal from "./modal/ProductQuickViewModal";
import Loading from "../ui/Loading";

interface QuickViewProps {
  id: string;
  productNameDashed: string;
  imagesFolder: string;
  images: string[];
}

// right now, this component isn't accepting the complete details of the product
// I can probably start accepting productID and use it as reference

const ProductQuickView: React.FC<QuickViewProps> = (props) => {
  const [showProductQuickViewModal, setShowProductQuickViewModal] = useState(false);
  // const [qvClicked, setQVClicked] = useState(false);
  const [fetched, setFetched] = useState(false);

  const basePath = `/images/products${props.imagesFolder}`;
  const numberOfImages = props.images.length;

  const overlayHandler = () => {
    const newState = !showProductQuickViewModal;
    setShowProductQuickViewModal(newState);
  }; // used by close button and backdrop to close the modal

  const productQuickViewModalHandler = () => {
    setShowProductQuickViewModal(true);
    setFetched(false);
  } 

  const fetchStateHandler = () => {
    setFetched(true); 
  } // used by loading indicator in ProductQuickView


  return (
    <div
      className={`${classes["image-container"]} ${emblaClass['embla__slide__img-container']}`}
    >
      <Link
        href={{
          pathname: `/product/${props.productNameDashed}`,
          query: {
            id: props.id,
          },
        }}
        passHref
      >
        <a className={`${classes.link}`}>
          <Image
            className={`
              ${classes["image--front"]} 
              ${classes["image"]} 
              ${emblaClass['embla__slide__img']} 
            `}
            src={`${basePath}${props.images[0]}`}
            alt={props.productNameDashed}
            layout="fill"
            // width="150"
            // height="350"
          />
          {numberOfImages > 1 ? (
            <Image
              className={`
                ${classes["image--back"]} 
                ${classes["image"]} 
                ${emblaClass['embla__slide__img']} 
                
              `}
              src={`${basePath}${props.images[1]}`}
              alt={props.productNameDashed}
              layout="fill"
            />
          ) : ("")}

          {showProductQuickViewModal && !fetched && 
            // <div className={classes.loading}>
            //   <p>Loading</p>
            // </div>
            <div className={classes['spinner-wrapper']}>
              <div className={classes.spinner}></div>
              {/* <p>Loading</p> */}
            </div>
          }
        </a>
      </Link>

      {/* Quick view button */}
      <div
        className={`${classes["quick-view"]}`}
        onClick={productQuickViewModalHandler}
      >
        <span>
          <FontAwesomeIcon
            className={`fa-icon--white fa-icon--left`}
            icon={faEye}
          />
        </span>
        <span className={`quick-view-text`}>Quick View</span>
      </div>
      {showProductQuickViewModal &&
        <ProductQuickViewModal 
          id={props.id}
          onClick={overlayHandler}
          fetching={fetchStateHandler}
          // fetched={fetched}
        />
      }
    </div>
  );
};

export default ProductQuickView;
