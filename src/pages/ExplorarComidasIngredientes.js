import React, { useContext } from 'react';
import Context from '../context/Context';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientCards from '../components/IngredientCards'; 
// import { getComidaIngrediente } from '../service/GetComidas';

function ExplorarComidasIngredientes() {
  const { dataMeals } = useContext(Context);
  const MAX_LENGTH_MEALS = 12;
  const meals = dataMeals.slice(0, MAX_LENGTH_MEALS);
  return (
    <>
      <Header
        title="Explorar Ingredientes"
        btnAvaliable={ false }
      />

      <div className="cards">
        {meals.map((meal, index) => (
          <IngredientCards item={ meal } index={ index } key={ meal.idMeal } />
        ))}
      </div>

      <Footer />

    </>
  );
}

export default ExplorarComidasIngredientes;
