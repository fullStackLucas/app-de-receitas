import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Perfil() {
  const [email, setEmail] = useState('');
  const getEmail = () => {
    const currentEmail = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : '';
    setEmail(currentEmail.email);
  };
  useEffect(() => getEmail());
  return (
    <>
      <Header
        title="Perfil"
        btnAvaliable={ false }
      />
      <p data-testid="profile-email">{email}</p>

      <Link to="/receitas-feitas">
        <button
          type="button"
          data-testid="profile-done-btn"
          Receitas
          Feitas
        >
          Receitas Feitas
        </button>
      </Link>

      <Link to="/receitas-favoritas">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Receitas Favoritas
        </button>
      </Link>

      <Link to="/">
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => localStorage.clear() }
        >
          Sair
        </button>
      </Link>
      <Footer />
    </>
  );
}

export default Perfil;
