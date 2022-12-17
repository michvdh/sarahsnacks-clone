
// when calling EmblaCarousel component, set a parameter which will set if the control buttons below will be images or dots
  // EmblaCarousel parameters = images or dots

import EmblaCarousel from "./EmblaCarousel";
import { ImageGalleryEmblaModel } from "../../../model/imageGalleryEmblaModel.model";

// interface img {
//   images: {
//     folderName: string;
//     thumbnailRegular: string[];
//     thumbnailSmall: string[];
//     thumbnailLarge: string[];
//     hd: string[];
//   };
//   className: string;
// }

const ImageGalleryEmbla: React.FC<ImageGalleryEmblaModel> = (props) => {
  return (
    <div>
      {/* <EmblaCarousel images={props.images} navType={props.navType} /> */}
      <EmblaCarousel images={props.images} className={props.className}/>
    </div>
  );
}

export default ImageGalleryEmbla;