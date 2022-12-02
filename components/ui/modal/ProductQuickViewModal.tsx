import MainDescription from "../ProductCompleteDetails/MainDescription";
import { ProductsDBModel } from "../../../model/productsDBModel.model";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Backdrop from "./Backdrop";
import ReactDOM from "react-dom";
import { getAllProducts } from "../../helpers/apiUtils";
import classes from "./ProductQuickViewModal.module.scss";
import AddToCartSuccessModal from "./AddToCartSuccessModal";
import ImageGalleryEmbla from "../../ui/ImageGalleryEmbla/index";
import { produceWithPatches } from "immer";

// export async function getStaticProps() {
//   const allProducts = await getAllProducts();

//   return {
//     props: {
//       allProducts: allProducts,
//     },
//   };
// }

interface ProductQuickViewModalInterface {
  id: string;
  onClick: () => void;
  fetching: () => void;
  // fetched: boolean;
  // allProducts: ProductsDBModel[];
}

const ProductQuickViewModal: React.FC<ProductQuickViewModalInterface> = (
  props
) => {
  let productID = props.id;
  let pIndex;
  let product: ProductsDBModel | null = null;
  let variationLength: number = 0;
  const [productsDB, setProductsDB] = useState([]);
  const [closeWindow, setCloseWindow] = useState(false);

  const allData = async () => {
    const response = await fetch('https://sarahsnacks-clone-default-rtdb.firebaseio.com/productsDB.json');
    const data = await response.json();
    setProductsDB(data);
  }

  useEffect(() => {
    allData();
  }, []);

  useEffect(() => {
    (productsDB.length > 0) && props.fetching();
  }, [productsDB]); // used by loading indicator in ProductQuickView



  if (productsDB.length > 0) {
    pIndex = productsDB.findIndex((p: ProductsDBModel) => p.id === productID);
    product = productsDB[pIndex];
    variationLength = product.variations.length;
  }

  const backdrop = document.getElementById("backdrop-root")!;
  const productQuickViewOverlay = document.getElementById(
    "product-quick-view-root"
  )!;


  const [variationIndex, setVariationIndex] = useState(0);
  const [selectionStatus, setSelectionStatus] = useState(
    variationLength > 1 ? false : true
  );
  const [addToCartConfirmation, setAddToCartConfirmation] = useState(false);
  const [newItemQuantity, setNewItemQuantity] = useState(0);
  const [newItemProductName, setNewItemProductName] = useState("");

  const additionalInfoHandler = (vIndex: number, hasSelection: boolean) => {
    setVariationIndex(vIndex);
    setSelectionStatus(hasSelection);
  };

  const confirmationHandler = (quantity: number, productName: string) => {
    setAddToCartConfirmation(true);
    setNewItemQuantity(quantity);
    setNewItemProductName(productName);
  };

  const closeHandler = (e) => {
    if (e.target === e.currentTarget) {
      setCloseWindow(true);
      setTimeout(() => props.onClick(), 220);
      // adjust based on close animate -> ProductQuickViewModal.module.scss
    }
  }

  return (
    <Fragment>
      {/* {product && !addToCartConfirmation && ReactDOM.createPortal(<Backdrop onClick={closeHandler} />, backdrop)} */}

      {product !== null && !addToCartConfirmation && ReactDOM.createPortal(
        <div className={classes['product-qv-modal']} onClick={closeHandler}>
          <div className={classes['product-qv-container']} onClick={closeHandler}>
            <div className={classes['product-qv-wrap']} onClick={closeHandler}>
              <div className={`${classes['product-qv-inner']} ${closeWindow ? classes['animate-close'] : classes['animate-open']}`}>
                <div className={classes.main}>
                  <ImageGalleryEmbla
                    images={product.images}
                    className={classes['image-gallery-embla']}
                    // navType="dot" // navType = "dot" or "image"
                  />
                  <MainDescription
                    id={product.id}
                    productName={product.productName}
                    otherName={product.otherName}
                    nameColor={product.nameColor}
                    category={product.category}
                    mainDescription={product.mainDescription}
                    variations={product.variations}
                    imagesFolder={product.images.folderName}
                    image={product.images.thumbnailSmall[0]}
                    selectionDetails={additionalInfoHandler}
                    confirmation={confirmationHandler}
                    className={classes['main-description']}
                  />
                  <button className={classes['btn--close']} onClick={closeHandler}>×</button>
                </div>
              </div>
            </div>
          </div>
        </div>,
        productQuickViewOverlay
      )}

      {addToCartConfirmation && <AddToCartSuccessModal onClick={props.onClick} />}
    </Fragment>
  );
};

export default ProductQuickViewModal;
