// I can use this to display the different products
// how do I pass data from ProductQuickView to this page?

// https://www.kindacode.com/article/passing-data-via-a-link-component-in-next-js/

// https://nextjs.org/docs/basic-features/pages

// https://nextjs.org/docs/routing/introduction

// https://nextjs.org/docs/api-reference/next/link

import { useRouter } from "next/router";
import changeToKebabCase from "../../components/helpers/changeToKebabCase";
import ProductCompleteDetails from "../../components/ui/ProductCompleteDetails";
import { useEffect, useState } from "react";
import Custom404 from "../404";
import { Fragment } from "react";
import Loading from "../../components/ui/Loading";

const Product = () => {
  const router = useRouter();
  const isReady = router.isReady;
  const queriedProductID = router.query.id;
  const queriedProductName = router.query.productName;
  let targetProduct;
  let productNameDashed;
  const [resultsReady, setResultsReady] = useState(false);
  const [productsDB, setProductsDB] = useState([]);
  
  const allData = async() => {
    const response = await fetch('https://sarahsnacks-clone-default-rtdb.firebaseio.com/productsDB.json');
    const data = await response.json();
    setProductsDB(data);
  }

  useEffect(() => {
    allData();
  }, []);

  // get the index of the product
  const pIndex = productsDB.findIndex((p) => (p.id === queriedProductID)); 

  // get the specific product and store in a temporary variable
  const tempProd = productsDB[pIndex];

  // I added an if condition here because React would automatically render an error because it directly gets the values of ".otherName" etc even if we haven't retrieved yet the pIndex.
  // if temProd has value, then proceed in changing productName ot kebab case
  if (tempProd) {
    productNameDashed = changeToKebabCase(tempProd.productName, tempProd.otherName);
  }

  // if productName from link is same with converted pName
  if (queriedProductName === productNameDashed) {
    targetProduct = productsDB[pIndex];
  }

  useEffect(() => {
    if (!isReady) return;
    setResultsReady(true)
  }, [isReady]);

  // console.log(targetProduct);

  return (
    // <main className={`main`}>
    //   <section className={`product`}>
    //     {targetProduct && <ProductCompleteDetails product={targetProduct} />}
    //   </section>
    // </main>
    <Fragment>
      { (resultsReady && productsDB.length > 1) ?
        ( targetProduct ? <main className={`main`}>
          <section className={`product`}>
            <ProductCompleteDetails product={targetProduct} />
          </section>
        </main> : <Custom404 />)
        :
        <Loading />
      }
    </Fragment>
  );
};

export default Product;
