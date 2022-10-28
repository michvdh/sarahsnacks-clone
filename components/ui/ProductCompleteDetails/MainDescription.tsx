import { useEffect, useRef, useState } from "react";
import getPriceRange from "../../helpers/getPriceRange";
import classes from "./MainDescription.module.scss";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart";
import QtyErrorModal from "../modal/QtyErrorModal";

interface MainDescriptionProps {
  id: string;
  productName: string[];
  nameColor: string;
  category: string[];
  mainDescription: {
    main: string[][];
    unOrderedList: string[][];
    orderedList: {
      title: string;
      items: string[];
    };
    last: string;
  };
  variations: {
    size: string;
    price: number;
    weight: string;
    dimensions: string;
  }[];
  selectionDetails: (vIndex: number, hasSelection: boolean) => void;
  confirmation: (quantity: number, productName: string) => void;
}

interface cartItemsInterface {
  id: string;
  productName: string;
  varPrice: number; // variation price
  varSize: string; // variation size
  qty: number;
}

const MainDescription: React.FC<MainDescriptionProps> = (props) => {
  const dispatch = useDispatch();

  const [inputQty, setInputQty] = useState(1);
  const [showQtyInputError, setShowQtyInputError] = useState(false);

  const cart = useSelector((state: { cart: { cartItems: cartItemsInterface } }) => state.cart.cartItems
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

  props.selectionDetails(selectedVariation ? vIndex : 0, hasSelection);

  const incrementQty = () => {
    setInputQty(inputQty + 1);
  }

  const decrementQty = () => {
    if (inputQty > 1) {
      setInputQty(inputQty - 1)
    }
  }

  const inputChangeHandler = (e) => {
    setInputQty(e.target.value)
  }

  const inputExitHandler = (e) => {
    if (e.target.value < 1) {
      setInputQty(1);
      setShowQtyInputError(true);
    } 
  }

  const addToCartHandler = () => {
    if (quantityInputRef && quantityInputRef.current && hasSelection) {
      dispatch(
        cartActions.addItem({
          id: props.id,
          productName: productName,
          varPrice: varPrice,
          varSize: varSize,
          qty: quantityInputRef.current?.valueAsNumber,
        })
      );

      props.confirmation(quantityInputRef.current.valueAsNumber, productName);
    }
  };

  // const checkCartHandler = () => {
  //   dispatch(cartActions.checkCart());
  // };

  const clearHandler = () => {
    setSelectedVariation("");
    setHasSelection(false);
  };

  useEffect(() => {
    if (showQtyInputError) {
      setTimeout(() => (setShowQtyInputError(false)), 3000);
    }
  }, [showQtyInputError]);


  return (
    <Fragment>
      <div>
        {/* Price or Price Range */}
        <span>{getPriceRange(props.variations)}</span>
        {/* Product name */}
        <h1>{props.productName[0]}</h1>
        {props.productName.length > 1 && <h1>{props.productName[1]}</h1>}
        {/* Main Description */}
        {props.mainDescription.main &&
          props.mainDescription.main.map((desc: string[]) => (
            <p>
              {desc.map((text: string) => (
                <span>{text}</span>
              ))}
            </p>
          ))}
        {/* Unordered list */}
        {props.mainDescription.unOrderedList && (
          <ul>
            {props.mainDescription.unOrderedList.map((desc, index) => (
              <li key={index}>
                {desc.map((text: string) => (
                  <span>{text}</span>
                ))}
              </li>
            ))}
          </ul>
        )}
        {/* Ordered list */}
        {props.mainDescription.orderedList.items[0] !== "" && (
          <div>
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
          <span>{props.mainDescription.last.toUpperCase()}</span>
        )}
        {/* Variations */}
        {props.variations.length > 1 && (
          <div>
            <div>
              <span>Sizes</span>
            </div>
            <div>
              <form>
                <select
                  onChange={(e) => {
                    variationsHandler(e.target.value);
                  }}
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
              {selectedVariation && <button onClick={clearHandler}>Clear</button>}
            </div>
          </div>
        )}
        {/* Add to cart options */}
        <div>
          {selectedVariation && <span>${varPrice}</span>}
          <div>
            <button onClick={decrementQty}>-</button>
            <input
              type="number"
              min={0}
              value={inputQty}
              onChange={inputChangeHandler}
              onBlur={inputExitHandler}
              ref={quantityInputRef}
            />
            <button onClick={incrementQty}>+</button>
          </div>
          <button className={hasSelection ? '' : `btn--disabled`} onClick={addToCartHandler}>Add to Cart</button>
          {/* <button onClick={checkCartHandler}>Check cart</button> */}
        </div>
        {/* Category */}
        <div>
          <span>Category</span>
          {props.category.map((category, index) => (
            <a
              href={`/product-category/${category
                .replace(" ", "-")
                .toLowerCase()}`}
              key={index}
              className={`category ${classes.category}`}
            >
              {category}
              {index !== props.category.length - 1 ? ", " : ""}
            </a>
          ))}
        </div>
      </div>
      {showQtyInputError && <QtyErrorModal />}
    </Fragment>
  );
};

export default MainDescription;
