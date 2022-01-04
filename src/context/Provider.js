import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [isSearchAvaliable, toggleSearch] = useState(false);
  const [dataMeals, setDataMeals] = useState([]);
  const [dataDrinks, setDataDrinks] = useState([]);
  const [perfil, setPerfil] = useState('');

  const contextValue = {
    isSearchAvaliable,
    toggleSearch,
    setDataMeals,
    dataMeals,
    setDataDrinks,
    dataDrinks,
    perfil,
    setPerfil,
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
