import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import Cards from '../components/Cards';
import { getReceitasID } from '../service/GetComidas';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function ComidasDetalhes({ match }) {
  const [item, setItem] = useState('');
  const [ingredientes, setIngredientes] = useState([]);
  const [medidas, setMedidas] = useState([]);
  const { id } = match.params;
  const getFood = async () => {
    const food = await getReceitasID(id);
    // console.log(food, '<<<<<<');
    setItem(food[0]);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { getFood(); }, []);

  // useEffect(() => { console.log(item, 'item consolado'); }, [item]);

  useEffect(() => {
    if (item) // a condição verdadeira qdo existe, pq sim!
    {
      const arrayIngredientes = Object.entries(item) // keys vem só chave, value só valor!
        .filter((ingrediente) => ingrediente[0].includes('strIngredient')
        && ingrediente[1]);
      console.log(arrayIngredientes);
      setIngredientes(arrayIngredientes);

      const arrayMedidas = Object.entries(item) // keys vem só chave, value só valor!
        .filter((medida) => medida[0].includes('strMeasure')
      && medida[1] !== ' ' && medida[1]);
      console.log(arrayMedidas);
      setMedidas(arrayMedidas);
    }
  }, [item]);

  return (
    <div>
      <img data-testid="recipe-photo" alt="img" src={ item.strMealThumb } />

      <h1 data-testid="recipe-title">{ item.strMeal }</h1>

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

      <ol data-testid="`${index}-ingredient-name-and-measure`">
        Ingredients
        {ingredientes.map()}
      </ol>

      <p data-testid="instructions">
        {' '}
        { item.strInstructions }
        {' '}
      </p>

      <p data-testid="video">
        {' '}
        { item.strYoutube }
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

ComidasDetalhes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ComidasDetalhes;
