import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";
import { FormEvent } from "react";
import styles from "./Modal.module.css";
import { ChildProcess } from "child_process";

type ModalOverlayProps = {
  className?: string;
  style?: React.CSSProperties;
  header: string;
  headerClass?: string;
  contentClass?: string;
  children?: React.ReactNode;
  footerClass?: string;
  footer: React.ReactNode;
  onSubmit?: (event: FormEvent) => void;
};

const ModalOverlay = (props: ModalOverlayProps) => {
  const {
    className,
    header,
    headerClass,
    onSubmit,
    style,
    children,
    contentClass,
    footerClass,
    footer,
  } = props;

  const content = (
    <div className={`${styles.modal} ${className}`} style={style}>
      <header className={`${styles["modal__header"]} ${headerClass}`}>
        <h2>{header}</h2>
      </header>
      <form
        onSubmit={
          onSubmit ? onSubmit : (event: FormEvent) => event.preventDefault
        }
      >
        <div className={`${styles["modal__content"]} ${contentClass}`}>
          {children}
        </div>
        <footer className={`${styles["modal__footer"]} ${footerClass}`}>
          {footer}
        </footer>
      </form>
    </div>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("modal-hook") as HTMLElement
  );
};

type ModalProps = {
  show: boolean;
  onCancel: () => void;
  overlayProps: ModalOverlayProps;
  children: React.ReactNode;
};

const Modal = (props: ModalProps) => {
  const { onCancel, show, overlayProps, children } = props;

  return (
    <>
      {show && <Backdrop onClick={onCancel} />}
      <CSSTransition
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames={styles.modal}
      >
        <ModalOverlay children={children} {...overlayProps} />
      </CSSTransition>
    </>
  );
};

export default Modal;
