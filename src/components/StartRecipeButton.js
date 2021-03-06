import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { isDoneRecipe, isInProgressRecipe } from '../service/localStorage';

export default function StartRecipeButton({ id, type }) {
  const tipo = type === 'comidas' ? 'meals' : 'cocktails';
  const recipeButton = () => (
    <div className="iniciar_receita">
      <Link to={ `/${type}/${id}/in-progress` }>
        <button
          className="btn btn-primary"
          type="button"
          data-testid="start-recipe-btn"
        >
          {isInProgressRecipe(id, tipo) ? 'Continuar Receita' : 'Iniciar Receita'}
        </button>
      </Link>
    </div>
  );

  return (
    isDoneRecipe(id) ? '' : recipeButton()
  );
}

StartRecipeButton.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
