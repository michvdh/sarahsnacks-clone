import ResultsPane from "../../components/shop-sub-comp/results-pane/ResultsPane";
import SearchPane from "../../components/shop-sub-comp/search-pane/SearchPane";
import classes from "./shop.module.scss";

import { useState } from "react";
import productsDB from "../../components/model/productsDB";
import { ProductsDBModel } from "../../components/model/productsDBModel.model";

const Shop: React.FC = () => {
  const products: ProductsDBModel[] = productsDB; // 34 products
  let filteredProducts: ProductsDBModel[] = [];
  let sortedProducts: ProductsDBModel[] = [];
  let pageControlledProductList: ProductsDBModel[] = [];
  let totalPages = 1;
  let hasResults: boolean = true;
  let clearKeyword: boolean = false;
  let clearCategory: boolean = false;
  let defaultSort: boolean = true;

  // const [filteredProducts, setFilteredProducts] = useState([]);

  const [displayType, setDisplayType] = useState("min-details");
    // options: ProductMinDetails and ProductBasicDetails

  const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);

  const [displayCount, setDisplayCount] = useState('12');
    // options: 12, 24, all (all is arrayLength)

  const [sortSelected, setSortSelected] = useState(false);
  const [productSort, setProductSort] = useState("default-sort");

  const [searchSelected, setSearchSelected] = useState(false);
  const [keywordSearchSelected, setKeywordSearchSelected] = useState(false);
  const [categorySearchSelected, setCategorySearchSelected] = useState(false);
  const [keywordSearch, setKeywordSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");

  // function used for navigating to different pages
  const pageControlHandler = (clickedPage: number) => {
    setCurrentPage(clickedPage);
  }

  // function used to control the number of items to be displayed per page
  const paginationHandler = (itemCount: string) => {
    setDisplayCount(itemCount);
  };


  // function for sorting (asc, desc) .. based on price or id
  const productSortHandler = (sortType: string) => {
    setSortSelected(true);
    setProductSort(sortType);
  };

  // function that will tell SearchResults to display items based on keyword search
  const keywordSearchHandler = (keyword: string) => {
    // setSearchSelected(true);
    setKeywordSearch(keyword);
    setCategorySearch("");
    setSortSelected(false); 
    setProductSort("default-sort");
    setCurrentPage(1);
    setKeywordSearchSelected(true);
    setCategorySearchSelected(false);
  };

  // function that will tell SearchResults to display items based on category selection
  const categorySearchHandler = (category: string) => {
    // setSearchSelected(true);
    setCategorySearch(category);
    setKeywordSearch("");
    setSortSelected(false);
    setCurrentPage(1);
    setProductSort("default-sort");
    setKeywordSearchSelected(false);
    setCategorySearchSelected(true);
  };

  const displayTypeHandler = (detailLevel: string) => {
    setDisplayType(detailLevel);
  }

  // function that will apply Keyword Search
  const applyKeywordSearch = () => {
    filteredProducts = [];

    if (keywordSearch === "") {
      filteredProducts = [];
      hasResults = true;
      return;
    }

    products.forEach((product) => {
      const firstString = product.productName[0]
        .toLowerCase()
        .includes(keywordSearch.toLowerCase());
      const secondString = product.productName[1]
        .toLowerCase()
        .includes(keywordSearch.toLowerCase());

      if (firstString || secondString) {
        filteredProducts.push(product);
      }
    });

    filteredProducts.length > 0 ? (hasResults = true) : (hasResults = false);
  };

  // function that will apply Category Search
  const applyCategorySearch = () => {
    filteredProducts = [];
    products.forEach((product) => {
      if (product.category.includes(categorySearch)) {
        filteredProducts.push(product);
      }
    });
  };

  // function that will apply sorting
  const applyProductSort = () => {
    sortedProducts = filteredProducts.length === 0 ? products : filteredProducts;

    let summarizedList: string[][] = []; // this will contain an array [id, price] that will undergo initial sorting

    sortedProducts.forEach((product) => {
      const id: string = product.id;
      const price: string = product.variations[0].price.toString();
      summarizedList.push([id, price]);
    });

    const processSorting = (sortType: string) => {
      let tempSortedProducts: ProductsDBModel[] = [];

      if (sortType !== 'default-sort') {
        defaultSort = false;
        summarizedList.sort((a: any[], b: any[]) => {
          return a[1] - b[1];
        });
      }

      summarizedList.forEach((arr) => {
        sortedProducts.forEach((product) => {
          product.id === arr[0] && tempSortedProducts.push(product);
        });
      });

      sortedProducts = [];
      sortedProducts = sortType === 'price-desc' ? tempSortedProducts.reverse() : tempSortedProducts;
      tempSortedProducts = [];
      summarizedList = [];
    }

    processSorting(productSort);
  };

  // function that will apply pagination and control display items
  const applyPagination = () => {
    if (!hasResults) return;

    const tempSourceList = sortSelected ? sortedProducts : (filteredProducts.length === 0 ? products : filteredProducts);

    if (displayCount === 'All') {
      totalPages = 1;
      pageControlledProductList = tempSourceList;
    }

    if (tempSourceList.length < +displayCount) {
      totalPages = 1;
      pageControlledProductList = [];

      for (let i=0; i < tempSourceList.length; i++) {
        if (tempSourceList[i] === undefined) { 
          i = tempSourceList.length;
        }
        pageControlledProductList.push(tempSourceList[i]);
      }

      return;
    }

    if (tempSourceList.length > +displayCount) {
      const batch = +displayCount * currentPage; // ex. 12 * 1 = 12 .. 24 .. 36
      totalPages = Math.ceil(tempSourceList.length / +displayCount); // 34/24 .. 34/12
      const firstItemInBatch = batch - +displayCount; // starting value is 0 .. 12.. 24
      pageControlledProductList = [];

      for (let i=firstItemInBatch; i < batch; i++) {
        if (tempSourceList[i] === undefined) { 
          i = batch;
          return;
        }
        pageControlledProductList.push(tempSourceList[i]);
      }

      return;
    }
  };

  // function used to clear search selections
  const clearSearchAndSort = (toBeCleared: string) => {
    if (toBeCleared === "category") {
      clearKeyword = false;
      clearCategory = true;
    } else if (toBeCleared === "keyword") {
      clearKeyword = true;
      clearCategory = false;
    }

    defaultSort = true;
  }

  
  if (categorySearchSelected) {
    clearSearchAndSort("keyword");
    applyCategorySearch();
    sortSelected === true && applyProductSort();
  }

  if (keywordSearchSelected) {
    clearSearchAndSort("category");
    applyKeywordSearch();
    sortSelected === true && applyProductSort();
  }

  sortSelected === true && applyProductSort();

  hasResults && applyPagination(); 

  return (
    <main className={`main`}>
      <section className={`${classes.shop} shop`}>
        <SearchPane
          onKeywordSearch={keywordSearchHandler}
          onClearKeyword={clearKeyword}
          onCategorySearch={categorySearchHandler}
          onClearCategory={clearCategory}
        />
        <ResultsPane
          showProducts={hasResults ? pageControlledProductList : false}
          onProductSort={productSortHandler}
          onPagination={paginationHandler}
          onPageBtnClick={pageControlHandler}
          onReturnToDefaultSort={defaultSort}
          onChangeDisplayType={displayTypeHandler}
          displayType={displayType}
          totalPages={totalPages} 
        />
        <div>{/* RecentlyViewed */}</div>
      </section>
    </main>
  );
};

export default Shop;

// generate or change the URL whenever we make a specific search
