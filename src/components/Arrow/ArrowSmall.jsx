import React, { useState } from "react";
import styles from "./Arrow.module.css";

function ArrowSmall({ toggleAnswerBlockVisibility }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
    toggleAnswerBlockVisibility();
  };

  return (
    <div className={styles.arrow_mouse} onClick={toggleFlip}>

      <svg
        className={`${styles.svg_container} ${isFlipped ? styles.flipped : ""}`}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.16315 9L12 13.794L16.8369 9L18.5 10.603L12 17L5.5 10.603L7.16315 9Z"
          fill="#333333"
        />
      </svg>
    </div>
  );
}

export default ArrowSmall;
