import React from "react";

import styles from "./Card.module.css";

type AppProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const Card = (props: AppProps) => {
  const { className, children, style } = props;
  return (
    <div className={`${styles.card} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;
