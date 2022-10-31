import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableCellsLarge, faList } from "@fortawesome/free-solid-svg-icons";

import classes from "./ViewControls.module.scss";
import { produceWithPatches } from "immer";
import { useEffect, useState } from "react";

interface ViewControlsProps {
  onProductSort: (sortType: string) => void;
  onDisplayCount: (itemCount: string) => void;
  // onReturnToDefaultSort: boolean;
  onChangeDisplayType: (displayType: string) => void;
  sortInput: string;
  displayCountInput: string;
  displayType: string;
}

const ViewControls: React.FC<ViewControlsProps> = (props) => {
  const sortHandler = (sortType: string) => {
    props.onProductSort(sortType);
  };

  const paginationHandler = (itemCount: string) => {
    props.onDisplayCount(itemCount);
  };

  const productDispayTypeHandler = (detailLevel: string) => {
    props.onChangeDisplayType(detailLevel);
  };

  return (
    <div className={`${classes["view-controls"]}`}>
      <div className={`${classes["view-style"]}`}>
        <div className={`${classes["product-display-type"]}`}>
          <div
            className={`${classes["min-details"]} ${classes["detail-level"]} ${props.displayType === "min-details" ? classes["selected"] : ""}`}
            onClick={(e) => {
              productDispayTypeHandler("min-details");
            }}
          >
            <FontAwesomeIcon
              className={`${classes["icon"]}`}
              icon={faTableCellsLarge}
            />
          </div>
          <div
            className={`${classes["basic-details"]} ${classes["detail-level"]} ${props.displayType === "basic-details" ? classes["selected"] : ""}`}
            onClick={(e) => {
              productDispayTypeHandler("basic-details");
            }}
          >
            <FontAwesomeIcon className={`${classes["icon"]}`} icon={faList} />
          </div>
        </div>
        <div className={`${classes["sort-type"]}`}>
          <form key={props.sortInput}>
            <select
              onChange={(e) => {
                sortHandler(e.target.value);
              }}
              defaultValue={props.sortInput}
            >
              <option
                key="1"
                value="default"
                // selected={props.sortInput === "default" && true}
              >
                Default sorting
              </option>
              <option 
                key="2" 
                value="price-asc"
                // selected={props.sortInput === "price-asc" && true}
              >
                Sort by price: low to high
              </option>
              <option 
                key="3" 
                value="price-desc"
                // selected={props.sortInput === "price-desc" && true}
              >
                Sort by price: high to low
              </option>
            </select>
          </form>
        </div>
      </div>
      <div className={`${classes["result-control-count"]}`}>
        <ul>
          <li>View:</li>
          <li>
            <span
              onClick={(e) => {
                paginationHandler(e.target.innerText);
              }}
              className={props.displayCountInput === "12" ? classes.selected : ''}
            >
              12
            </span>
          </li>
          <li>
            <span
              onClick={(e) => {
                paginationHandler(e.target.innerText);
              }}
              className={props.displayCountInput === "24" ? classes.selected : ''}
            >
              24
            </span>
          </li>
          <li>
            <span
              onClick={(e) => {
                paginationHandler(e.target.innerText);
              }}
              className={props.displayCountInput === "All" ? classes.selected : ''}
            >
              All
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ViewControls;

// ViewControls;
//   ViewType;
//   Sorting;
//     GridView;
//     ListView;
//   ResultCountControl;
//     12 / 24 / All;
