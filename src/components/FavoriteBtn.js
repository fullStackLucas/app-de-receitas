// import PropTypes from 'prop-types';
import React from 'react';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
// import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function FavoriteBtn() {
  return (
    <button type="button">
      <img
        src={ whiteHeartIcon }
        alt="HeartIcon"
        data-testid="favorite-btn"
      />
      Favoritar
    </button>
  );
}
