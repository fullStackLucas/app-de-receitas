import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Search from '../components/Search';
import Context from '../context/Context';
import Cards from '../components/Cards';
import { getComidasArea } from '../service/GetComidas';

function ExplorarComidasArea() {
  const [areas, setAreas] = useState([]);
  const { isSearchAvaliable, dataMeals } = useContext(Context);
  const MAX_LENGTH_MEALS = 12;
  const meals = dataMeals.slice(0, MAX_LENGTH_MEALS);
  const getAreas = async () => {
    const areaList = await getComidasArea();
    setAreas(areaList);
  };
  useEffect(() => getAreas(), []);
  console.log(areas);

  return (
    <>
      <Header title="Explorar Origem" />
      { isSearchAvaliable && <Search title="Comidas" /> }
      <select name="area" data-testid="explore-by-area-dropdown">
        { areas.map(({ strArea }, index) => (
          <option
            value={ strArea }
            key={ index }
            data-testid={ `${strArea}-option` }
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
      <Footer />
    </>
  );
}

export default ExplorarComidasArea;
