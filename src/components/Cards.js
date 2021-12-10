import React from 'react';
import PropTypes from 'prop-types';

function Cards({ item, index }) {
  const renderCards = (food) => (
    <div data-testid={ `${index}-recipe-card` }>
      <p data-testid={ `${index}-card-name` }>{ item[`str${food}`] }</p>
      <img
        alt={ item[`str${food}`] }
        src={ item[`str${food}Thumb`] }
        data-testid={ `${index}-card-img` }
      />
    </div>
  );

  return (
    item.idMeal ? renderCards('Meal') : renderCards('Drink')
  );
}

Cards.propTypes = {
  item: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }),
  index: PropTypes.number.isRequired,
};

Cards.defaultProps = {
  item: PropTypes.shape({
    strDrink: '',
    strDrinkThumb: '',
    strMeal: '',
    strMealThumb: '',
  }),
};

export default Cards;
