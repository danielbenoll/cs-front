import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import ArmamentosIndex from './pages/Armamentos/ArmamentosIndex';
import ClassesIndex from './pages/Classes/ClassesIndex';

export default() => {
    return(
        <>
            <BrowserRouter>
                <Cabecalho/>
                <Switch>

                    <Route exact path="/" component={ClassesIndex}/>
                    <Route exact path="/classes" component={ClassesIndex}/>
                    <Route exact path="/armamentos" component={ArmamentosIndex}/>
                    {/* <Route exact path="/filmes/populares" component={FilmesPopulares}/>
                    <Route exact path="/filmes/lancamentos" component={FilmesLancamentos}/>
                    <Route exact path="/filmes/bem-avaliados" component={FilmesAvalaiados}/>
                    <Route exact path="/filmes/:id" component={FilmesDetalhes}/> */}
                </Switch>
            </BrowserRouter>
        </>
    )
}