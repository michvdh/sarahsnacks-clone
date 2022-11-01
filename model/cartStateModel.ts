export interface cartStateModel {
  cartItems: {
    id: string;
    productName: string;
    varPrice: number; // variation price
    varSize: string; // variation size
    // qty: number | string;
    qty: number;
    imagesFolder: string; // images.folderName
    image: string; // images.thumbnailRegular
  }[];
  totalQty: number;
  totalPrice: number;
  expiry: number;
  ttl: number;
}