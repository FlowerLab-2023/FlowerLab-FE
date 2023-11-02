import React from 'react';
import styles from './TextComponent.module.css';


function TextComponent({ text, className }) {
  return (
    <div className={`${styles[className]}`}>
      {text}
    </div>
  );
}

export default TextComponent;