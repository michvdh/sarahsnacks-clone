import SearchResults from "./SearchResults";
import ViewControls from "./ViewControls";
import classes from "./ResultsPane.module.scss";
import { ProductsDBModel } from "../../../model/productsDBModel.model";
import Pagination from "./Pagination";

interface ResultsPaneProps {
  showProducts: ProductsDBModel[] | [];
  onProductSort: (order: string) => void;
  onDisplayCount: (itemCount: string) => void;
  totalPages: number;
  onPageBtnClick: (clickedPage: number) => void;
  onCategorySearch: (category: string) => void;
  // onReturnToDefaultSort: boolean;
  onChangeDisplayType: (detailLevel: string) => void;
  displayType: string;
  resultsReady: boolean;
  sortInput: string;
  displayCountInput: string;
  pageInput: number;
}

const ResultsPane: React.FC<ResultsPaneProps> = (props) => {
  return (
    <div className={`${classes["results-pane"]}`}>
      <ViewControls
        onProductSort={props.onProductSort}
        onDisplayCount={props.onDisplayCount}
        // onReturnToDefaultSort={props.onReturnToDefaultSort}
        onChangeDisplayType={props.onChangeDisplayType}
        sortInput={props.sortInput}
        displayCountInput={props.displayCountInput}
        displayType={props.displayType}
      />

      <SearchResults
        showProducts={props.showProducts}
        displayType={props.displayType}
        resultsReady={props.resultsReady}
        onCategorySearch={props.onCategorySearch}
      />

      {props.resultsReady && props.totalPages > 1 && (
        <Pagination
          totalPages={props.totalPages}
          onPageBtnClick={props.onPageBtnClick}
          pageInput={props.pageInput}
          // if totalPages is 1, then no need to generate a button
        />
      )}
    </div>
  );
};

export default ResultsPane;
