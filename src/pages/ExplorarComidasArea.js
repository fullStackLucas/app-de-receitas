import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Search from '../components/Search';
import Context from '../context/Context';
import Cards from '../components/Cards';
import { getComidasArea, getFilteredArea } from '../service/GetComidas';

function ExplorarComidasArea() {
  const [areas, setAreas] = useState([]);
  const { isSearchAvaliable, dataMeals, setDataMeals } = useContext(Context);
  const MAX_LENGTH_MEALS = 12;
  const meals = dataMeals.slice(0, MAX_LENGTH_MEALS);
  useEffect(() => {
    getComidasArea().then((response) => setAreas(response));
  }, []);
  const setFilter = ({ target }) => {
    const { value } = target;
    getFilteredArea(value).then((response) => setDataMeals([...response]));
  };

  return (
    <>
      <div className="pages">
        <Header title="Explorar Origem" />
        { isSearchAvaliable && <Search title="Comidas" /> }
        <select name="area" data-testid="explore-by-area-dropdown">
          <option
            value="All"
            data-testid="All-option"
            onClick={ setFilter }
          >
            All
          </option>
          { areas.map(({ strArea }, index) => (
            <option
              value={ strArea }
              key={ index }
              data-testid={ `${strArea}-option` }
              onClick={ setFilter }
            >
              { strArea }
            </option>
          ))}
        </select>
        <div className="cards">
          {meals.map((meal, index) => (
            <Cards item={ meal } index={ index } key={ meal.idMeal } />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ExplorarComidasArea;
