import PropTypes from 'prop-types';
import React from 'react';

export default function FavoriteBtn() {
  const tipo = type === 'comidas' ? 'meals' : 'cocktails';
  const recipeButton = () => (
    <div className="favoritar">

      <button type="button">
        <img
          src={ whiteHeartIcon }
          alt="HeartIcon"
          data-testid="favorite-btn"
        />
        Favoritar
      </button>

    </div>
  );

}
