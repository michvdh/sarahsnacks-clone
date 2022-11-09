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
  // allProducts: ProductsDBModel[];
}

const ProductQuickViewModal: React.FC<ProductQuickViewModalInterface> = (
  props
) => {
  let productID = props.id;
  let pIndex;
  let product;
  let variationLength;
  const [productsDB, setProductsDB] = useState([]);
  
  const allData = async() => {
    const response = await fetch('https://sarahsnacks-clone-default-rtdb.firebaseio.com/productsDB.json');
    const data = await response.json();
    setProductsDB(data);
  }

  useEffect(() => {
    allData();
  }, []);
  

  if (productsDB.length > 0) {
    pIndex = productsDB.findIndex((p) => p.id === productID);
    product = productsDB[pIndex];
    variationLength = product.variations.length;
    
    console.log(pIndex);
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


  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, backdrop)}

      {product && !addToCartConfirmation && ReactDOM.createPortal(
        <div className={classes['product-qv-overlay']}>
          <div className={classes.close}>
            <button onClick={props.onClick}>×</button>
          </div>
          <div className={classes.main}>
            <ImageGalleryEmbla
              images={product.images}
              navType="dot" // navType = "dot" or "image"
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
            />
          </div>
        </div>,
        productQuickViewOverlay
      )}

      {addToCartConfirmation && <AddToCartSuccessModal onClick={props.onClick} />}
    </Fragment>
  );
};

export default ProductQuickViewModal;
