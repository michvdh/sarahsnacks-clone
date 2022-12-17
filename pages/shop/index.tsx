import Catalog from "../../components/shop-sub-comp/Catalog";
import { getAllProducts } from "../../components/helpers/apiUtils";
import { ProductsDBModel } from "../../model/productsDBModel.model";
import { useEffect, useState } from "react";

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


////////////////////////////////////////////

// const Shop = () => {
//   const [productsDB, setProductsDB] = useState([]);

//   const allData = async () => {
//     const response = await fetch(
//       "https://sarahsnacks-clone-default-rtdb.firebaseio.com/productsDB.json"
//     );

//     const data = await response.json();

//     setProductsDB(data);
//   };

//   useEffect(() => {
//     allData();
//   },[])

//   return <Catalog allProducts={productsDB} />;
// };

export default Shop;
