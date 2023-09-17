import React, { useState } from "react";
import styles from "./Arrow.module.css";

function ArrowBig({ onClick }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
    onClick();
  };

  return (
    <div className={styles.arrow_mouse} onClick={toggleFlip}>
      <svg
        className={`${styles.svg_container} ${isFlipped ? styles.flipped : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6.04695 7L12 12.9924L17.9531 7L20 9.00378L12 17L4 9.00378L6.04695 7Z"
          fill="#333333"
        />
      </svg>
    </div>
  );
}

export default ArrowBig;
