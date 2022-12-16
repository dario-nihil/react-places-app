import ReactDOM from "react-dom";

import styles from "./SideDrawer.module.css";

type AppProps = {
  children: React.ReactNode;
};

const SideDrawer = (props: AppProps) => {
  const { children } = props;
  const content = <aside className={styles["side-drawer"]}>{children}</aside>;

  return ReactDOM.createPortal(
    content,
    document.getElementById("drawer-hook") as HTMLElement
  );
};

export default SideDrawer;
