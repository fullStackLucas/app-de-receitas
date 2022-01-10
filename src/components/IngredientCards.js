import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import '../style/cards.css';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import { getComidaIngrediente } from '../service/GetComidas';
import { getBebidasIngrediente } from '../service/GetBebidas';

function IngredientCards({ item, index }) {
  const { setDataMeals, setDataDrinks } = useContext(Context);
  const foodSubmit = async (inputValue) => {
    if (item.strIngredient) {
      const response = await getComidaIngrediente(inputValue);
      await setDataMeals(response);
    } else {
      const response = await getBebidasIngrediente(inputValue);
      await setDataDrinks(response);
    }
  };

  const renderCards = (ingredient, portugueseFood, site) => (
    <div className="card" data-testid={ `${index}-ingredient-card` }>
      <p
        className="card_name"
        data-testid={ `${index}-card-name` }
      >
        { item[ingredient] }
      </p>
      <Link
        to={ `/${portugueseFood}` }
        onClick={ () => foodSubmit(item[ingredient]) }
      >
        <img
          className="card_img"
          alt={ item[ingredient] }
          src={ `https://www.${site}.com/images/ingredients/${item[ingredient]}-Small.png` }
          data-testid={ `${index}-card-img` }
        />
      </Link>
      <div className="card_overlay">
        {item.strCategory}
      </div>
    </div>
  );

  return (
    item.strIngredient
      ? renderCards('strIngredient', 'comidas', 'themealdb')
      : renderCards('strIngredient1', 'bebidas', 'thecocktaildb')
  );
}

IngredientCards.propTypes = {
  item: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }),
  index: PropTypes.number.isRequired,
};

IngredientCards.defaultProps = {
  item: PropTypes.shape({
    strDrink: '',
    strDrinkThumb: '',
    strMeal: '',
    strMealThumb: '',
  }),
};

export default IngredientCards;
