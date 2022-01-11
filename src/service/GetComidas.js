/* erro - formato invalido.
export function getImagensComidas(ingrediente) {
  const Imagens = `https://www.themealdb.com/images/ingredients/${ingrediente}.png`;
  const data = await fetch();
  const dataJson = await data.json();
  console.log(dataJson);

} */

const alerta = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

// testada e funcionando.
export async function getComidasArea() {
  const APIComidas = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  const data = await fetch(APIComidas);
  const dataJson = await data.json();
  const { meals } = dataJson; // a chave que chega nessa requisição é meals.
  return meals;
}

export async function getFilteredArea(area) {
  const filteredMealsRequested = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
  const data = await fetch(filteredMealsRequested);
  const dataJson = await data.json();
  const { meals } = dataJson;
  return meals;
}

export async function getFilteredMeals(meal) {
  const filteredMealsRequested = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`;
  const data = await fetch(filteredMealsRequested);
  const dataJson = await data.json();
  const { meals } = dataJson;
  return meals;
}

// testada e funcionando.
export async function getComidaIngrediente(ingrediente) {
  try {
    const Ingrediente = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`;
    const data = await fetch(Ingrediente);
    const dataJson = await data.json();
    const { meals } = dataJson; // a chave que chega nessa requisição é meals.
    if (!meals) global.alert(alerta);
    return meals;
  } catch (error) {
    global.alert(alerta);
  }
}

/* // testada e funcionando.
export async function getComidaNome(nome) {
  const Nome = `https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`;
  const data = await fetch(Nome);
  const dataJson = await data.json();
  console.log(dataJson);
  const { meals } = dataJson; // a chave que chega nessa requisição é meals.
  return meals;
}
 */
// testada e funcionando.
export async function getComidaNomeLetra(input, radio) {
  try {
    const PrimeiraLetra = `https://www.themealdb.com/api/json/v1/1/search.php?${radio}=${input}`;
    const data = await fetch(PrimeiraLetra);
    const dataJson = await data.json();
    const { meals } = dataJson; // a chave que chega nessa requisição é meals.
    if (!meals) global.alert(alerta);
    return meals;
  } catch (error) {
    global.alert(alerta);
  }
}

// testada e funcionando
export async function getCategoriaComidas() {
  const CategoriaComida = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const data = await fetch(CategoriaComida);
  const dataJson = await data.json();
  const { meals } = dataJson; // a chave que chega nessa requisição é meals.
  return meals;
}

// testada e funcionando
export async function getReceitasID(IdComida) {
  const RequisicaoComidas = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${IdComida}`;
  const data = await fetch(RequisicaoComidas);
  const dataJson = await data.json();
  const { meals } = dataJson; // a chave que chega nessa requisição é meals.
  return meals;
}

// testada e funcionando
export async function getBuscaComidas() {
  const ComidasSearch = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const data = await fetch(ComidasSearch);
  const dataJson = await data.json();
  const { meals } = dataJson; // a chave que chega nessa requisição é meals.
  return meals;
}

// testado e funcionando
export async function getRandomComidas() {
  const ComidasRandon = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const data = await fetch(ComidasRandon);
  const dataJson = await data.json();
  const { meals } = dataJson; // a chave que chega nessa requisição é meals.
  return meals;
}

export async function getAllIngredientComidas() {
  const CategoriaComida = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const data = await fetch(CategoriaComida);
  const dataJson = await data.json();
  const { meals } = dataJson; // a chave que chega nessa requisição é meals.
  return meals;
}

/* API Methods using the developer test key '1' as the API key

Search meal by name
www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
List all meals by first letter
www.themealdb.com/api/json/v1/1/search.php?f=a
Lookup full meal details by id
www.themealdb.com/api/json/v1/1/lookup.php?i=52772
Lookup a single random meal
www.themealdb.com/api/json/v1/1/random.php
Lookup a selection of 10 random meals (only available to $2+ Patreon supporters)
www.themealdb.com/api/json/v1/1/randomselection.php
List all meal categories
www.themealdb.com/api/json/v1/1/categories.php
Latest Meals (only available to $2+ Patreon supporters)
www.themealdb.com/api/json/v1/1/latest.php
List all Categories, Area, Ingredients
www.themealdb.com/api/json/v1/1/list.php?c=list
www.themealdb.com/api/json/v1/1/list.php?a=list
www.themealdb.com/api/json/v1/1/list.php?i=list
Filter by main ingredient
www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
Filter by multi-ingredient (only available to $2+ Patreon supporters)
www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast,garlic,salt
Filter by Category
www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
Filter by Area
www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

 Images
Meal Thumbnail Images
Add /preview to the end of the meal image URL
/images/media/meals/llcbn01574260722.jpg/preview
Ingredient Thumbnail Images
www.themealdb.com/images/ingredients/Lime.png
www.themealdb.com/images/ingredients/Lime-Small.png */
