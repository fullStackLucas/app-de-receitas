/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { getBebidasID } from '../service/GetBebidas';
import '../style/detalhes.css';
import Context from '../context/Context';
import Recommendations from '../components/Recommendations';
import StartRecipeButton from '../components/StartRecipeButton';
import ShareBtn from '../components/ShareBtn';
import FavoriteBtn from '../components/FavoriteBtn';
import { filterIgredientsOrMeasures } from '../service/Helpers';

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
      filterIgredientsOrMeasures(item, 'strIngredient', setIngredientes);
      filterIgredientsOrMeasures(item, 'strMeasure', setMedidas);
    }
  }, [item]);

  console.log(medidas);
  console.log(item);

  return (
    <div>
      <img
        className="top-img"
        data-testid="recipe-photo"
        alt="img"
        src={ item.strDrinkThumb }
      />

      <h1 data-testid="recipe-title">{ item.strDrink }</h1>

      <ShareBtn pathname={ id } type="bebidas" />

      <FavoriteBtn id={ id } />

      <p data-testid="recipe-category">
        { item.strAlcoholic }
        {' '}
      </p>

      {/*   <ol data-testid="`${index}-ingredient-name-and-measure`">
        ingredientes
      </ol> */}

      <ul isCheckbox={ false }>
        Ingredients
        {ingredientes && ingredientes.map((ingrediente, index) => {
          console.log(medidas);
          return (
            <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
              {`${ingrediente[1]} -  ${medidas[index] ? medidas[index][1] : ''}`}
            </li>
          );
        })}
      </ul>

      <p data-testid="instructions">
        {' '}
        { item.strInstructions }
        {' '}
      </p>

      <Recommendations items={ dataMeals } />
      <StartRecipeButton id={ id } type="bebidas" />
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
