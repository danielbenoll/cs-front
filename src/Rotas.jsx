import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
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
import Gerencia from './pages/Gerencia/Gerencia';
import SecaoDetalhes from './pages/Secoes/SecaoDetalhes';
import ArmamentoDetalhes from './pages/Armamentos/ArmamentoDetalhes';
import Home from './pages/Home';
import { isAuthenticated } from './services/auth';

const PrivateRoute = ({component: Component, ...rest}) =>(
    <Route
        {...rest}
        render={props =>
            isAuthenticated()? 
            (<Component {...props} />):
            (<Redirect to={{pathname: "/", state: {from: props.location}}} />)
        }
    />
)

export default() => {
    
    return(
        <>
            <BrowserRouter>
                <Cabecalho/>

                <Route exact path="/" component={Home}/>
                
                <PrivateRoute exact path="/classes" component={Classes}/>
                <PrivateRoute exact path="/classes/:id" component={ClasseDetalhes}/>
                <PrivateRoute exact path="/armamentos" component={Armamentos}/>
                <PrivateRoute exact path="/armamentos/:id" component={ArmamentoDetalhes}/>
                <PrivateRoute exact path="/paises" component={Paises}/>
                <PrivateRoute exact path="/paises/:id" component={PaisDetalhes}/>
                <PrivateRoute exact path="/mapas" component={Mapas}/>
                <PrivateRoute exact path="/mapas/:id" component={MapaDetalhes}/>
                <PrivateRoute exact path="/personagens" component={Personagens}/>
                <PrivateRoute exact path="/personagens/:id" component={PersonagemDetalhes}/>
                <PrivateRoute exact path="/modos" component={Modos}/>
                <PrivateRoute exact path="/modos/:id" component={ModoDetalhes}/>
                <PrivateRoute exact path="/secoes" component={Secoes}/>
                <PrivateRoute exact path="/secoes/:id" component={SecaoDetalhes}/>
                <PrivateRoute exact path="/gerencia" component={Gerencia}/>
            </BrowserRouter>
        </>
    )
}