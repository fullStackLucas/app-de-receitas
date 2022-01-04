import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExplorarBebidas() {
  return (
    <>
      <Header
        title="Explorar Bebidas"
        btnAvaliable={ false }
      />
      <Link to="/explorar/bebidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingrediente
        </button>
      </Link>

      <Link to="/???????">
        <button
          type="button"
          data-testid="explore-by-area"
        >
          Por Local de Origem
        </button>
      </Link>

      <Link to={ `/bebidas/${'***ID ALEATÓRIO'}` }>
        {/*
        Ao clicar no botão "Me Surpreenda!" da tela de explorar bebidas a
        rota muda para a página de detalhes de uma bebida aleatória
        obtida através do endpoint https://www.thecocktaildb.com/api/json/v1/1/random.php.> */}
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

export default ExplorarBebidas;
