import Image from "next/image";
import { Fragment, useState } from "react";
import getPriceRange from "../../helpers/getPriceRange";
import { ProductsDBModel } from "../../../model/productsDBModel.model";
import AdditionalInfo from "./AdditionalInfo";
import ImageGallery from "./ImageGallery";
import MainDescription from "./MainDescription";
import classes from "./ProductCompleteDetails.module.scss";

const ProductCompleteDetails: React.FC<{product: ProductsDBModel}> = (props) => {
  const product = props.product;
  const variationLength = product.variations.length;
  const [variationIndex, setVariationIndex] = useState(0);
  const [selectionStatus, setSelectionStatus] = useState(variationLength > 1 ? false : true)

  const additionalInfoHandler = (vIndex: number, hasSelection: boolean) => {
    setVariationIndex(vIndex);
    setSelectionStatus(hasSelection);
  }
  
  return (
    <div className={`${classes['product-complete-details']}`}>
      {/* Upper */}
      <div className={`${classes.upper}`}>
        <ImageGallery images={product.images} />
        <MainDescription 
          productName={product.productName}
          nameColor={product.nameColor}
          category={product.category}
          mainDescription={product.mainDescription}
          variations={product.variations}
          selectionDetails={additionalInfoHandler}
        />
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