import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Image, OverlayTrigger, Popover, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Capas from '../../components/Capas';
import Cartao from '../../components/Cartao';
import Cover from '../../components/Cover';
import Pagina from '../../components/Pagina';
import Slide from '../../components/Slide';
import csApi from '../../services/csApi';


export default(props) => {

    
    const [mapa, setMapa] = useState({})
    const [foto, setFotos] = useState([])
    const [pais, setPais] = useState([])
    const [modos, setModos] = useState([])
    
    const id = props.match.params.id

    //Toda vez que carregar o componente ele executa isso
    useEffect(()=>{

        csApi.get('mapas/'+ id).then(results => {
            setMapa(results.data)
        }) 
        csApi.get('mapas/'+ id).then(results => {
            setFotos(results.data.fotos[0].foto)
        }) 
        csApi.get('mapas/'+ id).then(results => {
            setPais(results.data.pais)
        }) 
        csApi.get('mapas/'+ id).then(results => {
            setModos(results.data.modos)
        }) 
        
        
    }, [props])
    
    console.log(modos)

    return (
        <Pagina titulo={mapa.nome}>
            {/* {mapa.id && */}
                <Row>
                    <Col xs={6} md={4} className='pl: 2'>
                        <Image src={foto} thumbnail />
                    </Col>
                    <Col xs={6} md={6}>
                        <p><strong>País: </strong> <Link to={`/paises/${pais.id}`} style={{color: 'black'}}> {pais.local} - <Image width='50' src={pais.bandeira} rounded /></Link></p>
                        <hr/>
                        <p><strong>Modos: </strong> </p>
                        {modos.map(item => (
                            
                                <OverlayTrigger
                                trigger="hover"
                                key={item.id}
                                placement={'bottom'}
                                overlay={
                                    <Popover id={`popover-positioned-bottom`}>
                                    <Popover.Title as="h3">{item.modo}</Popover.Title>
                                    <Popover.Content>
                                        {item.descricao}
                                    </Popover.Content>
                                    </Popover>
                                }
                                >
                                <Link to={`/modos/${item.id}`}><Button variant="secondary">{item.modo}</Button></Link>
                                </OverlayTrigger>
                            
                        ))}
                        
                        
                    </Col>
                </Row>
        </Pagina>
      )
}
