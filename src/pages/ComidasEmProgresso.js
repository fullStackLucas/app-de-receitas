/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getReceitasID } from '../service/GetComidas';
import Context from '../context/Context';
// import shareIcon from '../images/shareIcon.svg';
// import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function ComidasEmProgresso({ match }) { // Adicionado match e prop-types
  const { ingredientes, medidas, item, setItem } = useContext(Context);
  const { id } = match.params; // Linha adicionada
  useEffect(() => {
    getReceitasID(id).then((response) => setItem(response[0])); // Original: setItem(response)
  }, []);

  console.log(item);
  return (
    <>
      {item && (
        <img data-testid="recipe-photo" alt="img" src={ item.strMealThumb } /> // original: src={ item[0].strMealThumb }
      )}

      <h1 data-testid="recipe-title">{item.strMeal}</h1>

      <ul isCheckbox={ false }>
        Ingredients
        {ingredientes.map((ingrediente, index) => (
          <li key={ index } data-testid={ `${index}-ingredient-step` }>
            {ingrediente[1]}
            {' - '}
            {medidas[index][1]}
          </li>
        ))}
      </ul>
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
