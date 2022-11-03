import Link from "next/link";
import classes from "./ProductMinDetails.module.scss";
import { ProductMinModel } from "../../model/productMinModel.model";
import ProductQuickView from "./ProductQuickView";
import getPriceRange from "../helpers/getPriceRange";
import changeToKebabCase from "../helpers/changeToKebabCase";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";
import { useEffect, useState } from "react";
import AddToCartSuccessModal from "./modal/AddToCartSuccessModal";
import {CartStateModel} from '../../model/cartStateModel.model';


const ProductMinDetails: React.FC<ProductMinModel> = (props) => {
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

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const productNameDashed = changeToKebabCase(
    props.productName, props.otherName
  );

  const categoryLength = props.category.length - 1;

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

  return (
    <figure
      className={`embla__slide ${classes["featured-item"]} featured-item`}
      key={props.id}
    >
      <div className="embla__slide__inner">
        <ProductQuickView
          id={props.id}
          productNameDashed={productNameDashed}
          imagesFolder={props.imagesFolder}
          images={props.images}
        />

        <figcaption className="embla__slide__caption">
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
                key={index}
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

          <span className={`${classes["price-range"]}`}>
            {getPriceRange(props.variations)}
          </span>

          {/* ---- Button ---- */}
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
                className={`btn btn--thick-font btn--green btn--small btn--featured ${classes.btn}`}
              >
                Select Options
              </a>
            </Link>
          )}

          {props.variations.length === 1 &&
            (inCart ? (
              <Link
                href={{
                  pathname: `/cart`
                }}
                passHref
              >
                <a className={`btn btn--thick-font btn--green btn--small btn--featured ${classes.btn}`}>View Cart</a>
              </Link>
            ) : (
              <a
                className={`btn btn--thick-font btn--green btn--small btn--featured ${classes.btn}`}
                onClick={addToCartHandler}
              >
                Add to Cart
              </a>
            ))
          }
        </figcaption>
      </div>

      {showSuccessModal === true && (
        <AddToCartSuccessModal onClick={backdropHandler} />
      )}
    </figure>
  );
};

export default ProductMinDetails;
