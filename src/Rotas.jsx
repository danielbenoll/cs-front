import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import Armamentos from './pages/Armamentos/Armamentos';
import Classes from './pages/Classes/Classes';
import Mapas from './pages/Mapas/Mapas';
import Paises from './pages/Paises/Paises';
import Personagens from './pages/Personagens/Personagens';

export default() => {
    return(
        <>
            <BrowserRouter>
                <Cabecalho/>
                <Switch>

                    <Route exact path="/" component={Classes}/>
                    <Route exact path="/classes" component={Classes}/>
                    <Route exact path="/armamentos" component={Armamentos}/>
                    <Route exact path="/paises" component={Paises}/>
                    <Route exact path="/mapas" component={Mapas}/>
                    <Route exact path="/personagens" component={Personagens}/>
                    {/* <Route exact path="/filmes/populares" component={FilmesPopulares}/>
                    <Route exact path="/filmes/lancamentos" component={FilmesLancamentos}/>
                    <Route exact path="/filmes/bem-avaliados" component={FilmesAvalaiados}/>
                    <Route exact path="/filmes/:id" component={FilmesDetalhes}/> */}
                </Switch>
            </BrowserRouter>
        </>
    )
}