import CategorySearch from "./CategorySearch";
import KeywordSearch from "./KeywordSearch";
import RecentlyViewed from "./RecentlyViewed";

interface SearchPaneProps {
  onKeywordSearch: (keyword: string) => void;
  onClearKeyword: boolean;
  onCategorySearch: (category: string) => void;
  onClearCategory: boolean;
  categoryInput: string;
  keywordInput: string;
}

const SearchPane: React.FC<SearchPaneProps> = (props) => {
  return (
    <div>
      <KeywordSearch
        onKeywordSearch={props.onKeywordSearch}
        onClearKeyword={props.onClearKeyword}
        keywordInput={props.keywordInput}
      />
      <CategorySearch 
        onCategorySearch={props.onCategorySearch}
        onClearCategory={props.onClearCategory}
        categoryInput={props.categoryInput}
      />
      <RecentlyViewed />
    </div>
  );
}

export default SearchPane;