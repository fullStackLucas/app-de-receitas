import React from 'react';

function BebidasDetalhes() {
  return (
    <div>

    <img data-testid="recipe-photo">
      {/* imagem da receita  */}
    </img>

    <h1 data-testid="recipe-title">
      Titulo da Categoria
    </h1>

    <Link to="/* compartilhar */">
      <button
        type="button"
        data-testid="share-btn"
      >
        Compartilhar
      </button>
    </Link>

    <Link to="/* favoritar */">
      <button
        type="button"
        data-testid="favorite-btn"
      >
        Favoritar
      </button>
    </Link>

    <p data-testid="recipe-category"> texto da categoria </p>

    <ol data-testid="${index}-ingredient-name-and-measure">
      ingredientes
    </ol>

    <p data-testid="instructions"> texto de instruções </p>


    <Cards data-testid="${index}-recomendation-card"> cards das receitas recomendadas </Cards>

    <Link to="/* iniciar a receita */">
      <button
        type="button"
        data-testid="start-recipe-btn"
      >
        Iniciar Receita
      </button>
    </Link>
  </div>
  
);
  
  );
}

export default BebidasDetalhes;
