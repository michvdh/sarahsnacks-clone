export interface ProductBasicModel {
  id: string; // id
  productName: string[];
  otherName: string;
  description: string[][];
  imagesFolder: string; // images.folderName
  images: string[]; // images.thumbnailRegular
  category: string[]; // category
  variations: {
    size: string;
    price: number;
    weight: string;
    dimensions: string;
  }[];
  onCategorySearch: (category: string) => void;
}