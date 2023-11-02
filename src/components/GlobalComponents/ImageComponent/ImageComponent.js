import React from 'react';
import styles from './ImageComponent.module.css';

function ImageComponent({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${styles[className]}`}
    />
  );
}

export default ImageComponent;