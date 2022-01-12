import '../style/perfil.css';
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
      <div className="perfil">
        <Header
          title="Perfil"
          btnAvaliable={ false }
        />
        <h1 data-testid="profile-email">{email}</h1>
        <Link to="/receitas-feitas">
          <button
            className="btn btn-info perfil-btn"
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
            className="btn btn-info perfil-btn"
            type="button"
            data-testid="profile-favorite-btn"
          >
            Receitas Favoritas
          </button>
        </Link>

        <Link to="/">
          <button
            className="btn btn-danger btn-lg btn-block"
            type="button"
            data-testid="profile-logout-btn"
            onClick={ () => localStorage.clear() }
          >
            Sair
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Perfil;
