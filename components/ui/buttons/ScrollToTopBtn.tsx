import classes from "./ScrollToTopBtn.module.scss";
import { useState, useEffect } from "react";

const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  useEffect(() => { 
    window.addEventListener('scroll', toggleVisible);
  }, []);


  return (
    <button onClick={scrollToTop} className={`${classes['scroll-to-top-btn']} ${visible === false ? classes.hide : ''}`}>
      <svg
        // width="24"
        // height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.6569 16.2427L19.0711 14.8285L12.0001 7.75739L4.92896 14.8285L6.34317 16.2427L12.0001 10.5858L17.6569 16.2427Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopBtn;
