import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import DetailCards from '../components/DetailCards';
import { getBebidasID } from '../service/GetBebidas';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { Link } from 'react-router-dom';
import '../style/detalhes.css'
import Context from '../context/Context';


function BebidasDetalhes({ match }) {
  const [item, setItem] = useState('');
  const [ingredientes, setIngredientes] = useState([]);
  const [medidas, setMedidas] = useState([]);
  const { dataMeals } = useContext(Context)
  const MAX_LENGTH_MEALS = 6;
  const meals = dataMeals.slice(0, MAX_LENGTH_MEALS);
  const { id } = match.params;
  const getDrink = async () => {
    const drink = await getBebidasID(id);
    console.log(drink, '<<<<<<');
    setItem(drink[0]);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

      <div className="cards_detalhes">
        {meals.map((meal, index) => (
          <DetailCards
            item={ meal }
            index={ index }
            key={ meal.idMeals }
          />
        ))}
      </div>

      <button
        className='iniciar_receita'
        type="button"
        data-testid="start-recipe-btn"
      >
        Iniciar Receita
        <Link to={ `/bebidas/${item.index}/in-progress` }></Link>
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
