import { cartItemsModel } from "./cartItemsModel";

export interface cartStateModel {
  cartItems: cartItemsModel[];
  totalQty: number;
  totalPrice: number;
  expiry: number;
  ttl: number;
}