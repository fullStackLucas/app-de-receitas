import React, { useContext } from 'react';
import Context from '../context/Context';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientCards from '../components/IngredientCards'; 

function ExplorarBebidasIngredientes() {

  const { dataDrinks } = useContext(Context);
  const MAX_LENGTH_DRINKS = 12;
  const drinks = dataDrinks.slice(0, MAX_LENGTH_DRINKS);

  return (
    <>
      <Header
        title="Explorar Ingredientes"
        btnAvaliable={ false }
      />
      
      <div className="cards">
        {drinks.map((drink, index) => (
          <IngredientCards item={ drink } index={ index } key={ drink.idDrink } />
        ))}
      </div>
      
      <Footer />
    </>
  );
}

export default ExplorarBebidasIngredientes;
