import React from "react";

import styles from "./Avatar.module.css";

type AppProps = {
  className?: string;
  style?: React.CSSProperties;
  image: string;
  alt: string;
  width?: string;
};

const Avatar = (props: AppProps) => {
  const { alt, className, image, style, width } = props;
  return (
    <div className={`${styles.avatar} ${className}`} style={style}>
      <img src={image} alt={alt} style={{ width: width, height: width }} />
    </div>
  );
};

export default Avatar;
