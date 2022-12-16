import { NavLink } from "react-router-dom";

import styles from "./Button.module.css";

type AppProps = {
  size?: string;
  type?: "submit" | "reset" | "button";
  inverse?: boolean;
  danger?: boolean;
  href?: string;
  to?: string;
  exact?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = (props: AppProps) => {
  const {
    children,
    danger,
    disabled,
    exact,
    href,
    inverse,
    onClick,
    size,
    type,
    to,
  } = props;

  if (href) {
    return (
      <a
        className={`${styles.button} button--${size || "default"} ${
          inverse && styles["button--inverse"]
        } ${danger && styles["button--danger"]}`}
        href={href}
      >
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <NavLink
        to={to}
        exact={exact}
        className={`${styles.button} button--${size || "default"} ${
          inverse && styles["button--inverse"]
        } ${danger && styles["button--danger"]}`}
      >
        {children}
      </NavLink>
    );
  }
  return (
    <button
      className={`${styles.button} button--${size || "default"} ${
        inverse && styles["button--inverse"]
      } ${danger && styles["button--danger"]}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
