// Arquivo Base( não está sendo utilizado)
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [stateA, setStateA] = useState('initialStateA');
  const contextValue = {
    stateA, setStateA,
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
