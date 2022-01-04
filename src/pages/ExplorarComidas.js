import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExplorarComidas() {
  return (
    <>
      <Header
        title="Explorar Comidas"
        btnAvaliable={ false }
      />

      <Link to="/explorar/comidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingrediente
        </button>
      </Link>

      <Link to="/explorar/comidas/area">
        <button
          type="button"
          data-testid="explore-by-area"
        >
          Por Local de Origem
        </button>
      </Link>

      <Link to={ `/comidas/${'***ID ALEATÓRIO'}` }>
        {/*
      Ao clicar no botão "Me Surpreenda!" da tela de explorar comidas a
      rota muda para a página de detalhes de uma comida aleatória obtida através do
      endpoint https://www.themealdb.com/api/json/v1/1/random.php;> */}
        <button
          type="button"
          data-testid="explore-surprise"
        >
          Me Surpreenda!
        </button>
      </Link>
      <Footer />
    </>
  );
}

export default ExplorarComidas;
