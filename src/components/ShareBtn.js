import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert'; // https://react-bootstrap.github.io/components/alerts/
import shareIcon from '../images/shareIcon.svg';

// https://www.npmjs.com/package/clipboard-copy
const copyForShare = require('clipboard-copy');

export default function ShareBtn({ pathname }) { // funcao do componente
  const [clipado, setClipado] = useState(false); // começa sem tá clipado nada

  function handleClick() {
    copyForShare(`http://localhost:3000${pathname}`); // o endereço que vai
    setClipado(!clipado); // se não tiver clipado o caminho, ele faz o clipboard-copy
  }

  return (
    <alert>
      <button
        className="share-btn"
        type="button"
        onClick={ handleClick }
      >
        <img
          src={ shareIcon }
          alt="shareIcon"
          data-testid="share-btn"
        />
        Compartilhar
      </button>
      { clipado && (
        <Alert variant="success">
          {' '}
          {/* / variante verdinha que diz q deu certo o clip  */}
          Link copiado!
          {' '}
          {/* // mensagem do alerta */}
        </Alert>
      ) }
    </alert>
  );
}

ShareBtn.propTypes = {
  pathname: PropTypes.string.isRequired,
};
