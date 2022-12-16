import ReactDOM from "react-dom";

import styles from "./Backdrop.module.css";

type AppProps = {
  onClick: () => void;
};

const Backdrop = (props: AppProps) => {
  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={props.onClick}></div>,
    document.getElementById("backdrop-hook") as HTMLElement
  );
};

export default Backdrop;
