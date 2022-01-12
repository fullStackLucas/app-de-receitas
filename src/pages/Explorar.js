import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../style/explorar.css';

function Explorar() {
  return (
    <>
      <div className="pages explorar">
        <Header
          title="Explorar"
          btnAvaliable={ false }
        />
        <Link to="/explorar/comidas">
          <button
            className="btn btn-outline-dark explorar-btn explorar-cmd"
            type="button"
            data-testid="explore-food"
          >
            Explorar Comidas
          </button>
        </Link>

        <Link to="/explorar/bebidas">
          <button
            className="btn btn-outline-dark explorar-btn explorar-bbd"
            type="button"
            data-testid="explore-drinks"
          >
            Explorar Bebidas
          </button>
        </Link>

      </div>
      <Footer />
    </>
  );
}

export default Explorar;
