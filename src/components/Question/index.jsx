import { useState } from "react";
import ArrowSmall from "../Arrow/ArrowSmall";
import styles from "./index.module.css";
import classNames from "classnames";
import YesNoBlock from "../RightBlock/AnswerBlock/YesNoBlock";

const Question = ({ title, answer, id, onYes, onNo, categoryId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showYesNoBlock, setShowYesNoBlock] = useState(true);

  const handleYesClick = () => {
    onYes(categoryId, id);
    setShowYesNoBlock(false);
  };

  const handleNoClick = () => {
    onNo(categoryId, id);
    setShowYesNoBlock(false);
  };

  return (
    <div className={styles.mini_block}>
      <div className={classNames(styles.row, styles.row_content)}>
        <div className={styles.text_block}>
          <p className={classNames(styles.sub_title, styles.title_question)}>
            ВОПРОС
          </p>
          <p className={styles.question_title}>{title}</p>
        </div>
        <div className={styles.arrow}>
          <ArrowSmall toggleAnswerBlockVisibility={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      {isOpen && (
        <>
          <div className={styles.row}>
            <div className={styles.text_block}>
              <p className={classNames(styles.sub_title, styles.title_answer)}>
                ОТВЕТ
              </p>
              <div className={styles.answer_title}>
                <p>{answer}</p>

                <YesNoBlock
                  title={
                    showYesNoBlock
                      ? "Информация была полезной?"
                      : "Отзыв отправлен, спасибо!"
                  }
                  hideControl={!showYesNoBlock}
                  onYesClick={handleYesClick}
                  onNoClick={handleNoClick}
                />
              </div>
            </div>
          </div>
        </>
      )}
      <div className={styles.mini_block_border}></div>
    </div>
  );
};

export default Question;
