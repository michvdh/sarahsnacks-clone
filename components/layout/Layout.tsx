import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import IODiv from "./IODiv";
import classes from "./Layout.module.scss";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div className={classes.layout}>
      <Header />
      <IODiv />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;