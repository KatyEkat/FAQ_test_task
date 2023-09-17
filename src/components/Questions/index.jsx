import Question from "../Question";

const Questions = ({ data, onYes, onNo, categoryId }) => {
  return (
    <>
      {data.map((question) => (
        <Question
          categoryId={categoryId}
          onNo={onNo}
          onYes={onYes}
          title={question.title}
          answer={question.answer}
          id={question.id}
          key={question.id}
        />
      ))}
    </>
  );
};

export default Questions;
