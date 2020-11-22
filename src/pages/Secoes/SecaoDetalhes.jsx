import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Image, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Capas from '../../components/Capas';
import Cartao from '../../components/Cartao';
import Cover from '../../components/Cover';
import Pagina from '../../components/Pagina';
import Slide from '../../components/Slide';
import csApi from '../../services/csApi';


export default(props) => {

    
    const [secao, setSecao] = useState([])
    const [armamentos, setArmamentos] = useState([])

    //Toda vez que carregar o componente ele executa isso
    useEffect(()=>{
        const id = props.match.params.id

        csApi.get('secoes/'+ id).then(results => {
            setSecao(results.data)
        }) 
        csApi.get('secoes/'+ id).then(results => {
            setArmamentos(results.data.armamentos)
        }) 
        
        
    }, [props])
    
    console.log(armamentos.nome)

    return (
        <Pagina titulo={secao.nome}>
            {/* {secao.id && */}
                <Row>
                    <Col xs={12} md={12}>
                        <Container>
                            <p>{secao.descricao}</p>
                        </Container>
                    </Col>
                    <Col md={12}>
                        <hr/>
                        <h1>Armamentos</h1>
                        <br/>
                        <Slide lista={armamentos} foto='foto' label='nome' link='armamentos'/>
                        <br/>
                    </Col>
                </Row>
            {/* } */}
        </Pagina>
      )
}
