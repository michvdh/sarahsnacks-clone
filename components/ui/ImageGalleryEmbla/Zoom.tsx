import { useState } from "react";
import classes from "./Zoom.module.scss";
import Image from "next/image";

interface ZoomInterface {
  // containerClass: string;
  imageClass: string;
  src: string;
  srcHD: string;
}

const Zoom: React.FC<ZoomInterface> = (props) => {
  // const src = "https://images.unsplash.com/photo-1444065381814-865dc9da92c0";

  const src = props.src;
  const srcHD = props.srcHD;

  const [backgroundImage, setBackgroundImage] = useState(`url(${srcHD})`);
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");

  const handleMouseMove = (e) => {
    console.log(e);
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <div
      className={`${classes.div}`}
      onMouseMove={handleMouseMove}
      style={{
        backgroundPosition: `${backgroundPosition}`,
        backgroundImage: `${backgroundImage}`,
        // width: `500px`,
        // backgroundRepeat: "no-repeat",
      }}
    >
      {/* <img className={`${classes.img}`} src={src} /> */}
      <Image
        className={`${props.imageClass} ${classes.img}`}
        src={src}
        // width="1000"
        // height="1000"
        layout="fill"
      />
    </div>
  );
};

export default Zoom;
