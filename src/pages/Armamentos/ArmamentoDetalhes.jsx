import React, {useEffect, useState} from 'react';
import {Col, Container, Image, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagina from '../../components/Pagina';
import csApi from '../../services/csApi';


export default(props) => {

    
    const [armamento, setArmamento] = useState({})
    const [pais, setPais] = useState([])
    const [classe, setClasses] = useState([])

    const id = props.match.params.id
    
    //Toda vez que carregar o componente ele executa isso
    useEffect(()=>{
        
        csApi.get('armamentos/'+ id).then(results => {
            setArmamento(results.data)
        }) 
        csApi.get('armamentos/'+ id).then(results => {
            setPais(results.data.pais)
        }) 
        csApi.get('armamentos/'+ id).then(results => {
            setClasses(results.data.classe)
        }) 
        
        
    }, [props])
    
    console.log(armamento)

    return (
        <Pagina titulo={armamento.nome}>
            {/* {armamento.id && */}
                <Row>
                    <Col xs={6} md={4} className='pl: 2'>
                        <Image style={{backgroundColor : "#f0eee1"}} src={armamento.foto} thumbnail />
                    </Col>
                    <Col xs={6} md={6}>
                        <Container>
                            <p><strong>Descrição: </strong> {armamento.descricao} </p>
                            {pais &&
                                <React.Fragment key={pais.id}>
                                    <hr/>
                                    <p><strong>Nacionalidade: </strong> <Link to={`/paises/${pais.id}`} style={{color: 'black'}}>{pais.local} - <Image width='50' src={pais.bandeira} rounded /></Link></p>
                                </React.Fragment>
                            }
                            {classe &&
                                <React.Fragment key={classe.id}>
                                    <hr/>
                                    <p><strong>{classe.lado} |</strong> {classe.descricao} </p>
                                </React.Fragment>
                            }
                        </Container>
                        
                    </Col>
                </Row>
        </Pagina>
      )
}
