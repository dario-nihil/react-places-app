import React from "react";
import styles from "./MainHeader.module.css";

type AppProps = {
  children: React.ReactNode;
};

const MainHeader = (props: AppProps) => {
  const { children } = props;
  return <header className={styles["main-header"]}>{children}</header>;
};

export default MainHeader;
