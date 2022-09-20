import { ProductsDBModel } from "../../model/productsDBModel.model";
import ProductBasicDetails from "../../ui/ProductBasicDetails";
import ProductMinDetails from "../../ui/ProductMinDetails";
import classes from "./SearchResults.module.scss";

interface SearchResultsProps {
  showProducts: boolean | ProductsDBModel[];
  displayType: string;
}

const SearchResults: React.FC<SearchResultsProps> = (props) => {

  const classDisplayType = props.displayType === "min-details" ? "grid-type" : "column-type";

  return (
    <div className={`${classes["search-results"]} ${classes[classDisplayType]}`}>
      {!props.showProducts ?
        <p>No results found</p> :
        (props.displayType === "min-details" ? 
          props.showProducts.map((product: ProductsDBModel) => ( 
            <ProductMinDetails
              key={product.id}
              id={product.id}
              productName={product.productName}
              otherName={product.otherName}
              imagesFolder={product.images.folderName}
              images={product.images.thumbnailRegular}
              category={product.category}
              variations={product.variations}
              btnLabel="Add to Cart"
            />
            // <p>{product.id}</p>
          )) :
          props.showProducts.map((product: ProductsDBModel) => ( 
            <ProductBasicDetails
              key={product.id}
              productName={product.productName}
              otherName={product.otherName}
              description={product.mainDescription.main}
              imagesFolder={product.images.folderName}
              images={product.images.thumbnailRegular}
              category={product.category}
              variations={product.variations}
            />
          ))
        )
      }
    </div>
  );
};

export default SearchResults;

