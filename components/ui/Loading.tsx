import classes from "./Loading.module.scss";

// page to page loading spinner

const Loading = () => {
  return (
    <div className={classes['spinner-wrapper']}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Loading;