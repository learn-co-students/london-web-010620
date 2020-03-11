import React from "react";

const CategoryFilterButtons = props => {
  //   const { categories, selectedCategory } = props;
  //   const categories = props.categories;
  //   const selectedCategory = props.selectedCategory;
  const { categories, selectedCategory, setSelectedCategory } = props;

  return (
    <div className="categories">
      <h2>Category filters</h2>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilterButtons;
