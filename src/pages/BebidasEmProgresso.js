/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getBebidasID } from '../service/GetBebidas';
import Context from '../context/Context';
import ShareBtn from '../components/ShareBtn';
import FavoriteBtn from '../components/FavoriteBtn';
import { arrayFilter, checkTarget } from '../service/Helpers';

function BebidasEmProgresso({ match }) {
  const [isChecked, toggleChecked] = useState(false);
  const { ingredientes, medidas, item, setItem, setIngredientes,
    setMedidas } = useContext(Context);
  const { id } = match.params;

  useEffect(() => {
    getBebidasID(id).then((response) => setItem(response[0]));
  }, []);

  useEffect(() => {
    if (item) {
      arrayFilter(item, 'strIngredient', setIngredientes);
      arrayFilter(item, 'strMeasure', setMedidas);
    }
  }, [item]);

  console.log(item);
  return (
    <>
      {item && (
        <img data-testid="recipe-photo" alt="img" src={ item.strDrinkThumb } />
      )}

      <h1 data-testid="recipe-title">{item.strDrink}</h1>
      <h2 data-testid="recipe-category">
        { item.strCategory }
        {' '}
      </h2>

      <ShareBtn pathname={ item.idDrink } type="comidas" />
      <FavoriteBtn id={ item.idDrink } />

      <ul isCheckbox={ false }>
        Ingredients
        {ingredientes.map((ingrediente, index) => (
          <li key={ index } data-testid={ `${index}-ingredient-step` }>
            {ingrediente[1]}
            {' - '}
            {medidas[index][1]}
            {' - '}
            <input
              type="checkbox"
              checked={ isChecked }
              onClick={ (e) => toggleChecked(checkTarget(e)) }
            />
          </li>
        ))}
      </ul>

      <p data-testid="instructions">
        Instructions
        { item.strInstructions }
      </p>

      <button type="button" data-testid="finish-recipe-btn">
        Finalizar
      </button>

    </>
  );
}

BebidasEmProgresso.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default BebidasEmProgresso;
