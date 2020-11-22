import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import Armamentos from './pages/Armamentos/Armamentos';
import ClasseDetalhes from './pages/Classes/ClasseDetalhes';
import Classes from './pages/Classes/Classes';
import MapaDetalhes from './pages/Mapas/MapaDetalhes';
import Mapas from './pages/Mapas/Mapas';
import ModoDetalhes from './pages/Modos/ModoDetalhes';
import Modos from './pages/Modos/Modos';
import PaisDetalhes from './pages/Paises/PaisDetalhes';
import Paises from './pages/Paises/Paises';
import PersonagemDetalhes from './pages/Personagens/PersonagemDetalhes';
import Personagens from './pages/Personagens/Personagens';
import Secoes from './pages/Secoes/Secoes';
import SecaoDetalhes from './pages/Secoes/SecaoDetalhes';
import ArmamentoDetalhes from './pages/Armamentos/ArmamentoDetalhes';
import Home from './pages/Home';

export default() => {
    return(
        <>
            <BrowserRouter>
                <Cabecalho/>
                <Switch>

                    <Route exact path="/" component={Classes}/>
                    <Route exact path="/classes" component={Classes}/>
                    <Route exact path="/classes/:id" component={ClasseDetalhes}/>
                    <Route exact path="/armamentos" component={Armamentos}/>
                    <Route exact path="/armamentos/:id" component={ArmamentoDetalhes}/>
                    <Route exact path="/paises" component={Paises}/>
                    <Route exact path="/paises/:id" component={PaisDetalhes}/>
                    <Route exact path="/mapas" component={Mapas}/>
                    <Route exact path="/mapas/:id" component={MapaDetalhes}/>
                    <Route exact path="/personagens" component={Personagens}/>
                    <Route exact path="/personagens/:id" component={PersonagemDetalhes}/>
                    <Route exact path="/modos" component={Modos}/>
                    <Route exact path="/modos/:id" component={ModoDetalhes}/>
                    <Route exact path="/secoes" component={Secoes}/>
                    <Route exact path="/secoes/:id" component={SecaoDetalhes}/>
                    {/* <Route exact path="/filmes/populares" component={FilmesPopulares}/>
                    <Route exact path="/filmes/lancamentos" component={FilmesLancamentos}/>
                    <Route exact path="/filmes/bem-avaliados" component={FilmesAvalaiados}/>
                    <Route exact path="/filmes/:id" component={FilmesDetalhes}/> */}
                </Switch>
            </BrowserRouter>
        </>
    )
}