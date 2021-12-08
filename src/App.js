import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import BebidasDetalhes from './pages/BebidasDetalhes';
import ComidasDetalhes from './pages/ComidasDetalhes';
import BebidasEmProgresso from './pages/BebidasEmProgresso';
import ComidasEmProgresso from './pages/ComidasEmProgresso';
import Explorar from './pages/Explorar';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarComidasIngredientes from './pages/ExplorarComidasIngredientes';
import ExplorarBebidasIngredientes from './pages/ExplorarBebidasIngredientes';
import ExplorarComidasArea from './pages/ExplorarComidasArea';
import Perfil from './pages/Perfil';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/comidas" component={ Comidas } />
          <Route exact path="/bebidas" component={ Bebidas } />
          <Route exact path="/bebidas/:id" component={ BebidasDetalhes } />
          <Route exact path="/comidas/:id" component={ ComidasDetalhes } />
          <Route exact path="/bebidas/:id/in-progress" component={ BebidasEmProgresso } />
          <Route exact path="/comidas/:id/in-progress" component={ ComidasEmProgresso } />
          <Route exact path="/explorar" component={ Explorar } />
          <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
          <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
          <Route
            path="/explorar/bebidas/ingredientes"
            component={ ExplorarBebidasIngredientes }
          />
          <Route
            path="/explorar/comidas/ingredientes"
            component={ ExplorarComidasIngredientes }
          />
          <Route
            path="/explorar/comidas/area"
            component={ ExplorarComidasArea }
          />
          <Route path="/perfil" component={ Perfil } />
          <Route exact path="/receitas-feitas" component={ ReceitasFeitas } />
          <Route exact path="/receitas-favoritas" component={ ReceitasFavoritas } />
          <Route exact path="/" component={ Login } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </Provider>

  );
}

export default App;

/* Rotas

As rotas a serem utilizadas na aplicação devem ser as seguintes:

    Tela de login: /;
    Tela principal de receitas de comidas: /comidas;
    Tela principal de receitas de bebidas: /bebidas;
    Tela de detalhes de uma receita de comida: /comidas/{id-da-receita};
    Tela de detalhes de uma receita de bebida: /bebidas/{id-da-receita};
    Tela de receita em processo de comida: /comidas/{id-da-receita}/in-progress;
    Tela de receita em processo de bebida: /bebidas/{id-da-receita}/in-progress;
    Tela de explorar: /explorar;
    Tela de explorar comidas: /explorar/comi das;
    Tela de explorar bebidas: /explorar/bebidas;
    Tela de explorar comidas por ingrediente: /explorar/comidas/ingredientes;
    Tela de explorar bebidas por ingrediente: /explorar/bebidas/ingredientes;xx
    Tela de explorar comidas por local de origem: /explorar/comidas/area;
    Tela de perfil: /perfil;
    Tela de receitas feitas: /receitas-feitas;
    Tela de receitas favoritas: /receitas-favoritas.
 */
