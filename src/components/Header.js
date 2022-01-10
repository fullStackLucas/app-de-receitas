import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import Context from '../context/Context';
import '../style/header.css';

function Header({ title, btnAvaliable = true }) {
  const history = useHistory();
  const { isSearchAvaliable, toggleSearch } = useContext(Context);

  return (
    <header>
      <h2 data-testid="page-title">{ title }</h2>
      <div className="profile-area-btn">
        <button
          className="profile-btn btn btn-secondary"
          type="button"
          data-testid="profile-top-btn"
          onClick={ () => { history.push('/perfil'); } }
          src={ profileIcon }
        >
          <img
            src={ profileIcon }
            alt="profileIcon"
          />
          Perfil
        </button>
      </div>
      <div className="search-area-btn">
        { btnAvaliable && (
          <button
            className="search-btn btn btn-secondary"
            type="button"
            data-testid="search-top-btn"
            onClick={ () => toggleSearch(!isSearchAvaliable) }
            src={ searchIcon }
          >
            <img
              src={ searchIcon }
              alt="searchIcon"
            />
            Busca
          </button>
        ) }
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  btnAvaliable: PropTypes.bool,
};

Header.defaultProps = {
  btnAvaliable: true,
};

export default Header;
