export interface ProductsDBModel {
    id: string;
    productName: string[];
    otherName: string;
    nameColor: string;
    category: string[];
    featuredInCarousel: boolean;
    mainDescription: {
      main: string[][];
      unOrderedList: string[][];
      orderedList: {
        title: string;
        items: string[];
      };
      last: string;
    };
    variations: {
      size: string;
      price: number;
      weight: string;
      dimensions: string;
    }[];
    subDescription: string;
    additionalInfo: {
      warning: string;
      ingredients: string;
    };
    images: {
      folderName: string;
      thumbnailRegular: string[];
      thumbnailSmall: string[];
      thumbnailLarge: string[];
      hd: string[];
    };
};

