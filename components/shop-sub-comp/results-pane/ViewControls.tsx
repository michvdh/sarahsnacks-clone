import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableCellsLarge, faList } from "@fortawesome/free-solid-svg-icons";

import classes from "./ViewControls.module.scss";
import { produceWithPatches } from "immer";

const ViewControls: React.FC<{
  onProductSort: (sortType: string) => void;
  onDisplayCount: (itemCount: string) => void;
  onReturnToDefaultSort: boolean;
  onChangeDisplayType: (displayType: string) => void;
}> = (props) => {

  const sortHandler = (sortType: string) => {
    props.onProductSort(sortType);
  }

  const paginationHandler = (itemCount: string) => {
    props.onDisplayCount(itemCount);
  }

  const productDispayTypeHandler = (detailLevel: string) => {
    props.onChangeDisplayType(detailLevel);
  }

  return (
    <div className={`${classes["view-controls"]}`}>
      <div className={`${classes["view-style"]}`}>
        <div className={`${classes["product-display-type"]}`}>
          <div 
            className={`${classes["min-details"]} ${classes["detail-level"]}`} 
            onClick={(e) => {productDispayTypeHandler("min-details")}}>
            <FontAwesomeIcon className={`${classes["icon"]}`} icon={faTableCellsLarge} />
          </div>
          <div 
            className={`${classes["basic-details"]} ${classes["detail-level"]}`} 
            onClick={(e) => {productDispayTypeHandler("basic-details")}}>
            <FontAwesomeIcon className={`${classes["icon"]}`} icon={faList} />
          </div>
        </div>
        <div className={`${classes["sort-type"]}`}>
          <form>
            <select onChange={(e) => {sortHandler(e.target.value)}}>
              <option key="1" value="default" selected={props.onReturnToDefaultSort}>Default sorting</option>
              <option key="2"  value="price-asc">Sort by price: low to high</option>
              <option key="3"  value="price-desc">Sort by price: high to low</option>
            </select>
          </form>
        </div>
      </div>
      <div className={`${classes["result-control-count"]}`}>
        <ul>
          <li>View:</li>
          <li>
            <span onClick={(e) => {paginationHandler(e.target.innerText)}} className={classes.option}>12</span>
          </li>
          <li>
            <span onClick={(e) => {paginationHandler(e.target.innerText)}} className={classes.option}>24</span>
          </li>
          <li>
            <span onClick={(e) => {paginationHandler(e.target.innerText)}} className={classes.option}>All</span>
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
