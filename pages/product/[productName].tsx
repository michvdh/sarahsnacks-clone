// I can use this to display the different products
// how do I pass data from ProductQuickView to this page?

// https://www.kindacode.com/article/passing-data-via-a-link-component-in-next-js/

// https://nextjs.org/docs/basic-features/pages

// https://nextjs.org/docs/routing/introduction

// https://nextjs.org/docs/api-reference/next/link

import { useRouter } from "next/router";
import changeToKebabCase from "../../components/helpers/changeToKebabCase";
import productsDB from "../../model/productsDB";
import ProductCompleteDetails from "../../components/ui/ProductCompleteDetails";

const Product = () => {
  const router = useRouter();
  const queriedProductID = router.query.id;
  const queriedProductName = router.query.productName;
  let targetProduct;
  let productNameDashed;

  const pIndex = productsDB.findIndex((p) => (p.id === queriedProductID));

  const tempProd = productsDB[pIndex];

  // I added an if condition here because React would automatically render an error because it directly gets the values of ".otherName" etc even if we haven't retrieved yet the pIndex.
  if (tempProd) productNameDashed = changeToKebabCase(tempProd.productName, tempProd.otherName);

  if (queriedProductName === productNameDashed) targetProduct = productsDB[pIndex];

  return (
    <main className={`main`}>
      <section className={`product`}>
        {targetProduct ? <ProductCompleteDetails product={targetProduct} /> :
        <p>Incorrect URL. No results</p> // update the error handling for this
        }
      </section>
    </main>
  );
};

export default Product;
