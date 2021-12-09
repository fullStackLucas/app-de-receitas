export async function getImagensComidas() {
  const Imagens = 'https://www.themealdb.com/images/ingredients/{ingrediente}.png';
  const data = await fetch(Imagens);
  const dataJson = await data.json();
  const { imagensComida } = dataJson;
  return imagensComida;
}

export async function getComidasArea() {
  const APIComidas = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  const data = await fetch(APIComidas);
  const dataJson = await data.json();
  const { comidasArea } = dataJson;
  return comidasArea;
}

export async function getComidaIngrediente() {
  const Ingrediente = 'https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente}';
  const data = await fetch(Ingrediente);
  const dataJson = await data.json();
  const { ingrediente } = dataJson;
  return ingrediente;
}

export async function getComidaNome() {
  const Nome = 'https://www.themealdb.com/api/json/v1/1/search.php?s={nome}';
  const data = await fetch(Nome);
  const dataJson = await data.json();
  const { nomeComida } = dataJson;
  return nomeComida;
}

export async function getComidaLetra() {
  const PrimeiraLetra = 'https://www.themealdb.com/api/json/v1/1/search.php?f={primeira-letra}';
  const data = await fetch(PrimeiraLetra);
  const dataJson = await data.json();
  const { comidaLetra } = dataJson;
  return comidaLetra;
}

export async function getCategoriaComidas() {
  const CategoriaComida = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const data = await fetch(CategoriaComida);
  const dataJson = await data.json();
  const { CategoriaComidas } = dataJson;
  return CategoriaComidas;
}

export async function getReceitasID() {
  const RequisicaoComidas = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i={id-da-receita}';
  const data = await fetch(RequisicaoComidas);
  const dataJson = await data.json();
  const { comidasIDReceita } = dataJson;
  return comidasIDReceita;
}

export async function getBuscaComidas() {
  const ComidasSearch = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const data = await fetch(ComidasSearch);
  const dataJson = await data.json();
  const { comidasBusca } = dataJson;
  return comidasBusca;
}

export async function getRandonComidas() {
  const ComidasRandon = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const data = await fetch(ComidasRandon);
  const dataJson = await data.json();
  const { comidaSurpresa } = dataJson;
  return comidaSurpresa;
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
