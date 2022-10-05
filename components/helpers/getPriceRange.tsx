import { ProductMinModel } from "../../model/productMinModel.model";

const getPriceRange = (variations: ProductMinModel["variations"]) => {
  const priceVariationLength = variations.length;

  const priceRangeArr = variations.map((variation) => variation.price).sort();

  const priceRange = (priceVariationLength > 1) ? `$${priceRangeArr[priceRangeArr.length - 1].toFixed(2)} - $${priceRangeArr[0].toFixed(2)}` : `$${priceRangeArr[0].toFixed(2)}`;

  return priceRange;
};

export default getPriceRange;