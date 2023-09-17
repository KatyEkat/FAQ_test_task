import React from "react";
import styles from "./AnswerBlock.module.css";



function Review() {
  return (
    <div className={styles.yes_no_block}>
        <p className={styles.review_paragraph}>Отзыв отправлен, спасибо!</p>
    </div>
  );
}

export default Review;
