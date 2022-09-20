import { useState } from "react";
import getPriceRange from "../../helper-functions/getPriceRange";
import classes from "./MainDescription.module.scss";

interface MainDescriptionProps {
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
}

const MainDescription: React.FC<MainDescriptionProps> = (props) => {
  const [selectedVariation, setSelectedVariation] = useState("");

  const [hasSelection, setHasSelection] = useState(props.variations.length === 1 ? true : false); 
    // to be used to control "Additional info"

  const variationsHandler = (variation: string) => {
    if (variation == "Choose an option") {
      setSelectedVariation("");
      setHasSelection(false);
    } else {
      setSelectedVariation(variation)
      setHasSelection(true);
    }
  }

  const vIndex = selectedVariation ? props.variations.findIndex(p => p.weight === selectedVariation) : 0;

  const variationPrice = props.variations[vIndex].price.toFixed(2);

  const clearHandler = () => {
    setSelectedVariation("");
    setHasSelection(false);
  }

  props.selectionDetails((selectedVariation ? vIndex : 0), hasSelection);
  // I also would want to forward the status if there is a selection made on the variations
  // I will also need the variation length to identify if there are multiple variations or not.. the display will differ if there are multiple or single variation --- or I could just generate this in the parent component
  // if single variation, then hasSelection = true
  // if multiple variations, then init hasSelection or "Choose an option" = false
  

  return (
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
          {props.mainDescription.unOrderedList.map((desc) => (
            <li>
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
            {props.mainDescription.orderedList.items.map((item) => (
              <li>{item}</li>
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
              <select onChange={(e) => {variationsHandler(e.target.value)}}>
                <option value="Choose an option" selected={!selectedVariation ? true : false}>Choose an option</option>
                {props.variations.map((variation) => (
                  <option value={variation.weight}>{variation.weight}</option>
                ))}
              </select>
            </form>
            {selectedVariation &&
              <button onClick={clearHandler}>Clear</button>
            }
          </div>
        </div>
      )}

      {/* Add to cart options */}
      <div>
        {selectedVariation &&
          <span>${variationPrice}</span>
        }
        <div>
          <a>-</a>
          <input type="number" value={1} />
          <a>+</a>
        </div>
        <button>Add to Cart</button>
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
  );
};

export default MainDescription;
