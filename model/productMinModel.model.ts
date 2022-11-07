export interface ProductMinModel { // rename to ProductMinModel
  id: string;
  productName: string[];
  otherName: string;
  category: string[]; // category
  variations: {
    size: string;
    price: number;
    weight: string;
    dimensions: string;
  }[];
  imagesFolder: string; // images.folderName
  images: string[]; // images.thumbnailRegular
  onCategorySearch: (category: string) => void;
}