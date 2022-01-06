import React, { useContext, useEffect } from 'react';
import { getReceitasID } from '../service/GetComidas';
import Context from '../context/Context';
// import shareIcon from '../images/shareIcon.svg';
// import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function ComidasEmProgresso() {
  const { ingredientes, medidas, item, setItem } = useContext(Context);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getReceitasID('52771').then((response) => setItem(response));
  }, []);

  console.log(item);
  return (
    <>
      {item && (
        <img data-testid="recipe-photo" alt="img" src={ item[0].strMealThumb } />
      )}

      <h1 data-testid="recipe-title">{item.strMeal}</h1>

      <ul isCheckbox={ false }>
        Ingredients
        {ingredientes.map((ingrediente, index) => (
          <li key={ index } data-testid={ `${index}-ingredient-step` }>
            {ingrediente[1]}
            {' - '}
            {medidas[index][1]}
          </li>
        ))}
      </ul>
      <button type="button" data-testid="finish-recipe-btn">
        Finalizar
      </button>
    </>
  );
}

export default ComidasEmProgresso;
