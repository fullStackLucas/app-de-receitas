import React from 'react';
import '../style/cards.css';
import '../style/notfound.css';

const itens = [
  // https://imgur.com/a/YSZhr1G
  { title: 'Comida não encontrada', src: 'https://i.imgur.com/sY3q0Au.png', msg: 'Alguém ficou com fome' },
  { title: 'Bebida não encontrada', src: 'https://i.imgur.com/CGd9gCG.jpg', msg: 'Alguém ficou com sede' },
  { title: 'Refeição não foi feita', src: 'https://i.imgur.com/ed3fmYd.png', msg: 'Alguém ficou triste' },
  /*
  Imagens originais (sem photoshop):
  https://www.pexels.com/pt-br/foto/lote-de-talheres-de-prata-265940/
  https://www.pexels.com/pt-br/foto/fundo-preto-espaco-do-texto-copo-de-bebida-copo-de-drink-5538239/
  https://www.pexels.com/pt-br/foto/texto-de-desintoxicacao-na-placa-azul-redonda-2377166/
  */
];

function NotFound() {
  const renderCards = (item) => (
    <div className="card">
      <p
        className="card_name"
      >
        { item.title }
      </p>
      <img
        className="card_img"
        alt={ item.title }
        src={ item.src }
      />
      <div className="card_overlay">
        {item.msg}
      </div>
    </div>
  );
  return (
    <div className="not_found">
      <div className="title_not_found">
        <h1>Página não encontrada</h1>
        <span>Not Found</span>
      </div>
      <div className="cards_not_found">
        { renderCards(itens[0])}
        { renderCards(itens[1])}
        { renderCards(itens[2])}
      </div>
    </div>
  );
}

export default NotFound;
