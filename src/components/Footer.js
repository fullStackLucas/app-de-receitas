import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import '../style/footer.css';

function Footer() {
  return (
    <footer data-testid="footer" className="footer">
      {/* tem que ter posição fixa embaixo pra passar no teste */}
      {/* cada link leva pra uma página - bebidas, comidas, explorar - poderia ser botão,
        mas achei que ficaria mais fácil com link - se necessário pode ser alterado. */}
      <Link src={ drinkIcon } to="/bebidas" data-testid="drinks-bottom-btn">
        <img src={ drinkIcon } alt="drinks" />
      </Link>
      <Link src={ mealIcon } to="comidas" data-testid="food-bottom-btn">
        <img src={ mealIcon } alt="meal icon" />
      </Link>
      <Link src={ exploreIcon } to="/explorar" data-testid="explore-bottom-btn">
        <img src={ exploreIcon } alt="explore icon" />
      </Link>
    </footer>
  );
}

export default Footer;
