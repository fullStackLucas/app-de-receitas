import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert'; // https://react-bootstrap.github.io/components/alerts/
import shareIcon from '../images/shareIcon.svg';

// https://www.npmjs.com/package/clipboard-copy
const copyForShare = require('clipboard-copy');

export default function ShareBtn({ type, pathname }) { // funcao do componente que pega as props da pagina de detalhes
  const [clipado, setClipado] = useState(false); // começa sem tá clipado nada

  function handleClick() {
    copyForShare(`http://localhost:3000/${type}/${pathname}`); // o endereço que vai
    setClipado(!clipado); // se não tiver clipado o caminho, ele faz o clipboard-copy
  }

  return (
    <>
      { clipado && (
        <Alert variant="success">
          {' '}
          {/* / variante verdinha que diz q deu certo o clip  */}
          Link copiado!
          {' '}
          {/* // mensagem do alerta */}
        </Alert>
      ) }
      <button
        data-testid="share-btn"
        className="share-btn btn btn-lg"
        type="button"
        onClick={ handleClick }
      >
        <img
          src={ shareIcon }
          alt="shareIcon"
        />
        Compartilhar
      </button>
    </>
  );
}

ShareBtn.propTypes = {
  type: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
};
