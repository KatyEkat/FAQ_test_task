import React from "react";

const Category = ({ data }) => {
  const { title } = data;

  return (
    <section>
      <h2>{title}</h2>
    </section>
  );
};

export default Category;
