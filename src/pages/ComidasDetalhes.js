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
  const { ingredientes, medidas, setIngredientes,
    setMedidas, item, setItem, dataDrinks } = useContext(Context);
  const { id } = match.params;
  useEffect(() => {
    const getFood = async () => {
      const food = await getReceitasID(id);
      setItem(food[0]);
    };
    getFood();
  }, [id, setItem]);

  useEffect(() => {
    if (item) {
      // a condição verdadeira qdo existe, pq sim!
      const arrayIngredientes = Object.entries(item) // keys vem só chave, value só valor!
        .filter((ingrediente) => ingrediente[0].includes('strIngredient')
        && ingrediente[1]);
      // console.log(arrayIngredientes);
      setIngredientes(arrayIngredientes);

      const arrayMedidas = Object.entries(item) // keys vem só chave, value só valor!
        .filter((medida) => medida[0].includes('strMeasure')
      && medida[1] !== ' ' && medida[1]);
      // console.log(arrayMedidas);
      setMedidas(arrayMedidas);
    }
  }, [item, setIngredientes, setMedidas]);
  // console.log(item);

  return (
    <div>
      <div className="detalhes">
        <h1 data-testid="recipe-title" className="detail-title">{ item.strMeal }</h1>
        <h2 data-testid="recipe-category" className="detail-category">
          { item.strCategory }
          {' '}
        </h2>
        <div>
          <img
            className="top-img"
            data-testid="recipe-photo"
            alt="img"
            src={ item.strMealThumb }
          />
        </div>
        <div className="datail-buttons">
          <ShareBtn pathname={ id } type="comidas" />

          <FavoriteBtn id={ id } />
        </div>

        { /* isCheckbox={ false }  dentro de ul gerando warning */ }
        <ul>
          <h3 className="detail-h3">Ingredients</h3>
          {ingredientes.map((ingrediente, index) => (
            <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
              {ingrediente[1]}
              {' - '}
              {medidas[index][1]}
            </li>
          ))}
        </ul>

        <h3 className="detail-h3">Modo de Preparo</h3>
        <p data-testid="instructions" className="detail-instruction">
          Instructions
          { item.strInstructions }
        </p>

        <ReactPlayer
          className="player"
          data-testid="video"
          width="100%"
          url={ item.strYoutube }
        />

        <h3 className="detail-h3">Recomendações</h3>
        <Recommendations items={ dataDrinks } />
      </div>
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
