import { ProductsDBModel } from "../model/productsDBModel.model";

const changeToKebabCase = (
  productName: string[],
  otherName: string
) => {
  const pName = otherName ? otherName : (productName[1] === "" ? productName[0] : (productName[0] + " " + productName[1]));

  const productNameDashed = pName.replace("&","").replace(/\s+/g,"-").toLocaleLowerCase();

  return productNameDashed;
}

export default changeToKebabCase;

