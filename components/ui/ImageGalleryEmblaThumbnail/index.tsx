import EmblaCarousel from "./EmblaCarousel"
import { ImageGalleryEmblaModel } from "../../../model/imageGalleryEmblaModel.model";

const ImageGalleryEmblaThumbnail: React.FC<ImageGalleryEmblaModel> = (props) => {
  return (
    <div>
      <EmblaCarousel 
        images={props.images} 
        className={''}
      />
    </div>
  )
}

export default ImageGalleryEmblaThumbnail;