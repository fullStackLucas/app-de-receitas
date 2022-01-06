import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { getBuscaBebidas,
  getCategoriaBebidas, getFilteredDrinks } from '../service/GetBebidas';
import { getBuscaComidas,
  getCategoriaComidas, getFilteredMeals } from '../service/GetComidas';
import Context from '../context/Context';

function CategoryButtons({ categoryName }) {
  const [dataMealsCategories, setDataMealsCategories] = useState([]);
  const [dataDrinksCategories, setDataDrinksCategories] = useState([]);
  const [clickedButton, setClickedButton] = useState('');
  const MAX_LENGTH_CATEGORIES = 5;
  const mealsCategories = dataMealsCategories.slice(0, MAX_LENGTH_CATEGORIES);
  const drinksCategories = dataDrinksCategories.slice(0, MAX_LENGTH_CATEGORIES);

  const { setDataMeals, setDataDrinks } = useContext(Context);

  useEffect(() => {
    getCategoriaComidas().then((response) => setDataMealsCategories([...response]));
    getCategoriaBebidas().then((response) => setDataDrinksCategories([...response]));
  }, []);

  function isNameDuplicated(category) {
    const mainFetch = category === 'Comidas'
      ? getBuscaComidas().then((response) => setDataMeals([...response]))
      : getBuscaBebidas().then((response) => setDataDrinks([...response]));
    return mainFetch;
  }

  function isntNameDuplicated(category, buttonName) {
    const categoryFetch = category === 'Comidas'
      ? getFilteredMeals(buttonName).then((response) => setDataMeals([...response]))
      : getFilteredDrinks(buttonName).then((response) => setDataDrinks([...response]));
    return categoryFetch;
  }

  function onClickButton(categoryType, buttonName) {
    const isButtonDuplicated = clickedButton === buttonName;
    if (isButtonDuplicated) {
      setClickedButton('');
    } else {
      setClickedButton(buttonName);
    }
    return (isButtonDuplicated)
      ? isNameDuplicated(categoryType)
      : isntNameDuplicated(categoryType, buttonName);
  }

  function mapCategory(arrayToMap) {
    return (
      arrayToMap.map((category) => (
        <button
          data-testid={ `${category.strCategory}-category-filter` }
          type="button"
          key={ category.strCategory }
          onClick={ () => onClickButton(categoryName, category.strCategory) }
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

  return (
    <div className="category-buttons">
      {renderButtons(categoryName)}
      <button
        data-testid="All-category-filter"
        type="button"
        onClick={ () => isNameDuplicated(categoryName) }
      >
        All
      </button>
    </div>
  );
}

CategoryButtons.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default CategoryButtons;
