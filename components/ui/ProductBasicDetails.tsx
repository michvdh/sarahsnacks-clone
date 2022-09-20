import classes from "./ProductBasicDetails.module.scss";
import { ProductBasicModel } from "../model/productBasicModel.model";
import ProductQuickView from "./ProductQuickView";

const ProductBasicDetails: React.FC<ProductBasicModel> = (props) => {
  const productName = props.otherName ? props.otherName : (props.productName[1] === "" ? props.productName[0] : (props.productName[0] + " " + props.productName[1]));

  const productNameDashed = productName.replace("&","").replace(/\s+/g,"-").toLocaleLowerCase();

  const productURL =
    `/products/${productNameDashed}`;

  const categoryLength = props.category.length - 1;

  const getPriceRange = (variations: ProductBasicModel["variations"]) => {
    const priceVariationLength = variations.length;

    const priceRangeArr = variations.map((variation) => variation.price).sort();

    const priceRange =
      priceVariationLength > 1
        ? `$${priceRangeArr[priceRangeArr.length - 1].toFixed(
            2
          )} - $${priceRangeArr[0].toFixed(2)}`
        : `$${priceRangeArr[0].toFixed(2)}`;

    return priceRange;
  };

  return (
    <figure className={`${classes["product-basic-details"]}`}>
      <ProductQuickView
        id={props.key}
        productNameDashed={productNameDashed}
        productURL={productURL}
        imagesFolder={props.imagesFolder}
        images={props.images}
      />
      <figcaption>
        <p className={`${classes["category-container"]}`}>
          {props.category.map((category, index) => (
            <a
              href={`https://sarahssnacks.com/product-category/${category
                .replace(" ", "-")
                .toLowerCase()}`}
              key={index}
              className={`category ${classes.category}`}
            >
              {category}
              {index !== categoryLength ? ", " : ""}
            </a>
          ))}
        </p>
        <h2>
          <a href={productURL} className={`product-name`}>
            {productName}
          </a>
        </h2>
        <span className={`${classes["price-range"]}`}>
          {getPriceRange(props.variations)}
        </span>
        <p>{props.description}</p>
        <a
          className={`btn btn--thick-font btn--green btn--small btn--featured ${classes.btn}`}
          href={productURL}
        >
          Add to Cart
        </a>
      </figcaption>
    </figure>
  );
};

export default ProductBasicDetails;
