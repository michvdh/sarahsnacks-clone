import Catalog from "../../components/shop-sub-comp/Catalog";
import { getAllProducts } from "../../components/helpers/apiUtils";
import { ProductsDBModel } from "../../model/productsDBModel.model";


export async function getStaticProps() {
  const allProducts = await getAllProducts();

  return {
    props: {
      allProducts: allProducts,
    },
  };
}

const Shop: React.FC<{ allProducts: ProductsDBModel[] }> = (props) => {

  return <Catalog allProducts={props.allProducts} />;
};



export default Shop;
