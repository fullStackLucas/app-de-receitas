import React, { useContext } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Context from '../context/Context';
import Cards from '../components/Cards';

function Bebidas() {
  const { isSearchAvaliable, dataDrinks } = useContext(Context);
  const MAX_LENGTH_DRINKS = 12;
  const drinks = dataDrinks.slice(0, MAX_LENGTH_DRINKS);

  return (
    <div>
      <Header title="Bebidas" />
      { isSearchAvaliable && <Search title="Bebidas" /> }
      {drinks.map((drink, index) => (
        <Cards item={ drink } index={ index } key={ drink.idDrink } />
      ))}

    </div>
  );
}

export default Bebidas;
