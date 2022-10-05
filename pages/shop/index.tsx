// /shop?page=1&sort=default

import { useRouter } from "next/router";
import Catalog from "../../components/shop-sub-comp/Catalog";
import {getAllProducts} from "../../components/helpers/apiUtils";
import { ProductsDBModel } from "../../model/productsDBModel.model";

const Shop: React.FC<{allProducts: ProductsDBModel[]}> = (props) => {
  // const router = useRouter();

  return (
    <Catalog 
      // productKeywordSearch=""
      // productCategorySearch=""
      // page={+`${router.query.page}`}
      // sort={`${router.query.sort}`}
      allProducts={props.allProducts}
    />
  );
}


export async function getStaticProps() {
  const allProducts = await getAllProducts();

  return {
    props: {
      allProducts: allProducts
    }
  }
}

export default Shop;