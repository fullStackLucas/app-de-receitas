import React from 'react';

function Header() {
  return (
    <header>
      <h2 data-testid="page-title">Título da Página</h2>
      <button type="button" data-testid="profile-top-button">Perfil</button>
      <button type="button" data-testid="search-top-button">Busca</button>
    </header>
  );
}

export default Header;
