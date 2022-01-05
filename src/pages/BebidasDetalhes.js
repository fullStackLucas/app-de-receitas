import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Cards from '../components/Cards';
import { getBebidasID } from '../service/GetBebidas';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function BebidasDetalhes({ match }) {
  const [item, setItem] = useState('');
  const { id } = match.params;
  const getDrink = async () => {
    const drink = await getBebidasID(id);
    console.log(drink, '<<<<<<');
    setItem(drink[0]);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { getDrink(); }, []);

  return (
    <div>
      <img data-testid="recipe-photo" alt="img" src={ item.strDrinkThumb } />

      <h1 data-testid="recipe-title">{ item.strDrink }</h1>

      <button type="button">
        <img
          src={ shareIcon }
          alt="shareIcon"
          data-testid="share-btn"
        />
        Compartilhar
      </button>

      <button type="button">
        <img
          src={ whiteHeartIcon }
          alt="HeartIcon"
          data-testid="favorite-btn"
        />
        Favoritar
      </button>

      <button type="button">
        <img
          src={ blackHeartIcon }
          alt="HeartIcon"
          data-testid="favorite-btn"
        />
        Favoritar
      </button>

      <p data-testid="recipe-category">
        { item.strCategory }
        {' '}
      </p>

      {/*   <ol data-testid="`${index}-ingredient-name-and-measure`">
        ingredientes
      </ol> */}

      <p data-testid="instructions">
        {' '}
        { item.strInstructions }
        {' '}
      </p>

      {/* <Cards data-testid="${index}-recomendation-card"> Cards </Cards> */}


      <button
        type="button"
        data-testid="start-recipe-btn"
      >
        Iniciar Receita
      </button>
    </div>
  );
}

BebidasDetalhes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default BebidasDetalhes;
