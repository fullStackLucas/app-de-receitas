import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getRandomComidas } from '../service/GetComidas';

function ExplorarComidas() {
  const history = useHistory();
  const randomFood = async () => {
    const food = await getRandomComidas();
    history.push(`/comidas/${food[0].idMeal}`);
  };

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
          Por Ingredientes
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

      {/*
      Ao clicar no botão "Me Surpreenda!" da tela de explorar comidas a
      rota muda para a página de detalhes de uma comida aleatória obtida através do
      endpoint https://www.themealdb.com/api/json/v1/1/random.php;> */}
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ randomFood }
      >
        Me Surpreenda!
      </button>
      <Footer />
    </>
  );
}

export default ExplorarComidas;
