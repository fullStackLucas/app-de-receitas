import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Search from '../components/Search';
import Context from '../context/Context';
import Cards from '../components/Cards';
import CategoryButtons from '../components/CategoryButtons';

function Bebidas() {
  const { isSearchAvaliable, dataDrinks } = useContext(Context);
  const MAX_LENGTH_DRINKS = 12;
  const drinks = dataDrinks.slice(0, MAX_LENGTH_DRINKS);

  return (
    <div>
      <div className="pages">
        <Header title="Bebidas" />
        { isSearchAvaliable && <Search title="Bebidas" /> }
        <CategoryButtons categoryName="Bebidas" />
        <div className="cards">
          {drinks.map((drink, index) => (
            <Cards item={ drink } index={ index } key={ drink.idDrink } />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Bebidas;
