import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import Context from '../context/Context';
import { getBebidasIngrediente, getBebidasNomeLetra } from '../service/GetBebidas';
import { getComidaIngrediente, getComidaNomeLetra } from '../service/GetComidas';
import '../style/search.css';

function Search({ title }) {
  const [inputValue, setInputValue] = useState('');
  const [radioValue, setRadioValue] = useState('');
  const { setDataMeals, setDataDrinks } = useContext(Context);
  const history = useHistory();

  const formSubmit = async (event) => {
    event.preventDefault();
    if (radioValue === 'f' && inputValue.length > 1) {
      return global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    if (title === 'Comidas') {
      const response = radioValue === 'i'
        ? await getComidaIngrediente(inputValue)
        : await getComidaNomeLetra(inputValue, radioValue);
      if (response.length === 1) history.push(`/comidas/${response[0].idMeal}`);
      await setDataMeals(response);
    }
    if (title === 'Bebidas') {
      const response = radioValue === 'i'
        ? await getBebidasIngrediente(inputValue)
        : await getBebidasNomeLetra(inputValue, radioValue);
      if (response.length === 1) history.push(`/bebidas/${response[0].idDrink}`);
      await setDataDrinks(response);
    }
  };

  return (
    <form className="search-form" onSubmit={ formSubmit }>
      <div className="search-group">
        <input
          className="form-control search-input"
          data-testid="search-input"
          value={ inputValue }
          type="text"
          onChange={ ({ target }) => { setInputValue(target.value); } }
        />
        <button
          className="btn btn-dark"
          type="submit"
          data-testid="exec-search-btn"
        >
          Buscar
        </button>
      </div>
      <div
        className="search-radios"
        onChange={ ({ target }) => { setRadioValue(target.value); } }
      >
        <label htmlFor="ingredient-radio">
          <input
            type="radio"
            value="i"
            name="search-option"
            id="ingredientRadio"
            data-testid="ingredient-search-radio"
          />
          Ingrediente
        </label>
        <label htmlFor="name-radio">
          <input
            type="radio"
            value="s"
            id="name-radio"
            name="search-option"
            data-testid="name-search-radio"
          />
          nome
        </label>
        <label htmlFor="first-letter">
          <input
            type="radio"
            value="f"
            id="first-letter"
            name="search-option"
            data-testid="first-letter-search-radio"
          />
          Primeira Letra
        </label>
      </div>
    </form>
  );
}

Search.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Search;
