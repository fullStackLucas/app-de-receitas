import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Search from '../components/Search';
import Context from '../context/Context';
import Cards from '../components/Cards';
import CategoryButtons from '../components/CategoryButtons';

function Comidas() {
  const { isSearchAvaliable, dataMeals } = useContext(Context);
  const MAX_LENGTH_MEALS = 12;
  const meals = dataMeals.slice(0, MAX_LENGTH_MEALS);
  return (
    <div>
      <Header title="Comidas" />
      { isSearchAvaliable && <Search title="Comidas" /> }
      <CategoryButtons categoryName="Comidas" />
      <div className="cards">
        {meals.map((meal, index) => (
          <Cards item={ meal } index={ index } key={ meal.idMeal } />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Comidas;
