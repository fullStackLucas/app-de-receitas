// import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { isFavorited, setFavoritedItem } from '../service/localStorage';
import Context from '../context/Context';

export default function FavoriteBtn() {
  const { item } = useContext(Context);
  return (
    <button
      type="button"
      onClick={ () => { console.log(item); setFavoritedItem(item); } }
    >
      <img
        src={ isFavorited(item.id) ? blackHeartIcon : whiteHeartIcon }
        alt="HeartIcon"
        data-testid="favorite-btn"
      />
      Favoritar
    </button>
  );
}
