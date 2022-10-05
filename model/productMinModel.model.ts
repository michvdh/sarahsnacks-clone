export interface ProductMinModel { // rename to ProductMinModel
  // key: string; // id
  id: string;
  productName: string[];
  otherName: string;
  imagesFolder: string; // images.folderName
  images: string[]; // images.thumbnailRegular
  category: string[]; // category
  variations: {
    size: string;
    price: number;
    weight: string;
    dimensions: string;
  }[];
  btnLabel: string;
}