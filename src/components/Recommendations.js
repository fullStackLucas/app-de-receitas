/* Recommendations é utilizado em BebidasDetalhes e ComidasDetalhes */
import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import DetailCards from './DetailCards';

function Recommendations({ items }) {
  const MAX_LENGTH_ITEMS = 6;
  console.log(MAX_LENGTH_ITEMS, items);
  const dataItem = items.slice(0, MAX_LENGTH_ITEMS);
  const cards = dataItem.map((item, index) => (
    <DetailCards
      item={ item }
      index={ index }
      key={ item.idDrinks ? item.idDrinks : item.idMeal }
    />
  ));

  return (
    <div className="recommendations">
      <Carousel>
        <Carousel.Item>
          <div className="cards_detalhes">
            { cards[0] }
            { cards[1] }
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="cards_detalhes">
            { cards[2] }
            { cards[3] }
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="cards_detalhes">
            { cards[4] }
            { cards[5] }
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

Recommendations.propTypes = {
  items: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Recommendations;
