import React, { useEffect, useState } from 'react';
import { Card, CardDeck, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cartao from '../../components/Cartao';
import Pagina from '../../components/Pagina';
import Slide from '../../components/Slide';
import csApi from '../../services/csApi';

export default() => {

    const [paises, setPaises] = useState([])
    useEffect(()=>{

        csApi.get('/paises').then(results => {
            setPaises(results.data.data)
        })
    
    }, [])
    

    console.log(paises)

    return(
        <Pagina titulo="Países">
            <Slide lista={paises} foto="bandeira" link='paises' label='local'/>
            <br/>
        </Pagina>
    )
}