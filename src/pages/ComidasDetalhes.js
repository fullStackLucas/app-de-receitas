/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player/youtube';
import { getReceitasID } from '../service/GetComidas';
import Context from '../context/Context';
import '../style/detalhes.css';
import ShareBtn from '../components/ShareBtn';
import Recommendations from '../components/Recommendations';
import StartRecipeButton from '../components/StartRecipeButton';
import FavoriteBtn from '../components/FavoriteBtn';

function ComidasDetalhes({ match }) {
  const { ingredientes,
    medidas, setIngredientes, setMedidas, item, setItem } = useContext(Context);
  const { dataDrinks } = useContext(Context);
  const { id } = match.params;
  const getFood = async () => {
    const food = await getReceitasID(id);
    setItem(food[0]);
  };
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
  // console.log(item);

  return (
    <div>
      <img
        className="top-img"
        data-testid="recipe-photo"
        alt="img"
        src={ item.strMealThumb }
      />

      <h1 data-testid="recipe-title">{ item.strMeal }</h1>
      <h2 data-testid="recipe-category">
        { item.strCategory }
        {' '}
      </h2>

      <ShareBtn pathname={ id } type="comidas" />

      <FavoriteBtn id={ id } />

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
        className="player"
        data-testid="video"
        width="100%"
        url={ item.strYoutube }
      />
      <Recommendations items={ dataDrinks } />
      <StartRecipeButton id={ id } type="comidas" />
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
