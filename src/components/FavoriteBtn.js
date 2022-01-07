import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { isFavorited, setFavoritedItem } from '../service/localStorage';
import Context from '../context/Context';

export default function FavoriteBtn({ id }) {
  const [favorite, setFavorite] = useState(isFavorited(id));
  const { item } = useContext(Context);
  console.log('favorite', favorite);
  console.log(item, 'item');
  return (
    <button
      type="button"
      data-testid="favorite-btn"
      onClick={ () => { setFavoritedItem(item); setFavorite(!favorite); } }
    >
      <img
        src={ favorite ? blackHeartIcon : whiteHeartIcon }
        alt="HeartIcon"
      />
      Favoritar
    </button>
  );
}

FavoriteBtn.propTypes = {
  id: PropTypes.string.isRequired,
};
