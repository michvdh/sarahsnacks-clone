import { CartItemsModel } from "./cartItemsModel.model";

export interface CartStateModel {
  cartItems: CartItemsModel[];
  totalQty: number;
  totalPrice: number;
  expiry: number;
  ttl: number;
}