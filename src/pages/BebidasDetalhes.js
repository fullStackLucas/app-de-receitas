/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
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
  const { ingredientes, medidas, setIngredientes,
    setMedidas, item, setItem, dataMeals } = useContext(Context);
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
      <div className="detalhes">
        <h1 data-testid="recipe-title" className="detail-title">{ item.strDrink }</h1>
        <h2 data-testid="recipe-category" className="detail-category">
          { item.strAlcoholic }
          {' '}
        </h2>
        <img
          className="top-img"
          data-testid="recipe-photo"
          alt="img"
          src={ item.strDrinkThumb }
        />
        <div>

          <ShareBtn pathname={ id } type="bebidas" />

          <FavoriteBtn id={ id } />
        </div>

        {/*   <ol data-testid="`${index}-ingredient-name-and-measure`">
        ingredientes
      </ol> */}

        <ul isCheckbox={ false }>
          <h3 className="detail-h3">Ingredientes</h3>
          {ingredientes && ingredientes.map((ingrediente, index) => {
            console.log(medidas);
            return (
              <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
                {`${ingrediente[1]} -  ${medidas[index] ? medidas[index][1] : ''}`}
              </li>
            );
          })}
        </ul>
        <h3 className="detail-h3">Modo de Preparo</h3>

        <p data-testid="instructions" className="detail-instruction">
          {' '}
          { item.strInstructions }
          {' '}
        </p>
        <h3 className="detail-h3">Recomendações</h3>

        <Recommendations items={ dataMeals } />
      </div>
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
