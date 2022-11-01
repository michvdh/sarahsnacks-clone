export interface cartStateModel {
  cartItems: {
    id: string;
    productName: string;
    varPrice: number; // variation price
    varSize: string; // variation size
    qty: number | string;
  }[];
  totalQty: number;
  totalPrice: number;
  expiry: number;
  ttl: number;
}