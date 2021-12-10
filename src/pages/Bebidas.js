import React, { useContext } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Context from '../context/Context';

function Bebidas() {
  const { isSearchAvaliable } = useContext(Context);
  return (
    <div>
      <Header title="Bebidas" />
      { isSearchAvaliable && <Search title="Bebidas" /> }

    </div>
  );
}

export default Bebidas;
