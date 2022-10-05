import Link from 'next/link';
import classes from "./ProductMinDetails.module.scss";
import { ProductMinModel } from '../../model/productMinModel.model';
import ProductQuickView from "./ProductQuickView";
import getPriceRange from '../helpers/getPriceRange';
import changeToKebabCase from '../helpers/changeToKebabCase';

const ProductMinDetails: React.FC<ProductMinModel> = (props) => {

  const productNameDashed = changeToKebabCase(props.productName, props.otherName);

  const productURL =
    `/product/${productNameDashed}/?id=${props.id}`;

  return (
    <figure
      className={`embla__slide ${classes["featured-item"]} featured-item`}
      key={props.id}
    >
      <div className="embla__slide__inner">
        <ProductQuickView
          id={props.id}
          productNameDashed={productNameDashed}
          productURL={productURL}
          imagesFolder={props.imagesFolder}
          images={props.images}
        />

        <figcaption className="embla__slide__caption">
          <p className={`${classes["category-container"]}`}>
            {props.category.map((category, index) => (
              <a
                href={`/product-category/${category
                  .replace(" ", "-")
                  .toLowerCase()}`}
                key={index}
                className={`category ${classes.category}`}
              >
                {category}{index !== (props.category.length - 1) ? ", " : ""}
              </a>
            ))}
          </p>
          <Link
            href={{
              pathname: `/product/${productNameDashed}`,
              query: {
                id: props.id
              },
            }}
            // as={`/product/${productNameDashed}`}
              // I commented out "as" because I needed id to show in the url. This way, when a user simply copies a link of the product, we can load the dynamic page
          >
            <h2>
              <a href={productURL} className={`product-name`}>
                {props.productName.length > 1 ? `${props.productName[0]} ${props.productName[1]}` : props.productName[0]}
              </a>
            </h2>
          </Link>
          <span className={`${classes["price-range"]}`}>{getPriceRange(props.variations)}</span>
          <a
            className={`btn btn--thick-font btn--green btn--small btn--featured ${classes.btn}`}
            href={productURL}
          >
            {props.btnLabel}
          </a>
        </figcaption>
      </div>
    </figure>
  );
};

export default ProductMinDetails;
