// Nada testado corretamenta.
export function isDoneRecipe(id) {
  const recipes = localStorage.getItem('doneRecipes')
    ? JSON.parse(localStorage.getItem('doneRecipes'))
    : [];
  return recipes.some((recipe) => recipe.id === id);
}

export function getDoneRecipes() {
  const recipes = localStorage.getItem('doneRecipes')
    ? JSON.parse(localStorage.getItem('doneRecipes'))
    : [];
  return recipes;
}

export function isInProgressRecipe(id, type) {
  // type: cocktails e meals
  const recipes = localStorage.getItem('inProgressRecipes')
    ? JSON.parse(localStorage.getItem('inProgressRecipes'))
    : [];
  const recipeType = recipes[type] ? recipes[type] : [];
  return recipeType[id];
}

export function inProgressRecipes() {
  const recipes = localStorage.getItem('inProgressRecipes')
    ? JSON.parse(localStorage.getItem('inProgressRecipes'))
    : [];
  return recipes;
}

// funcao pra saber se é ou não favorita
export function isFavorited(id) { // é o ID que esta na pagina de detalhes
  const favorited = localStorage.getItem('favoriteRecipes')
    ? JSON.parse(localStorage.getItem('favoriteRecipes'))
    : [];
  return favorited.some((recipe) => recipe.id === id);
}

export function setFavoritedItem(item) { // é o ID que esta na pagina de detalhes
  const id = item.idMeal ? item.idMeal : item.idDrink;
  const type = item.idMeal ? 'idMeal' : 'idDrink'; // CORRIGIR!
  const alcoholicOrNot = item.idMeal ? '' : item.strAlcoholic;
  const name = item.idMeal ? item.strMeal : item.strDrink;
  const image = '';

  const newItem = {
    id,
    type,
    area: item.strArea,
    category: item.strCategory,
    alcoholicOrNot,
    name,
    image,
  };
  console.log(item, newItem, id, type);
  if (!localStorage.getItem('favoriteRecipes')) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
  }
  if (isFavorited(newItem.id)) {
    const favorite = JSON.parse(localStorage.getItem('favoritedRecipes'))
      .filter((itemObj) => itemObj[type] !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorite));
  } else {
    const favorite = JSON.parse(localStorage.getItem('favoritedRecipes'));
    localStorage.setItem('favoriteRecipes', JSON.stringify([...favorite, newItem]));
  }
}

export function setRecipesInProgress(item, igredient) {
  if (isDoneRecipe(item.id)) {
    const done = JSON.parse(localStorage.getItem('doneRecipes')).key.type.id
      .filter((position) => position !== igredient);
    localStorage.setItem('doneRecipes', JSON.stringify(done));
  } else {
    const done = JSON.parse(localStorage.getItem('doneRecipes'));
    localStorage.setItem('doneRecipes', JSON.stringify([...done, item]));
  }
}

export function defineInProgressIgredients(argument, id) {
  if ((!localStorage.getItem(argument))) {
    localStorage.setItem(argument, JSON.stringify({}));
  }
  const idItem = JSON.parse(localStorage.getItem(argument))[id];
  if (!idItem) {
    const prevLocal = JSON.parse(localStorage.getItem(argument));
    localStorage.setItem(argument, JSON.stringify({
      ...prevLocal,
      [id]: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
      },
    }));
  }
}

/* Salve as receitas favoritas no localStorage na chave favoriteRecipes

O formato deve ser [{ id, type, area, category, alcoholicOrNot, name, image }].
As receitas favoritas devem ser salvas no localStorage na chave
favoriteRecipes no formato [{ id, type, area, category,
  alcoholicOrNot, name, image }]. */

//   localStorage.setItem('DoneRecipes', JSON.stringify({
//     Meals: {},
//     Drinks: {
//         idDrink: [],
//     },
// }));
