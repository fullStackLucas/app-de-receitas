import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCategoriaBebidas } from '../service/GetBebidas';
import { getCategoriaComidas } from '../service/GetComidas';

function CategoryButtons({ categoryName }) {
  const [dataMealsCategories, setDataMealsCategories] = useState([]);
  const [dataDrinksCategories, setDataDrinksCategories] = useState([]);
  const MAX_LENGTH_CATEGORIES = 5;
  const mealsCategories = dataMealsCategories.slice(0, MAX_LENGTH_CATEGORIES);
  const drinksCategories = dataDrinksCategories.slice(0, MAX_LENGTH_CATEGORIES);

  useEffect(() => {
    getCategoriaComidas().then((response) => setDataMealsCategories([...response]));
    getCategoriaBebidas().then((response) => setDataDrinksCategories([...response]));
  }, []);

  function mapCategory(arrayToMap) {
    return (
      arrayToMap.map((category) => (
        <button
          data-testid={ `${category.strCategory}-category-filter` }
          type="button"
          key={ category.strCategory }
        >
          {category.strCategory}
        </button>
      ))
    );
  }

  function renderButtons(categoriesTypes) {
    return categoriesTypes === 'Comidas'
      ? mapCategory(mealsCategories)
      : mapCategory(drinksCategories);
  }

  console.log(dataMealsCategories);
  console.log(dataDrinksCategories);
  return (
    <div className="category-buttons">
      {renderButtons(categoryName)}
    </div>
  );
}

CategoryButtons.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default CategoryButtons;
