import classes from "./ProductBasicDetails.module.scss";
import { ProductBasicModel } from "../../model/productBasicModel.model";
import ProductQuickView from "./ProductQuickView";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";
import { useEffect, useState } from "react";
import AddToCartSuccessModal from "./modal/AddToCartSuccessModal";
import { modalActions } from "../../store/modal";

const ProductBasicDetails: React.FC<ProductBasicModel> = (props) => {
  const showAddToCartModalState = useSelector((state: { modal: {addItemSuccesModal: boolean}}) => state.modal.addItemSuccesModal);

  const [showSuccessModal, setShowSuccessModal] = useState(showAddToCartModalState);

  const productName = props.otherName
    ? props.otherName
    : props.productName[1] === ""
    ? props.productName[0]
    : props.productName[0] + " " + props.productName[1];

  const productNameDashed = productName
    .replace("&", "")
    .replace(/\s+/g, "-")
    .toLocaleLowerCase();

  const categoryLength = props.category.length - 1;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        productName: `${props.productName[0]} ${
          props.productName[1] && props.productName[1]
        }`,
        varPrice: props.variations[0].price,
        varSize: props.variations[0],
        qty: 1,
      })
    );

    addToCartModalHandler(!showSuccessModal);
  };

  const addToCartModalHandler = (modalState: boolean) => {
    dispatch(
      modalActions.showAddToCartSuccessModal({
        addItemSuccesModal: modalState,
      })
    );

    setShowSuccessModal(modalState);
  };

  const backdropHandler = () => {
    const newState = !showSuccessModal;

    dispatch(
      modalActions.showAddToCartSuccessModal({
        addItemSuccesModal: newState,
      })
    );
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

  return (
    <figure className={`${classes["product-basic-details"]}`}>
      <ProductQuickView
        id={props.id}
        productNameDashed={productNameDashed}
        imagesFolder={props.imagesFolder}
        images={props.images}
      />
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
        <span className={`${classes["price-range"]}`}>
          {getPriceRange(props.variations)}
        </span>
        <p>{props.description}</p>
        {/* <Link
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
            {props.variations.length > 1 ? "Select Options" : "Add to Cart"}
          </a>
        </Link> */}
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

        {props.variations.length === 1 && (
          <a
            className={`btn btn--thick-font btn--green btn--small btn--featured ${classes.btn}`}
            onClick={addToCartHandler}
          >
            Add to Cart
          </a>
        )}
      </figcaption>
      {(showSuccessModal === true) && <AddToCartSuccessModal onClick={backdropHandler} />}
    </figure>
  );
};

export default ProductBasicDetails;
