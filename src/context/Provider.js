import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { getBuscaComidas } from '../service/GetComidas';
import { getBuscaBebidas } from '../service/GetBebidas';

function Provider({ children }) {
  const [isSearchAvaliable, toggleSearch] = useState(false);
  const [dataMeals, setDataMeals] = useState([]);
  const [dataDrinks, setDataDrinks] = useState([]);

  useEffect(() => {
    getBuscaComidas().then((response) => setDataMeals([...response]));
    getBuscaBebidas().then((response) => setDataDrinks([...response]));
  }, []);

  const contextValue = {
    isSearchAvaliable,
    toggleSearch,
    setDataMeals,
    dataMeals,
    setDataDrinks,
    dataDrinks,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
