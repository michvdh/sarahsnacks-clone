export interface ImageGalleryEmblaModel {
  images: {
    folderName: string;
    thumbnailRegular: string[];
    thumbnailSmall: string[];
    thumbnailLarge: string[];
    hd: string[];
  };
  className: string;
  // navType: string;
}