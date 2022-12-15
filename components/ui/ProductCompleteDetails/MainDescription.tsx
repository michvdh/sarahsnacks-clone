import { useEffect, useRef, useState } from "react";
import getPriceRange from "../../helpers/getPriceRange";
import classes from "./MainDescription.module.scss";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart";
import QtyErrorModal from "../modal/QtyErrorModal";
import { CartItemsModel } from "../../../model/cartItemsModel.model";
import Link from "next/link";

interface MainDescriptionProps {
  id: string;
  productName: string[];
  otherName: string;
  nameColor: string;
  category: string[];
  imagesFolder: string; // this value will be pushed to cart store
  image: string; // this value will be pushed to cart store
  mainDescription: {
    main: string[][];
    unOrderedList: string[][];
    orderedList: {
      title: string;
      items: string[];
    };
    last: string;
  };
  subDescription: string;
  variations: {
    size: string;
    price: number;
    weight: string;
    dimensions: string;
  }[];
  selectionDetails: (vIndex: number, hasSelection: boolean) => void;
  confirmation: (quantity: number, productName: string) => void;
  className: string;
  onClick: (e) => void;
  onCategorySearch: (category: string) => void;
}

const MainDescription: React.FC<MainDescriptionProps> = (props) => {
  const dispatch = useDispatch();

  const [inputQty, setInputQty] = useState(1);
  const [showQtyInputError, setShowQtyInputError] = useState(false);

  const cart = useSelector(
    (state: { cart: { cartItems: CartItemsModel } }) => state.cart.cartItems
  );

  const quantityInputRef = useRef<HTMLInputElement>(null);
  const tempPName =
    props.productName.length > 1
      ? `${props.productName[0]} ${props.productName[1]}`
      : props.productName[0];
  const productName = capitalizeFirstLetter(tempPName);

  // this will be used if there are multiple variations
  // the values will be the weight
  const [selectedVariation, setSelectedVariation] = useState("");
  const [hasSelection, setHasSelection] = useState(
    props.variations.length === 1 ? true : false
  );

  // this will only be triggered if variations > 1
  const variationsHandler = (variation: string) => {
    if (variation == "Choose an option") {
      setSelectedVariation("");
      setHasSelection(false);
    } else {
      setSelectedVariation(variation);
      setHasSelection(true);
    }
  };

  const vIndex = selectedVariation
    ? props.variations.findIndex((p) => p.size === selectedVariation)
    : 0;

  const varPrice = props.variations[vIndex].price.toFixed(2);
  const varSize = props.variations[vIndex].size;

  useEffect(() => {
    props.selectionDetails(selectedVariation ? vIndex : 0, hasSelection);
  }, [selectedVariation]);

  const incrementQty = () => {
    setInputQty(inputQty + 1);
  };

  const decrementQty = () => {
    if (inputQty > 1) {
      setInputQty(inputQty - 1);
    }
  };

  const inputChangeHandler = (e) => {
    setInputQty(e.target.value);
  };

  const inputExitHandler = (e) => {
    if (e.target.value < 1) {
      setInputQty(1);
      setShowQtyInputError(true);
    }
  };

  const addToCartHandler = () => {
    if (quantityInputRef && quantityInputRef.current && hasSelection) {
      dispatch(
        cartActions.addItem({
          id: props.id,
          productName: productName,
          otherName: props.otherName,
          varPrice: varPrice,
          varSize: varSize,
          qty: quantityInputRef.current?.valueAsNumber,
          imagesFolder: props.imagesFolder,
          image: props.image,
        })
      );

      props.confirmation(quantityInputRef.current.valueAsNumber, productName);
      // values passed here will be used by AddToCartSuccessModal
    }
  };

  const clearHandler = () => {
    setSelectedVariation("");
    setHasSelection(false);
  };

  useEffect(() => {
    if (showQtyInputError) {
      setTimeout(() => setShowQtyInputError(false), 800);
    }
  }, [showQtyInputError]);

  // const mainDescLength = props.mainDescription.main.length;

  const dummyCategSearch = () => {
    return;
  };

  return (
    <Fragment>
      <div className={`${classes["main-description"]} ${props.className}`}>
        {/* Price or Price Range */}
        <span className={`${classes["price-range"]}`}>
          {getPriceRange(props.variations)}
        </span>
        {/* Product name */}
        <div className={classes["product-name"]}>
          <h1
            className={`${classes[`${props.nameColor}`]} ${
              classes["first-header"]
            }`}
          >
            {props.productName[0]}
          </h1>
          {props.productName.length > 1 && (
            <h1
              className={`${classes[`${props.nameColor}`]} ${
                classes["second-header"]
              }`}
            >
              {props.productName[1]}
            </h1>
          )}
        </div>

        {/* Main Description */}
        {props.mainDescription.main && (
          <div className={`${classes["description--main"]}`}>
            {props.mainDescription.main.map((desc: string[], index) => (
              <p key={index}>
                {desc.map((text: string, index) => (
                  <span className={`${index === 0 ? "bold" : ""}`} key={index}>
                    {text} {/* {mainDescLength !== (index -1) ? ' ' : ''} */}
                  </span>
                ))}
              </p>
            ))}
          </div>
        )}

        {/* Unordered list */}
        {props.mainDescription.unOrderedList[0][0] !== "" && (
          <div className={classes["ul--main"]}>
            <ul>
              {props.mainDescription.unOrderedList.map((desc, index) => (
                <li key={index}>
                  {desc.map((text: string, index) => (
                    <span
                      key={index}
                      className={`${index === 0 ? "bold" : ""}`}
                    >
                      {text}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Subdescription */}
        {props.subDescription !== "" && (
          <span className={`${classes["sub-description"]} bold`}>
            {props.subDescription}
          </span>
        )}

        {/* Ordered list */}
        {props.mainDescription.orderedList.items[0] !== "" && (
          <div className={`${classes["ol--main"]}`}>
            <h3>{props.mainDescription.orderedList.title}</h3>
            <ol>
              {props.mainDescription.orderedList.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        )}

        {/* Last description */}
        {props.mainDescription.last !== "" && (
          <span className={`${classes["last-description"]} bold`}>
            {props.mainDescription.last}
          </span>
        )}

        {/* Variations */}
        {props.variations.length > 1 && (
          <div className={`${classes.variations}`}>
            <div className={classes.size}>
              <span>Sizes</span>
            </div>
            <div className={classes.form}>
              <form>
                <select
                  onChange={(e) => {
                    variationsHandler(e.target.value);
                  }}
                  defaultValue="Choose an option"
                >
                  <option
                    key="initial"
                    value="Choose an option"
                    selected={!selectedVariation ? true : false}
                  >
                    Choose an option
                  </option>

                  {props.variations.map((variation, index) => (
                    <option key={index} value={variation.size}>
                      {variation.size}
                    </option>
                  ))}
                </select>
              </form>
              {selectedVariation && (
                <button className={classes.clear} onClick={clearHandler}>
                  <div>
                    <span className={classes.icon}>×</span>
                  </div>
                  <span className={classes.text}>Clear</span>
                </button>
              )}
            </div>
          </div>
        )}

        <div className={classes["var-price"]}>
          {selectedVariation && <span>${varPrice}</span>}
        </div>

        {/* Add to cart options */}
        <div className={`${classes["qty-control-container"]}`}>
          <div>
            <button
              className={`${classes["qty-control"]} ${classes.btn}`}
              onClick={decrementQty}
            >
              -
            </button>
            <input
              type="number"
              min={0}
              value={inputQty}
              onChange={inputChangeHandler}
              onBlur={inputExitHandler}
              ref={quantityInputRef}
              className={`${classes["qty-control"]} ${classes.input} ${
                showQtyInputError && classes["input--error"]
              }`}
            />
            <button
              className={`${classes["qty-control"]} ${classes.btn}`}
              onClick={incrementQty}
            >
              +
            </button>
          </div>

          <button
            className={`${
              hasSelection ? "" : `btn--disabled`
            } btn btn--green btn--regular btn--rounded`}
            onClick={addToCartHandler}
          >
            Add to Cart
          </button>
        </div>

        {/* Category */}
        <div className={`${classes.category}`}>
          <span className={`bold`}>Category: </span>
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
                onClick={(e) => {
                  props.onCategorySearch(category);
                  props.onClick(e);
                }}
                // onClick={props.onClick}
                className={`category ${classes['category-link']}`}
              >
                {category}
                {index !== props.category.length - 1 ? ", " : ""}
              </a>
            </Link>
          ))}
        </div>
      </div>

      {/* Quantity Error */}
      {/* {showQtyInputError && <QtyErrorModal />} */}
    </Fragment>
  );
};

export default MainDescription;
