import { useState } from "react";
import Category from "../Category";
import styles from "./index.module.css";

const Categories = ({ data }) => {
  const [dataCopy, setDataCopy] = useState(() =>
    data.map((el) => ({ ...el, questions: [...el.questions] }))
  );

  const findQuestion = (categoryId, id) => {
    const category = dataCopy.find((el) => el.id === categoryId);
    const question = category.questions.find((el) => el.id === id);
    return question;
  };

  const sort = (categoryId) => {
    const categoryIndex = dataCopy.findIndex((el) => el.id === categoryId);
    dataCopy[categoryIndex].questions.sort((a, b) => {
      if (a.rating > b.rating) {
        return -1;
      }
      if (a.rating < b.rating) {
        return 1;
      }
      return 0;
    });

    dataCopy.sort((a, b) => {
      if (a.rating > b.rating) {
        return -1;
      }
      if (a.rating < b.rating) {
        return 1;
      }
      return 0;
    });

    setDataCopy([...dataCopy]);
  };

  const changeRatingQuestion = (categoryId, id, rating) => {
    if (rating <= 0) return;
    const categoryIndex = dataCopy.findIndex((el) => el.id === categoryId);
    const questionIndex = dataCopy[categoryIndex].questions.findIndex(
      (el) => el.id === id
    );

    dataCopy[categoryIndex].questions[questionIndex].rating = rating;
    setDataCopy([...dataCopy]);
  };

  const changeRatingCategory = (categoryId, rating) => {
    const categoryIndex = dataCopy.findIndex((el) => el.id === categoryId);
    dataCopy[categoryIndex].rating = rating;
    setDataCopy([...dataCopy]);
  };

  const findCategory = (categoryId) => {
    return dataCopy.find((el) => el.id === categoryId);
  };

  const onYes = (categoryId, id) => {
    changeRatingQuestion(categoryId, id, ++findQuestion(categoryId, id).rating);
    changeRatingCategory(categoryId, ++findCategory(categoryId).rating);
    sort(categoryId);
  };

  const onNo = (categoryId, id) => {
    const category = findCategory(categoryId);
    const question = findQuestion(categoryId, id);
    if (!category.rating && !question.rating) return;
    changeRatingQuestion(categoryId, id, --category.rating);
    changeRatingCategory(categoryId, --question.rating);
    sort(categoryId);
  };

  console.log(dataCopy);
  return (
    <section className={styles.container}>
      {dataCopy.map((category) => (
        <Category
          onNo={onNo}
          onYes={onYes}
          data={category}
          id={category.id}
          key={category.id}
        />
      ))}
    </section>
  );
};

export default Categories;
