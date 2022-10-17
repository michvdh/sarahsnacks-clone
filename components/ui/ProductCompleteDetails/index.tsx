import Image from "next/image";
import { Fragment, useState } from "react";
import getPriceRange from "../../helpers/getPriceRange";
import { ProductsDBModel } from "../../../model/productsDBModel.model";
import AdditionalInfo from "./AdditionalInfo";
import ImageGallery from "./ImageGallery";
import MainDescription from "./MainDescription";
import classes from "./ProductCompleteDetails.module.scss";
import AddToCartConfirmation from "./AddToCartConfirmation";
import { useSelector, useDispatch } from "react-redux";

const ProductCompleteDetails: React.FC<{product: ProductsDBModel}> = (props) => {
  const product = props.product;
  const variationLength = product.variations.length;
  const [variationIndex, setVariationIndex] = useState(0);
  const [selectionStatus, setSelectionStatus] = useState(variationLength > 1 ? false : true)
  const [addToCartConfirmation, setAddToCartConfirmation] = useState(false);
  const [newItemQuantity, setNewItemQuantity] = useState(0);
  const [newItemProductName, setNewItemProductName] = useState('');

  const additionalInfoHandler = (vIndex: number, hasSelection: boolean) => {
    setVariationIndex(vIndex);
    setSelectionStatus(hasSelection);
  }

  const confirmationHandler = (quantity: number, productName: string) => {
    setAddToCartConfirmation(true);
    setNewItemQuantity(quantity);
    setNewItemProductName(productName);
  }

  console.log(addToCartConfirmation);
  
  return (
    <div className={`${classes['product-complete-details']}`}>
      {/* Upper */}
      <div className={`${classes.upper}`}>
        {addToCartConfirmation && 
          <AddToCartConfirmation 
            quantity={newItemQuantity}
            productName={newItemProductName}
          />
        }
        <div className={`${classes['upper__main']}`}>
          <ImageGallery images={product.images} />
          <MainDescription
            id={product.id}
            productName={product.productName}
            nameColor={product.nameColor}
            category={product.category}
            mainDescription={product.mainDescription}
            variations={product.variations}
            selectionDetails={additionalInfoHandler}
            confirmation={confirmationHandler}
          />
        </div>
      </div>
      {/* Lower */}
      <div className={`${classes.lower}`}>
        <AdditionalInfo
          vIndex={variationIndex}
          selectionStatus={selectionStatus}
          variations={product.variations}
          subDescription={product.subDescription}
          additionalInfo={product.additionalInfo}
        />
      </div>
    </div>
  );
}

export default ProductCompleteDetails;