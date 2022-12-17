import { ProductsDBModel } from "../../../model/productsDBModel.model";
import ProductBasicDetails from "../../ui/ProductBasicDetails";
import ProductMinDetails from "../../ui/ProductMinDetails";
import classes from "./SearchResults.module.scss";

interface SearchResultsProps {
  showProducts: ProductsDBModel[] | [];
  displayType: string | string[];
  resultsReady: boolean;
  onCategorySearch: (category: string) => void;
}

const SearchResults: React.FC<SearchResultsProps> = (props) => {

  const classDisplayType = props.displayType === "min-details" ? "grid-type" : "column-type";

  // -- commented this one out for now since we have a page-to-page loading spinner
  // if (!props.resultsReady) {
  //   return (
  //     <div className={`${classes["search-results"]} ${classes[classDisplayType]}`}>
  //       <p>Loading . . .</p>
  //     </div>
  //   );
  // }
  
  if (props.resultsReady) {
    return (
      <div className={`${classes["search-results"]} ${classes[classDisplayType]}`}>
        {props.showProducts.length === 0 ?
          <p>No results found</p> :
          (props.displayType === "min-details" ? 
            props.showProducts.map((product: ProductsDBModel) => ( 
              <ProductMinDetails
                key={product.id}
                id={product.id}
                productName={product.productName}
                otherName={product.otherName}
                category={product.category}
                variations={product.variations}
                imagesFolder={product.images.folderName}
                images={product.images.thumbnailRegular}
                onCategorySearch={props.onCategorySearch}
              />
            )) :
            props.showProducts.map((product: ProductsDBModel) => ( 
              <ProductBasicDetails
                key={product.id}
                id={product.id}
                productName={product.productName}
                otherName={product.otherName}
                description={product.mainDescription.main}
                imagesFolder={product.images.folderName}
                images={product.images.thumbnailRegular}
                category={product.category}
                variations={product.variations}
                onCategorySearch={props.onCategorySearch}
              />
            ))
          )
        }
      </div>
    );
  } else {
    return (
      <div className={`${classes["search-results"]} ${classes[classDisplayType]}`}></div>
    )
  }

};

export default SearchResults;

