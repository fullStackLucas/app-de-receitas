// Arquivo Base( não está sendo utilizado)
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [stateA, setStateA] = useState('initialStateA');
  const [isSearchAvaliable, toggleSearch] = useState(false);

  const contextValue = {
    stateA,
    setStateA,
    isSearchAvaliable,
    toggleSearch,
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
