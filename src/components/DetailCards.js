import React from 'react';
import PropTypes from 'prop-types';
import '../style/cards.css';
import { Link } from 'react-router-dom';

function DetailCards({ item, index }) {
  const renderCards = (food, portugueseFood) => (
    <div className="card" data-testid={ `${index}-recomendation-card` }>
      <p
        className="card_name"
        data-testid={ `${index}-recomendation-title` }
      >
        { item[`str${food}`] }
      </p>
      <Link to={ `${portugueseFood}/${item[`id${food}`]}` }>
        <img
          className="card_img"
          alt={ item[`str${food}`] }
          src={ item[`str${food}Thumb`] }
          data-testid={ `${index}-card-img` }
        />
      </Link>
      <div className="card_overlay">
        {item.strCategory}
      </div>
    </div>
  );

  return (
    item.idMeal ? renderCards('Meal', 'comidas') : renderCards('Drink', 'bebidas')
  );
}

DetailCards.propTypes = {
  item: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }),
  index: PropTypes.number.isRequired,
};

DetailCards.defaultProps = {
  item: PropTypes.shape({
    strDrink: '',
    strDrinkThumb: '',
    strMeal: '',
    strMealThumb: '',
  }),
};

export default DetailCards;
