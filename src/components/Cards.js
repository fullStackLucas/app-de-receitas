import React from 'react';
import PropTypes from 'prop-types';
import '../style/cards.css';

function Cards({ item, index }) {
  const renderCards = (food) => (
    <div className="card" data-testid={ `${index}-recipe-card` }>
      <p
        className="card_name"
        data-testid={ `${index}-card-name` }
      >
        { item[`str${food}`] }
      </p>
      <img
        className="card_img"
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
