import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientCards from '../components/IngredientCards';
import { getAllIngredienteBebidas } from '../service/GetBebidas';

function ExplorarBebidasIngredientes() {
  const [dataDrinks, setDataDrinks] = useState([]);
  const MAX_LENGTH_DRINKS = 12;
  const drinks = dataDrinks.slice(0, MAX_LENGTH_DRINKS);

  useEffect(() => {
    getAllIngredienteBebidas().then((response) => setDataDrinks(response));
  }, []);

  return (
    <>
      <Header
        title="Explorar Ingredientes"
        btnAvaliable={ false }
      />

      <div className="cards">
        {drinks.map((drink, index) => (
          <IngredientCards item={ drink } index={ index } key={ index } />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default ExplorarBebidasIngredientes;
