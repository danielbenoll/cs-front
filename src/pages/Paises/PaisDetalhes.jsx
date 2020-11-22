import React, {useEffect, useState} from 'react';
import {Card, Col, Image, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Capas from '../../components/Capas';
import Cartao from '../../components/Cartao';
import Cover from '../../components/Cover';
import Pagina from '../../components/Pagina';
import Slide from '../../components/Slide';
import csApi from '../../services/csApi';


export default(props) => {

    
    const [pais, setModo] = useState({})
    const [mapas, setMapas] = useState([])
    const [armamentos, setArmamentos] = useState([{}])
    const [personagens, setPersonagens] = useState([{}])
    const [fotos, setFotos] = useState([{}])

    //Toda vez que carregar o componente ele executa isso
    useEffect(()=>{
        const id = props.match.params.id

        csApi.get('paises/'+ id).then(results => {
            setModo(results.data)
        }) 
        csApi.get('paises/'+ id).then(results => {
            setMapas(results.data.mapas)
        }) 
        csApi.get('paises/'+ id).then(results => {
            setPersonagens(results.data.personagens)
        }) 
        csApi.get('paises/'+ id).then(results => {
            setArmamentos(results.data.armamentos)
        }) 
        csApi.get('fotos').then(results => {
            setFotos(results.data.data)
        }) 
        
        
    }, [props])
    
    let foto= []
    
    for (let i = 0; i < fotos.length; i++) {
        for (let y = 0; y < mapas.length; y++) {
            if(mapas[y].id == fotos[i].mapa_id){
                foto[i] = 
                {
                    'foto': fotos[i].foto,
                    'nome': mapas[y].nome,
                    'id': fotos[i].id
                }
            }
            
        }
    }
    
    return (
        <Pagina titulo={pais.local} imagem={pais.bandeira}>
            {foto.length>0 &&
                <Row>
                    <Col xs={12} md={12}>
                    </Col>
                    <Col md={12}>
                        <hr/>
                        <h1>Mapas</h1>
                        <br/>
                        <Slide lista={foto} foto='foto' link="mapas"/>
                        <br/>
                    </Col>
                </Row>
            }   
            {armamentos.length>0 &&
                <Row>
                    <Col md={12}>
                        <hr/>
                        <h1>Armamentos</h1>
                        <br/>
                        <Slide lista={armamentos} foto='foto' link='armamentos'/>
                        <br/>
                    </Col>
                </Row>
            }
            {personagens.length>0 &&
                <Row>
                    <Col md={12}>
                        <hr/>
                        <h1>Personagens</h1>
                        <br/>
                        <Slide lista={personagens} foto='foto' link='personagens'/>
                        <br/>
                    </Col>
                </Row>
            }
        </Pagina>
      )
}
