/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getBebidasID } from '../service/GetBebidas';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../style/detalhes.css';
import Context from '../context/Context';
import Recommendations from '../components/Recommendations';

function BebidasDetalhes({ match }) {
  const [item, setItem] = useState('');
  const [ingredientes, setIngredientes] = useState([]);
  const [medidas, setMedidas] = useState([]);
  const { dataMeals } = useContext(Context);
  const { id } = match.params;
  const getDrink = async () => {
    const drink = await getBebidasID(id);
    console.log(drink, '<<<<<<');
    setItem(drink[0]);
  };
  useEffect(() => { getDrink(); }, []);

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

  return (
    <div>
      <img
        className="top-img"
        data-testid="recipe-photo"
        alt="img"
        src={ item.strDrinkThumb }
      />

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
        { item.strAlcoholic }
        {' '}
      </p>

      {/*   <ol data-testid="`${index}-ingredient-name-and-measure`">
        ingredientes
      </ol> */}

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
        {' '}
        { item.strInstructions }
        {' '}
      </p>

      <Recommendations items={ dataMeals } />

      <div className="iniciar_receita">
        <Link to={ `/bebidas/${id}/in-progress` }>
          <button
            className="btn btn-primary"
            type="button"
            data-testid="start-recipe-btn"
          >
            Iniciar Receita
          </button>
        </Link>
      </div>
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
