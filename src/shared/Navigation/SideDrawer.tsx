import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import styles from "./SideDrawer.module.css";

type AppProps = {
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
};

const SideDrawer = (props: AppProps) => {
  const { children, show, onClose } = props;
  const nodeRef = React.useRef(null);
  const content = (
    <CSSTransition
      nodeRef={nodeRef}
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className={styles["side-drawer"]} onClick={onClose}>
        {children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("drawer-hook") as HTMLElement
  );
};

export default SideDrawer;
