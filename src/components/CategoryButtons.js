import React, { useState, useEffect } from 'react';
import { getCategoriaComidas } from '../service/GetComidas';

function CategoryButtons() {
  const [mealsCategories, setMealsCategories] = useState([]);

  useEffect(() => async () => {
    try {
      const response = await getCategoriaComidas();
      return setMealsCategories(response);
    } catch (e) {
      console.log(e);
    }
  }, []);

  console.log(mealsCategories);
  return (
    <div className="category-buttons">
      <button type="button">
        Olá
      </button>
    </div>
  );
}

export default CategoryButtons;
