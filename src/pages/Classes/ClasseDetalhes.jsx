import React, {useEffect, useState} from 'react';
import {Col, Container, Image, Row } from 'react-bootstrap';
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
        <Pagina titulo={classe.lado} imagem={classe?.img}>
            {/* {classe.id && */}
                <Row>
                    <Col xs={12} md={12}>
                        <Container>
                            <p className="justify-content-md-center">{classe.descricao}</p>
                        </Container>
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
