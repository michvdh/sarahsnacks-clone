
// when calling EmblaCarousel component, set a parameter which will set if the control buttons below will be images or dots
  // EmblaCarousel parameters = images or dots

import EmblaCarousel from "./EmblaCarousel";
import { ImageGalleryEmblaModel } from "../../../model/imageGalleryEmblaModel.model";

const ImageGalleryEmbla: React.FC<ImageGalleryEmblaModel> = (props) => {
  return (
    <div>
      <EmblaCarousel images={props.images} navType={props.navType} />
    </div>
  );
}

export default ImageGalleryEmbla;