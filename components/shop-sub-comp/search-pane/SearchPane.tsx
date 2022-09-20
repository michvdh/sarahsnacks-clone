import CategorySearch from "./CategorySearch";
import KeywordSearch from "./KeywordSearch";
import RecentlyViewed from "./RecentlyViewed";

const SearchPane: React.FC<{
  onKeywordSearch: (keyword: string) => void;
  onClearKeyword: boolean;
  onCategorySearch: (category: string) => void;
  onClearCategory: boolean;
}> = (props) => {
  
  return (
    <div>
      <KeywordSearch
        onKeywordSearch={props.onKeywordSearch}
        onClearKeyword={props.onClearKeyword}
      />
      <CategorySearch 
        onCategorySearch={props.onCategorySearch}
        onClearCategory={props.onClearCategory}
      />
      <RecentlyViewed />
    </div>
  );
}

export default SearchPane;