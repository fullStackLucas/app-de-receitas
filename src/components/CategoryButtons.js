import React, { useState, useEffect } from 'react';
import { getCategoriaComidas } from '../service/GetComidas';

function CategoryButtons() {
  const [dataMealsCategories, setDataMealsCategories] = useState([]);
  const MAX_LENGTH_CATEGORIES = 5;
  const mealsCategories = dataMealsCategories.slice(0, MAX_LENGTH_CATEGORIES);

  useEffect(() => {
    getCategoriaComidas().then((response) => setDataMealsCategories([...response]));
  }, []);

  console.log(dataMealsCategories);
  return (
    <div className="category-buttons">
      { mealsCategories.map((category) => (
        <button
          data-testid={ `${category.strCategory}-category-filter` }
          type="button"
          key={ category.strCategory }
        >
          {category.strCategory}
        </button>
      )) }
    </div>
  );
}

export default CategoryButtons;
