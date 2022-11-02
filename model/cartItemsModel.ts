export interface cartItemsModel {
  id: string;
  productName: string;
  varPrice: number; // variation price
  varSize: string; // variation size
  // qty: number | string;
  qty: number;
  imagesFolder: string; // images.folderName
  image: string; // images.thumbnailRegular
}
