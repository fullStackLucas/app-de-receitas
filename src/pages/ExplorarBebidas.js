import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../style/explorar.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getRandonBebidas } from '../service/GetBebidas';

function ExplorarBebidas() {
  const history = useHistory();
  const randomDrink = async () => {
    const drink = await getRandonBebidas();
    history.push(`/bebidas/${drink[0].idDrink}`);
  };
  return (
    <>
      <div className="pages explorar">
        <Header
          title="Explorar Bebidas"
          btnAvaliable={ false }
        />
        <Link to="/explorar/bebidas/ingredientes">
          <button
            className="btn btn-outline-dark explorar-btn"
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>

        {/*
          Ao clicar no botão "Me Surpreenda!" da tela de explorar bebidas a
          rota muda para a página de detalhes de uma bebida aleatória
          obtida através do endpoint https://www.thecocktaildb.com/api/json/v1/1/random.php.>
        */}
        <button
          className="btn btn-outline-dark explorar-btn"
          type="button"
          data-testid="explore-surprise"
          onClick={ randomDrink }
        >
          Me Surpreenda!
        </button>
      </div>
      <Footer />
    </>
  );
}

export default ExplorarBebidas;
