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
import ImageGalleryEmbla from "../ImageGalleryEmbla";
import ImageGalleryEmblaThumbnail from "../ImageGalleryEmblaThumbnail";


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
          <ImageGalleryEmblaThumbnail 
            images={product.images}
            className={''}
          />
          <MainDescription
            id={product.id}
            productName={product.productName}
            otherName={product.otherName}
            nameColor={product.nameColor}
            category={product.category}
            mainDescription={product.mainDescription}
            subDescription={product.subDescription}
            variations={product.variations}
            imagesFolder={product.images.folderName} // to be used by cart
            image={product.images.thumbnailSmall[0]} // to be used by cart
            selectionDetails={additionalInfoHandler}
            confirmation={confirmationHandler}
            className={''}
            onCategorySearch={(category) => {}} // dummy value
            onClick={(e) => {}} // dummy value
            calledBy="ProductCompleteDetails"
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