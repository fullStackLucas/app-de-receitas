import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [isSearchAvaliable, toggleSearch] = useState(false);
  const [dataInput, setDataInput] = useState([]);

  const contextValue = {
    isSearchAvaliable,
    toggleSearch,
    setDataInput,
    dataInput,
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
