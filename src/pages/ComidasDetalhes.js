import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
// import Cards from '../components/Cards';
import ReactPlayer from 'react-player/youtube';
import { getReceitasID } from '../service/GetComidas';
import Context from '../context/Context';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function ComidasDetalhes({ match }) {
  const { ingredientes,
    medidas, setIngredientes, setMedidas, item, setItem } = useContext(Context);
  const { id } = match.params;
  const getFood = async () => {
    const food = await getReceitasID(id);
    // console.log(food, '<<<<<<');
    setItem(food[0]);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { getFood(); }, []);

  // useEffect(() => { console.log(item, 'item consolado'); }, [item])

  useEffect(() => {
    if (item) {
      // a condição verdadeira qdo existe, pq sim!
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

  console.log(item);

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

      <ul isCheckbox={ false }>
        Ingredients
        {ingredientes.map((ingrediente, index) => (
          <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
            {ingrediente[1]}
            {' - '}
            {medidas[index][1]}
          </li>
        ))}
      </ul>

      <p data-testid="instructions">
        Instructions
        { item.strInstructions }
      </p>

      <ReactPlayer
        data-testid="video"
        url={ item.strYoutube }
      />

      <p data-testid="0-recomendation-card"> p </p>
      <p data-testid="1-recomendation-card"> p </p>

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
