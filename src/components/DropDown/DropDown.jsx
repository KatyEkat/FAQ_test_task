import React, { useState } from "react";
import ArrowSmall from "../Arrow/ArrowSmall";
import ArrowBig from "../Arrow/ArrowBig";
import AnswerBlock from "../RightBlock/AnswerBlock/AnswerBlock";
import QuestionBlock from "../RightBlock/AnswerBlock/QuestionBlock";
import styles from "./DropDown.module.css";

/**
 * export const categories = [
  {
    title: "Оплата, баланс, счет",
    raiting: 0,
    id: "payBalance",
    questions: payBalanceQuestions,
  },
 */

const Category = ({ data }) => {
  const { title, raiting, id, questions } = data;

  return (
    <section>
      <h2>{title}</h2>
    </section>
  );
};

// function Dropdown({ title, isAnswerBlock }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };
// console.log(isOpen)
//   return (
//     <div>
//       <div className={styles.block_string} onClick={toggleDropdown}>
//         <h2>{title}</h2>
//         {isAnswerBlock ? (
//           <ArrowSmall onClick={toggleDropdown} />
//         ) : (
//           <ArrowBig onClick={toggleDropdown} />
//         )}
//       </div>

//       {isOpen && (isAnswerBlock ? <AnswerBlock /> : <QuestionBlock />)}
//     </div>
//   );
// }

export default Category;
