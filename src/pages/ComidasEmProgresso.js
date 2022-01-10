/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getReceitasID } from '../service/GetComidas';
import Context from '../context/Context';
import ShareBtn from '../components/ShareBtn';
import FavoriteBtn from '../components/FavoriteBtn';
import { filterIgredientsOrMeasures,
  checkTarget, searchFromLocalStorageById } from '../service/Helpers';
import { defineInProgressIgredients } from '../service/localStorage';
import '../App.css';

function ComidasEmProgresso({ match }) { // Adicionado match e prop-types
  const { ingredientes, medidas, item, setItem, setIngredientes,
    setMedidas } = useContext(Context);
  const { id } = match.params; // Linha adicionada
  const [isChecked, toggleChecked] = useState(
    searchFromLocalStorageById('mealsInProgress', id),
  );

  useEffect(() => {
    getReceitasID(id).then((response) => setItem(response[0])); // Original: setItem(response)
  }, []);

  useEffect(() => {
    defineInProgressIgredients('mealsInProgress', id);
    const prevState = JSON.parse(localStorage.getItem('mealsInProgress'));
    localStorage.setItem('mealsInProgress', JSON.stringify({
      ...prevState,
      [id]: isChecked,
    }));
  }, [isChecked]);

  useEffect(() => {
    if (item) {
      filterIgredientsOrMeasures(item, 'strIngredient', setIngredientes);
      filterIgredientsOrMeasures(item, 'strMeasure', setMedidas);
    }
  }, [item]);

  console.log(item);
  return (
    <>
      {item && (
        <img data-testid="recipe-photo" alt="img" src={ item.strMealThumb } />
      )}

      <h1 data-testid="recipe-title">{item.strMeal}</h1>
      <h2 data-testid="recipe-category">
        { item.strCategory }
        {' '}
      </h2>

      <ShareBtn pathname={ item.idMeal } type="comidas" />
      <FavoriteBtn id={ item.idMeal } />

      <ul isCheckbox={ false }>
        Ingredients
        {ingredientes.map((ingrediente, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-step` }
            className={ searchFromLocalStorageById('mealsInProgress', id)[index]
              ? 'done-igredient' : 'igredient' }
          >
            {`${ingrediente[1]} -  ${medidas[index] ? medidas[index][1] : ''}`}
            <input
              type="checkbox"
              checked={ isChecked[index] }
              onClick={ (e) => {
                toggleChecked({
                  ...isChecked,
                  [index]: !isChecked[index],
                });
                checkTarget(e);
              } }
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

ComidasEmProgresso.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ComidasEmProgresso;
