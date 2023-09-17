import React from "react";
import styles from "./AnswerBlock.module.css";

function YesNoBlock({ onYesClick, onNoClick, title, hideControl }) {
  const handleYesClick = () => {
    onYesClick();
  };

  const handleNoClick = () => {
    onNoClick();
  };

  return (
    <div className={styles.yes_no_block}>
      <p className={styles.review_paragraph}>{title}</p>
      <div className={styles.yes_no_btns}>
        {!hideControl && (
          <>
            <button className={styles.btn} onClick={handleYesClick}>
              Да
            </button>
            <button className={styles.btn} onClick={handleNoClick}>
              Нет
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default YesNoBlock;
