/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { getBebidasID } from '../service/GetBebidas';
import Context from '../context/Context';
import ShareBtn from '../components/ShareBtn';
import FavoriteBtn from '../components/FavoriteBtn';
import { filterIgredientsOrMeasures,
  checkTarget, searchFromLocalStorageById } from '../service/Helpers';
import { defineInProgressIgredients } from '../service/localStorage';
import '../App.css';

function BebidasEmProgresso({ match }) {
  const { ingredientes, medidas, item, setItem, setIngredientes,
    setMedidas } = useContext(Context);
  const history = useHistory();
  const { id } = match.params;
  const [isChecked, toggleChecked] = useState(
    searchFromLocalStorageById('drinksInProgress', id),
  );
  const [isFinishBtnDisabled, toogleFinishBtn] = useState(true);

  useEffect(() => {
    getBebidasID(id).then((response) => setItem(response[0]));
  }, []);

  useEffect(() => {
    defineInProgressIgredients('drinksInProgress', id);
    const prevState = JSON.parse(localStorage.getItem('drinksInProgress'));
    localStorage.setItem('drinksInProgress', JSON.stringify({
      ...prevState,
      [id]: isChecked,
    }));
    const comparison = ingredientes
      .every((ingrediente, index) => isChecked[index]);
    console.log(comparison);
    toogleFinishBtn(!comparison);
  }, [isChecked, ingredientes]);

  useEffect(() => {
    if (item) {
      filterIgredientsOrMeasures(item, 'strIngredient', setIngredientes);
      filterIgredientsOrMeasures(item, 'strMeasure', setMedidas);
    }
  }, [item]);

  return (
    <div className="detalhes">
      <h1 data-testid="recipe-title" className="detail-title">{item.strDrink}</h1>
      <h2 data-testid="recipe-category" className="detail-category">
        { item.strCategory }
        {' '}
      </h2>
      {item && (
        <img
          className="top-img"
          data-testid="recipe-photo"
          alt="img"
          src={ item.strDrinkThumb }
        />
      )}
      <div>
        <ShareBtn pathname={ item.idDrink } type="bebidas" />
        <FavoriteBtn id={ id } />
      </div>
      <ul isCheckbox={ false }>
        <h3 className="detail-h3">Ingredients</h3>
        {ingredientes.map((ingrediente, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-step` }
            className={ searchFromLocalStorageById('drinksInProgress', id)[index]
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
      <h3 className="detail-h3">Modo de Preparo</h3>
      <p data-testid="instructions">
        Instructions
        { item.strInstructions }
      </p>
      <button
        className="finish btn btn-primary btn-lg btn-block"
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ isFinishBtnDisabled }
        onClick={ () => history.push('/receitas-feitas') }
      >
        Finalizar
      </button>

    </div>
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
