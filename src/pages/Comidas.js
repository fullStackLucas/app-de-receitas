import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Search from '../components/Search';
import Context from '../context/Context';

function Comidas() {
  const { isSearchAvaliable } = useContext(Context);
  return (
    <div>
      <Header title="Comidas" />
      { isSearchAvaliable && <Search /> }
      <Footer/>
    </div>
  );
}

export default Comidas;
