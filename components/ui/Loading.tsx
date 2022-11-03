import classes from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={classes['spinner-wrapper']}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Loading;