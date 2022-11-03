export interface cartItemsModel {
  id: string;
  productName: string; // array combined already
  otherName: string;
  varPrice: number; // variation price
  varSize: string; // variation size
  qty: number;
  imagesFolder: string; // images.folderName
  image: string; // images.thumbnailRegular
  // qty: number | string;
}
