import { useState } from "react";
import ArrowBig from "../Arrow/ArrowBig";
import styles from "./index.module.css";
import Questions from "../Questions";
/**
 * export const categories = [
  {
    title: "Оплата, баланс, счет",
    raiting: 0,
    id: "payBalance",
    questions: payBalanceQuestions,
  },
 */

const Category = ({ data, onNo, onYes, id: categoryId }) => {
  const [isOpen, setOpen] = useState(false);
  const { title, questions } = data;

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <ArrowBig onClick={() => setOpen(!isOpen)} />
      </div>
      {isOpen && (
        <Questions
          categoryId={categoryId}
          onNo={onNo}
          onYes={onYes}
          data={questions}
        />
      )}
    </>
  );
};

export default Category;
