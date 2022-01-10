import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientCards from '../components/IngredientCards';
import { getAllIngredientComidas } from '../service/GetComidas';
import { getAllIngredienteBebidas } from '../service/GetBebidas';

function ExplorarComidasIngredientes() {
  const [dataMeals, setDataMeals] = useState([]);
  const MAX_LENGTH_MEALS = 12;
  const meals = dataMeals.slice(0, MAX_LENGTH_MEALS);
  useEffect(() => {
    getAllIngredientComidas().then((response) => setDataMeals(response));
    getAllIngredientComidas().then((response) => console.log(response));
    getAllIngredienteBebidas().then((response) => console.log('b', response));
  }, []);

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
