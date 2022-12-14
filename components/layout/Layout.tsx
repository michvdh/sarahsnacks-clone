import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import IODiv from "./IODiv";
import classes from "./Layout.module.scss";
import Newsletter from "./Newsletter";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div className={classes.layout}>
      <Header />
      <IODiv />
      {children}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Layout;