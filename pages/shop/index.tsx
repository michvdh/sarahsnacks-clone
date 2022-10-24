import Catalog from "../../components/shop-sub-comp/Catalog";
import { getAllProducts } from "../../components/helpers/apiUtils";
import { ProductsDBModel } from "../../model/productsDBModel.model";

const Shop: React.FC<{ allProducts: ProductsDBModel[] }> = (props) => {

  return <Catalog allProducts={props.allProducts} />;
};

export async function getStaticProps() {
  const allProducts = await getAllProducts();

  return {
    props: {
      allProducts: allProducts,
    },
  };
}

export default Shop;
