import classes from "./Backdrop.module.scss";

const Backdrop: React.FC<{onClick: () => void}> = (props) => {
  return (
    <div onClick={props.onClick} className={classes.backdrop}></div>
  );
};

export default Backdrop;