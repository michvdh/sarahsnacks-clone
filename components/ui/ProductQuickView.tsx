import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./ProductQuickView.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import ProductQuickViewModal from "./modal/ProductQuickViewModal";

interface QuickViewProps {
  id: string;
  productNameDashed: string;
  imagesFolder: string;
  images: string[];
}

// right now, this component isn't accepting the complete details of the product
// I can probably start accepting productID and use it as reference

const ProductQuickView: React.FC<QuickViewProps> = (props) => {
  const [imageHover, setImageHover] = useState(false);
  const [showProductQuickViewModal, setShowProductQuickViewModal] = useState(false);
  // const [quickViewId, setQuickViewId] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const imageHoverHandler = () => {
    setImageHover(!imageHover);
  };

  const basePath = `/images/products${props.imagesFolder}`;
  const numberOfImages = props.images.length;

  const productQuickViewModalHandler = (pid: string) => {
    // console.log("test qv modal handler"); 
    // console.log(pid);
    // setQuickViewId(pid);
    setShowProductQuickViewModal(true);
  }       

  const backdropHandler = () => {
    const newState = !showProductQuickViewModal;
    setShowProductQuickViewModal(newState);
  };


  return (
    <div
      className={`${classes["image-container"]} embla__slide__img-container`}
      // Replace with csshover.. don't use mouseenter, mouseleave
      onMouseEnter={imageHoverHandler} 
      onMouseLeave={imageHoverHandler}
    >
      <Link
        href={{
          pathname: `/product/${props.productNameDashed}`,
          query: {
            id: props.id,
            // ifld: props.imagesFolder
          },
        }}
        passHref
      >
        <a>
          <Image
            className={`${classes["image--front"]} ${
              classes["image"]
            } embla__slide__img ${
              imageHover && numberOfImages > 1 ? "hidden" : ""
            }`}
            src={`${basePath}${props.images[0]}`}
            // alt={props.productName}
            layout="fill"
            // width="150"
            // height="350"
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

      {/* Quick View div should generate a modal when clicked */}
      <div
        className={`${classes["quick-view"]} ${!imageHover ? "hidden" : ""}`}
        onClick={() => productQuickViewModalHandler(props.id)}
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
          onClick={backdropHandler}
        />
      }
    </div>
  );
};

export default ProductQuickView;
