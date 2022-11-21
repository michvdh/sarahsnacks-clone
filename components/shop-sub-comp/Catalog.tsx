// transfer all code from Shop to this file
// this component will be called by Shop, product-category, and product-search

import ResultsPane from "../../components/shop-sub-comp/results-pane/ResultsPane";
import SearchPane from "../../components/shop-sub-comp/search-pane/SearchPane";
import classes from "./Catalog.module.scss";
import { Fragment, useEffect, useState } from "react";
import { ProductsDBModel } from "../../model/productsDBModel.model";
import { useRouter } from "next/router";

const Catalog: React.FC<{ allProducts: ProductsDBModel[] }> = (props) => {
  const router = useRouter();
  const isReady = router.isReady;
  const { allProducts } = props;

  const products: ProductsDBModel[] = allProducts; // 34 products
  let filteredProducts: ProductsDBModel[] = [];
  let sortedProducts: ProductsDBModel[] = [];
  let pageControlledProductList: ProductsDBModel[] = [];
  let totalPages = 1;
  let hasResults: boolean = true;
  let clearKeyword: boolean = false;
  let clearCategory: boolean = false;
  // let defaultSort: boolean = true;

  const [displayType, setDisplayType] = useState("min-details");
    // options: ProductMinDetails and ProductBasicDetails

  const [currentPage, setCurrentPage] = useState(1);

  const [displayCount, setDisplayCount] = useState("12");
    // options: 12, 24, all (all is arrayLength)

  const [productSort, setProductSort] = useState("default");
  const [sortChanged, setSortChanged] = useState(false);
    // the logic for sortChanged seems off because there will be no empty value

  const [categorySearch, setCategorySearch] = useState("");
  const [categorySearchTriggered, setCategorySearchTriggered] = useState(false);

  const [keywordSearch, setKeywordSearch] = useState("");
  const [keywordSearchTriggered, setKeywordSearchTriggered] = useState(false);

  const [resultsReady, setResultsReady] = useState(false);


  // shallowRouting helper function
  const shallowRouting = ( 
      category: string | string[], 
      keyword: string, 
      page: number, 
      sort: string, 
      display: string,
      style: string
    ) => {

    router.push(
      {
        pathname: `/shop`,
        query: {
          // this means if there is no value for category, then we don't add it to the url. I use this for category and keyword search
          ...(category && {category: category}), 
          ...(keyword && {keyword: keyword}),
          ...(page && {page: page}),
          ...(sort && {sort: sort}),
          ...(display && {display: display}),
          ...(style && {style: style})
        },
      },
      undefined,
      { shallow: true }
    );

    return;
  }


  // page 1, 2, 3, etc.
  const pageControlHandler = (clickedPage: number) => {
    setCurrentPage(clickedPage);

    if (categorySearch !== "" || undefined) {
      shallowRouting(categorySearch, "", clickedPage, productSort, displayCount);
      return;
    } 
    
    if (keywordSearch !== "" || undefined) {
      shallowRouting("", keywordSearch, clickedPage, productSort, displayCount);
      return;
    }

    shallowRouting("", "", clickedPage, productSort, displayCount);
    return;
  };


  // 12, 24, All
  const displayCountHandler = (itemCount: string) => {
    setDisplayCount(itemCount);

    if (categorySearch) {
      shallowRouting(categorySearch, "", currentPage, productSort, itemCount, displayType);
      return;
    } 
    
    if (keywordSearch) {
      shallowRouting("", keywordSearch, currentPage, productSort, itemCount, displayType);
      return;
    }

    shallowRouting("", "", currentPage, productSort, itemCount, displayType);
    return;
  };


  // default, asc, desc .. based on price or id
  const productSortHandler = (sortType: string) => {
    setSortChanged(true);
    setProductSort(sortType);

    if (categorySearch) {
      shallowRouting(categorySearch, "", currentPage, sortType, displayCount, displayType);
      return;
    } 
    
    if (keywordSearch) {
      shallowRouting("", keywordSearch, currentPage, sortType, displayCount, displayType);
      return;
    }

    shallowRouting("", "", currentPage, sortType, displayCount, displayType);
    return;
  };


  const keywordSearchHandler = (keyword: string) => {
    setKeywordSearch(keyword);
    setCategorySearch("");
    setSortChanged(false);
    setProductSort("default");
    setCurrentPage(1);
    setKeywordSearchTriggered(true);
    setCategorySearchTriggered(false);
    shallowRouting("", keyword, 1, "default", displayCount, displayType)
  };


  const categorySearchHandler = (category: string) => {
    // if (category === categorySearch) return;

    setCategorySearch(category);
    setKeywordSearch("");
    setCurrentPage(1);
    setProductSort("default");
    setSortChanged(false);
    setKeywordSearchTriggered(false);
    setCategorySearchTriggered(true);
    shallowRouting(category, "", 1, "default", displayCount, displayType);
  };


  // Set display to Minimum or Basic Details
  const displayTypeHandler = (detailLevel: string) => {
    setDisplayType(detailLevel);

    if (categorySearch) {
      shallowRouting(categorySearch, "", currentPage, productSort, displayCount, detailLevel);
      return;
    } 
    
    if (keywordSearch) {
      shallowRouting("", keywordSearch, currentPage, productSort, displayCount, detailLevel);
      return;
    }

    shallowRouting("", "", currentPage, productSort, displayCount, detailLevel);
    return;
  };


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


  const applyCategorySearch = () => {
    filteredProducts = [];

    products.forEach((product) => {
      if (product.category.includes(categorySearch)) {
        filteredProducts.push(product);
      }
    });
  };

  // Default, Asc, Desc -- sorting
  const applyProductSort = () => {
    sortedProducts =
      filteredProducts.length === 0 ? products : filteredProducts;

    let summarizedList: string[][] = []; // this will contain an array [id, price] that will undergo initial sorting

    sortedProducts.forEach((product) => {
      const id: string = product.id;
      const price: string = product.variations[0].price.toString();
      summarizedList.push([id, price]);
    });

    const processSorting = (sortType: string) => {
      let tempSortedProducts: ProductsDBModel[] = [];

      if (sortType !== "default") {
        // defaultSort = false;
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
      sortedProducts =
        sortType === "price-desc"
          ? tempSortedProducts.reverse()
          : tempSortedProducts;
      tempSortedProducts = [];
      summarizedList = [];
    };

    processSorting(productSort);
  };


  // Pages (1,2,3, etc) and Display count (12,24,All)
  const applyPagination = () => {
    if (!hasResults) return;

    const tempSourceList = sortChanged
      ? sortedProducts : (filteredProducts.length === 0 ? products : filteredProducts);

    if (displayCount === "All") {
      totalPages = 1;
      pageControlledProductList = tempSourceList;
    }

    if (tempSourceList.length < +displayCount) {
      totalPages = 1;
      pageControlledProductList = [];

      for (let i = 0; i < tempSourceList.length; i++) {
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

      for (let i = firstItemInBatch; i < batch; i++) {
        if (tempSourceList[i] === undefined) {
          i = batch;
          return;
        }
        pageControlledProductList.push(tempSourceList[i]);
      }

      return;
    }
  };


  // clearing selections
  const clearSearchAndSort = (toBeCleared: string) => {
    if (toBeCleared === "category") {
      clearKeyword = false;
      clearCategory = true;
    }

    if (toBeCleared === "keyword") {
      clearKeyword = true;
      clearCategory = false;
    }

    // defaultSort = true;
  };


  if (categorySearchTriggered && resultsReady) {
    clearSearchAndSort("keyword");
    applyCategorySearch();
    sortChanged && applyProductSort();
  }

  if (keywordSearchTriggered && resultsReady) {
    clearSearchAndSort("category");
    applyKeywordSearch();
    sortChanged && applyProductSort();
  }

  if (sortChanged) {
    applyProductSort();
  }

  hasResults && applyPagination();


  // useEffect is designed to work for links that were copied to a new tab or session
  useEffect(() => {
    if (!isReady) return;

    !resultsReady && setResultsReady(true);

    if (router.query.category) {
      shallowRouting(router.query.category, "", router.query.page, router.query.sort, router.query.display, router.query.style);
      !categorySearchTriggered && setCategorySearchTriggered(true);
      setCategorySearch(router.query.category.toString());
      setProductSort(router.query.sort);
      setSortChanged(true);
      setCurrentPage(+router.query.page);
      setDisplayCount(router.query.display);
      setDisplayType(router.query.style);
      return;
    }

    if (router.query.keyword) {
      shallowRouting("", router.query.keyword, router.query.page, router.query.sort, router.query.display, router.query.style);
      !keywordSearchTriggered && setKeywordSearchTriggered(true);
      setKeywordSearch(router.query.keyword.toString());
      setProductSort(router.query.sort);
      setSortChanged(true);
      setCurrentPage(+router.query.page);
      setDisplayCount(router.query.display);
      setDisplayType(router.query.style);
      return;
    }

    if (!router.query.keyword && !router.query.category) {
      shallowRouting("", "", router.query.page, router.query.sort, router.query.display, router.query.style);
      router.query.sort && setProductSort(router.query.sort);
      router.query.sort && setSortChanged(true);
      router.query.page && setCurrentPage(+router.query.page);
      router.query.display && setDisplayCount(router.query.display);
      router.query.style && setDisplayType(router.query.style);
      return;
    }

  }, [isReady]);


  return (
    <main className={`main`}>
      <section className={`${classes.catalog} catalog`} >
        <SearchPane
          onKeywordSearch={keywordSearchHandler}
          onClearKeyword={clearKeyword}
          onCategorySearch={categorySearchHandler}
          onClearCategory={clearCategory}
          categoryInput={categorySearch}
          keywordInput={keywordSearch}
        />
        <ResultsPane
          showProducts={hasResults ? pageControlledProductList : []}
          onProductSort={productSortHandler}
          onDisplayCount={displayCountHandler}
          onPageBtnClick={pageControlHandler}
          onCategorySearch={categorySearchHandler}
          onChangeDisplayType={displayTypeHandler}
          displayType={displayType}
          totalPages={totalPages}
          resultsReady={resultsReady}
          sortInput={productSort}
          displayCountInput={displayCount}
          pageInput={currentPage}
        />
        <div>{/* RecentlyViewed */}</div>
      </section>
    </main>
  );
};

export default Catalog;
