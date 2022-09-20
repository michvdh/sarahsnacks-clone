import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./ProductQuickView.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

interface QuickViewProps {
  id: string;
  productURL: string;
  productNameDashed: string;
  imagesFolder: string;
  images: string[];
}

// right now, this component isn't accepting the complete details of the product
// I can probably start accepting productID and use it as reference

const ProductQuickView: React.FC<QuickViewProps> = (props) => {
  const [imageHover, setImageHover] = useState(false);

  const imageHoverHandler = () => {
    setImageHover(!imageHover);
  };

  const basePath = `/images/products${props.imagesFolder}`;
  const numberOfImages = props.images.length;

  return (
    <div
      className={`${classes["image-container"]} embla__slide__img-container`}
      onMouseEnter={imageHoverHandler}
      onMouseLeave={imageHoverHandler}
    >
      <Link
        href={{
          pathname: `/product/${props.productNameDashed}`,
          query: {
            id: props.id,
          },
        }}
        // as={`/product/${props.productNameDashed}`}
      >
        <a href={props.productURL}>
          <Image
            className={`${classes["image--front"]} ${
              classes["image"]
            } embla__slide__img ${
              imageHover && numberOfImages > 1 ? "hidden" : ""
            }`}
            src={`${basePath}${props.images[0]}`}
            // alt={props.productName}
            layout="fill"
          />
          {numberOfImages > 1 ? (
            <Image
              className={`${classes["image--back"]} ${
                classes["image"]
              } embla__slide__img ${!imageHover ? "hidden" : ""}`}
              src={`${basePath}${props.images[1]}`}
              // alt={props.productName}
              layout="fill"
            />
          ) : (
            ""
          )}
        </a>
      </Link>
      <div
        className={`${classes["quick-view"]} ${!imageHover ? "hidden" : ""}`}
      >
        <span>
          <FontAwesomeIcon
            className={`fa-icon--white fa-icon--left`}
            icon={faEye}
          />
        </span>
        <span className={`quick-view-text`}>Quick View</span>
      </div>
    </div>
  );
};

export default ProductQuickView;
