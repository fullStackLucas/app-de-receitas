const alerta = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

export async function getCategoriaBebidas() { // testada!
  const APIBebibdas = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const data = await fetch(APIBebibdas);
  const dataJson = await data.json();
  const { drinks } = dataJson; // retorno da API - chave drinks
  return drinks;
}

export async function getFilteredDrinks(drink) {
  const filteredDrinksRequested = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drink}`;
  const data = await fetch(filteredDrinksRequested);
  const dataJson = await data.json();
  const { drinks } = dataJson;
  return drinks;
}

export async function getBebidasID(iDReceita) { // testada!
  const RequisicaoBebidas = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${iDReceita}`;
  const data = await fetch(RequisicaoBebidas);
  const dataJson = await data.json();
  const { drinks } = dataJson; // retorno da API - chave drinks
  return drinks;
}

export async function getBebidasIngrediente(ingrediente) {
  try {
    const Ingrediente = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`;
    const data = await fetch(Ingrediente);
    const dataJson = await data.json();
    const { drinks } = dataJson;
    if (!drinks) global.alert(alerta);
    return drinks;
  } catch (error) {
    global.alert(alerta);
  }
}

export async function getBebidasNomeLetra(input, radio) {
  try {
    const PrimeiraLetra = `https://www.thecocktaildb.com/api/json/v1/1/search.php?${radio}=${input}`;
    const data = await fetch(PrimeiraLetra);
    const dataJson = await data.json();
    const { drinks } = dataJson;
    if (!drinks) global.alert(alerta);
    return drinks;
  } catch (error) {
    global.alert(alerta);
  }
}

export async function getBuscaBebidas() { // testada!
  const BebidasSearch = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const data = await fetch(BebidasSearch);
  const dataJson = await data.json();
  const { drinks } = dataJson; // retorno da API - chave drinks
  return drinks;
}

export async function getRandonBebidas() { // testada!
  const BebidasRanron = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const data = await fetch(BebidasRanron);
  const dataJson = await data.json();
  const { drinks } = dataJson; // retorno da API - chave drinks
  return drinks;
}

export async function getAllIngredienteBebidas() { // testada!
  const APIBebibdas = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  const data = await fetch(APIBebibdas);
  const dataJson = await data.json();
  const { drinks } = dataJson; // retorno da API - chave drinks
  return drinks;
}
/*
API Methods using the developer test key '1' as the API key

Search cocktail by name
www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

List all cocktails by first letter
www.thecocktaildb.com/api/json/v1/1/search.php?f=a

Search ingredient by name
www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

Lookup full cocktail details by id
www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

Lookup ingredient by ID
www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552

Lookup a random cocktail
www.thecocktaildb.com/api/json/v1/1/random.php

Lookup a selection of 10 random cocktails (only available to $2+ Patreon supporters)
www.thecocktaildb.com/api/json/v1/1/randomselection.php

List Popular cocktails (only available to $2+ Patreon supporters)
www.thecocktaildb.com/api/json/v1/1/popular.php

List most latest cocktails (only available to $2+ Patreon supporters)
www.thecocktaildb.com/api/json/v1/1/latest.php

Search by ingredient
www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka

Filter by multi-ingredient (only available to $2+ Patreon supporters)
www.thecocktaildb.com/api/json/v1/1/filter.php?i=Dry_Vermouth,Gin,Anis

Filter by alcoholic
www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic

Filter by Category
www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail

Filter by Glass
www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass
www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute

List the categories, glasses, ingredients or alcoholic filters
www.thecocktaildb.com/api/json/v1/1/list.php?c=list
www.thecocktaildb.com/api/json/v1/1/list.php?g=list
www.thecocktaildb.com/api/json/v1/1/list.php?i=list
www.thecocktaildb.com/api/json/v1/1/list.php?a=list

 Images
Drink thumbnails
Add /preview to the end of the cocktail image URL
/images/media/drink/vrwquq1478252802.jpg/preview (100x100 pixels)

Ingredient Thumbnails
www.thecocktaildb.com/images/ingredients/gin-Small.png
(100x100 pixels)
www.thecocktaildb.com/images/ingredients/gin-Medium.png
(350x350 pixels) */
