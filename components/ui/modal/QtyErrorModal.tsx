import ReactDOM from "react-dom";
import classes from "./QtyErrorModal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { useState, useEffect } from "react";

const QtyErrorOverlay = () => {
  return (
    <div className={classes.modal}>
      <div className={classes["modal__icon"]}>!</div>
      <div className={classes["modal__text"]}>
        <p>Sorry</p>
        <p>Please enter a valid quantity</p>
      </div>
    </div>
  );
};

const QtyErrorModal = () => {
  const qtyErrorOverlay = document.getElementById("qty-error-root")!;
  const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  //   return () => setMounted(false);
  // }, []);

  return (
    <Fragment>
      {ReactDOM.createPortal(<QtyErrorOverlay />, qtyErrorOverlay)}
    </Fragment>
  );
};

export default QtyErrorModal;
