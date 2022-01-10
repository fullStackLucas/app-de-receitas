// import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { isFavorited, setFavoritedItem } from '../service/localStorage';
import Context from '../context/Context';

export default function FavoriteBtn() {
  const { item } = useContext(Context);
  const [favorite, setFavorite] = useState(isFavorited(item.idDrink) || false);

  return (
    <button
      type="button"
      onClick={ () => { setFavoritedItem(item); setFavorite(!favorite); } }
    >
      <img
        src={ favorite ? blackHeartIcon : whiteHeartIcon }
        alt="HeartIcon"
        data-testid="favorite-btn"
      />
      Favoritar
    </button>
  );
}
