// /product-category/gifts?page=1&sort=default

import { useRouter } from "next/router";
import Catalog from "../../components/shop-sub-comp/Catalog";

const ProductCategory = () => {
  const router = useRouter();

  return (
    <Catalog 
      productKeywordSearch=""
      productCategorySearch={`${router.query.productCategory}`}
      page={+`${router.query.page}`}
      sort={`${router.query.sort}`}
    />
  );
}

export default ProductCategory;