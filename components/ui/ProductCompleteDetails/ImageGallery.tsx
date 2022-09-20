import Image from 'next/image';
import {useState} from "react";
import classes from './ImageGallery.module.scss';

interface ImageGalleryProps {
  images: {
    folderName: string;
    thumbnailRegular: string[];
    thumbnailSmall: string[];
    thumbnailLarge: string[];
    hd: string[];
  }
}

const ImageGallery: React.FC<ImageGalleryProps> = (props) => {
  const images = props.images;
  const basePath = `/images/products${images.folderName}`;
  const [thumbnailLargeIndex, setThumbnailLargeIndex] = useState(0);
  const imageNavHandler = (index: number) => {
    setThumbnailLargeIndex(index);
  }

  return (
    <div className={`${classes['image-gallery']}`}>
      <div className={`${classes['currently-viewed']}`}>
        <Image
          src={`${basePath}${images.thumbnailLarge[thumbnailLargeIndex]}`}
          // layout="fill"
          width="100px"
          height="150px"
        />
      </div>
      <div className={`${classes['selections']}`}>
        {images.thumbnailSmall.map((thumbnail, index) => {
          return (
            <Image 
              src={`${basePath}${thumbnail}`}
              width="100px"
              height="100px"
              onClick={()=> {imageNavHandler(index)}}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ImageGallery;