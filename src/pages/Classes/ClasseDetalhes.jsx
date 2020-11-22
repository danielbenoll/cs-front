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

    
    const [classe, setClasse] = useState([])
    const [personagens, setPersonagens] = useState([])
    const [armamentos, setArmamentos] = useState([])

    //Toda vez que carregar o componente ele executa isso
    useEffect(()=>{
        const id = props.match.params.id

        csApi.get('classes/'+ id).then(results => {
            setClasse(results.data)
        }) 
        csApi.get('classes/'+ id).then(results => {
            setPersonagens(results.data.personagens)
        }) 
        csApi.get('classes/'+ id).then(results => {
            setArmamentos(results.data.armamentos)
        }) 
        
        
    }, [props])
    
    console.log(personagens)

    return (
        <Pagina titulo={classe.lado}>
            {/* {classe.id && */}
                <Row>
                    <Col xs={4} md={2} className='pl: 2'>
                    </Col>
                    <Col xs={6} md={4} className='pl: 2'>
                        <Image width='150' src={classe?.img} thumbnail />
                    </Col>
                    <Col xs={6} md={6}>
                        <br/>
                        <br/>
                        <br/>
                        <p><strong>Descrição: </strong> {classe.descricao}</p>
                    </Col>
                    <Col md={12}>
                        <hr/>
                        <h1>Personagens</h1>
                        <br/>
                        <Slide lista={personagens} foto='foto' link='personagens'/>
                        <br/>
                    </Col>
                    <Col md={12}>
                        <hr/>
                        <h1>Armamentos</h1>
                        <br/>
                        <Slide lista={armamentos} link='armamento' foto='foto' link='armamentos'/>
                        <br/>
                    </Col>
                </Row>
            {/* } */}
        </Pagina>
      )
}
