import classes from "./ProductBasicDetails.module.scss";
import { ProductBasicModel } from "../../model/productBasicModel.model";
import ProductQuickView from "./ProductQuickView";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";
import { useEffect, useState } from "react";
import AddToCartSuccessModal from "./modal/AddToCartSuccessModal";
import changeToKebabCase from "../helpers/changeToKebabCase";
import {CartStateModel} from "../../model/cartStateModel.model";


const ProductBasicDetails: React.FC<ProductBasicModel> = (props) => {
  const [showSuccessModal, setShowSuccessModal] = useState(
    false
  );

  const productNameDashed = changeToKebabCase(
    props.productName, props.otherName
  );

  const categoryLength = props.category.length - 1;

  const cartItems = useSelector(
    (state: { cart: CartStateModel }) => state.cart.cartItems
  );

  let inCart = false;

  cartItems.every((item) => {
    if (item.id === props.id) {
      inCart = true;
      return false;
    }
    return true;
  });

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        productName: `${props.productName[0]} ${
          props.productName[1] && props.productName[1]
        }`,
        otherName: props.otherName,
        varPrice: props.variations[0].price,
        varSize: props.variations[0].size,
        qty: 1,
        imagesFolder: props.imagesFolder,
        image: props.images[0]
      })
    );

    addToCartModalHandler(!showSuccessModal);
  };

  const addToCartModalHandler = (modalState: boolean) => {
    setShowSuccessModal(modalState);
  };

  const backdropHandler = () => {
    const newState = !showSuccessModal;
    setShowSuccessModal(newState);
  };

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


  // -- used to control description length -- //
  const filterAr = (desc) => {
    return desc !== "";
  }

  const paragraph = props.description.map(desc => {
    return desc.filter(filterAr).join(" ");
  }).join(" ");

  const parAr = paragraph.split(" ");
  const initParLength = parAr.length;

  parAr.length > 50 && parAr.splice(50, parAr.length - 50);

  const description = initParLength <= 50 ? parAr.join(" ") : parAr.join(" ").concat("...");

  // -- -- -- //


  return (
    <figure className={`${classes["product-basic-details"]}`}>
      <div className={classes.image}>
        <ProductQuickView
          id={props.id}
          productNameDashed={productNameDashed}
          imagesFolder={props.imagesFolder}
          images={props.images}
        />
      </div>
      <figcaption>
        <p className={`${classes["category-container"]}`}>
          {props.category.map((category, index) => (
            <Link
              href={{
                pathname: `/shop`,
                query: {
                  category: category,
                  page: 1,
                  sort: "default",
                  display: "12",
                  style: "min-details",
                },
              }}
              passHref
              shallow
            >
              <a
                key={index}
                onClick={() => {
                  props.onCategorySearch(category);
                }}
                className={`category ${classes.category}`}
              >
                {category}
                {index !== categoryLength ? ", " : ""}
              </a>
            </Link>
          ))}
        </p>

        <h2>
          <Link
            href={{
              pathname: `/product/${productNameDashed}`,
              query: {
                id: props.id,
              },
            }}
            passHref
          >
            <a className={`product-name`}>
              {props.productName.length > 1
                ? `${props.productName[0]} ${props.productName[1]}`
                : props.productName[0]}
            </a>
          </Link>
        </h2>

        <span className={`${classes["price-range"]} price-range`}>
          {getPriceRange(props.variations)}
        </span>

        <p className={classes.description}>{description}</p>

        {props.variations.length > 1 && (
          <Link
            href={{
              pathname: `/product/${productNameDashed}`,
              query: {
                id: props.id,
              },
            }}
            passHref
          >
            <a
              className={`${classes.btn} btn btn--thick-font btn--green btn--small btn--featured ${classes.btn}`}
            >
              Select Options
            </a>
          </Link>
        )}

        {props.variations.length === 1 &&
          (inCart ? (
            <Link
              href={{
                pathname: `/cart`,
              }}
              passHref
            >
              <a
                className={`${classes.btn} btn btn--thick-font btn--green btn--small btn--featured ${classes.btn}`}
              >
                View Cart
              </a>
            </Link>
          ) : (
            <a
              className={`${classes.btn} btn btn--thick-font btn--green btn--small btn--featured ${classes.btn}`}
              onClick={addToCartHandler}
            >
              Add to Cart
            </a>
          ))}
      </figcaption>
      {showSuccessModal === true && (
        <AddToCartSuccessModal onClick={backdropHandler} />
      )}
    </figure>
  );
};

export default ProductBasicDetails;
