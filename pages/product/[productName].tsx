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
import Head from "next/head";
import capitalizeFirstLetter from "../../components/helpers/capitalizeFirstLetter";
// import { getAllProducts } from "../../components/helpers/apiUtils";
// import { ProductsDBModel } from "../../model/productsDBModel.model";

// I NEED TO USE GETSTATICPATHS HERE INSTEAD OF GETSTATICPROPS

// export async function getStaticProps() {
//   const allData = await getAllProducts();

//   return {
//     props: {
//       allData: allData,
//     },
//   };
// }

// const Product: React.FC<{allData: ProductsDBModel[]}> = (props) => {
const Product: React.FC = () => {
  const router = useRouter();
  const isReady = router.isReady;
  const queriedProductID = router.query.id;
  const queriedProductName = router.query.productName;
  let targetProduct;
  let productNameDashed;
  let productNameCapitalized;
  const [resultsReady, setResultsReady] = useState(false);
  const [productsDB, setProductsDB] = useState([]);

  const allData = async () => {
    const response = await fetch(
      "https://sarahsnacks-clone-default-rtdb.firebaseio.com/productsDB.json"
    );
    const data = await response.json();
    setProductsDB(data);
  };

  useEffect(() => {
    allData();
    // setProductsDB(props.allData);
  }, []);

  // get the index of the product
  const pIndex = productsDB.findIndex((p) => p.id === queriedProductID);

  // get the specific product and store in a temporary variable
  const tempProd = productsDB[pIndex];

  // I added an if condition here because React would automatically render an error because it directly gets the values of ".otherName" etc even if we haven't retrieved yet the pIndex.
  // if temProd has value, then proceed in changing productName ot kebab case
  if (tempProd) {
    productNameDashed = changeToKebabCase(
      tempProd.productName,
      tempProd.otherName
    );

    productNameCapitalized = capitalizeFirstLetter(`${tempProd.productName[0]}${tempProd.productName[1] && ` ${tempProd.productName[1]}`}`)
  }

  // if productName from link is same with converted pName
  if (queriedProductName === productNameDashed) {
    targetProduct = productsDB[pIndex];
  }

  useEffect(() => {
    if (!isReady) return;
    setResultsReady(true);
  }, [isReady]);


  return (
    // <main className={`main`}>
    //   <section className={`product`}>
    //     {targetProduct && <ProductCompleteDetails product={targetProduct} />}
    //   </section>
    // </main>
    <Fragment>
      {resultsReady && productsDB.length > 1 ? (
        targetProduct ? (
          <Fragment>
            <Head>
              <title>{`${productNameCapitalized} - Sarah's Snacks`}</title>
              <link rel="shortcut icon" href="/sarahsnacks-fav.png" />
            </Head>
            <main className={`main`}>
              <section className={`product`}>
                <ProductCompleteDetails product={targetProduct} />
              </section>
            </main>
          </Fragment>
        ) : (
          <Custom404 />
        )
      ) : (
        <Fragment>
          <Head>
                <title>{`Sarah's Snacks`}</title>
                <link rel="shortcut icon" href="/sarahsnacks-fav.png" />
              </Head>
          <Loading />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Product;
