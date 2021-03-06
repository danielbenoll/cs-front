import React, {useEffect, useState} from 'react';
import { Col, Container, Image, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagina from '../../components/Pagina';
import csApi from '../../services/csApi';


export default(props) => {

    
    const [personagem, setPersonagem] = useState({})
    const [pais, setPais] = useState([])
    const [classe, setClasses] = useState([])

    const id = props.match.params.id
    
    //Toda vez que carregar o componente ele executa isso
    useEffect(()=>{
        
        csApi.get('personagens/'+ id).then(results => {
            setPersonagem(results.data)
        }) 
        csApi.get('personagens/'+ id).then(results => {
            setPais(results.data.pais)
        }) 
        csApi.get('personagens/'+ id).then(results => {
            setClasses(results.data.classe)
        }) 
        
        
    }, [props])
    
    console.log(classe)

    return (
        <Pagina titulo={personagem.nome}>
            {/* {personagem.id && */}
                <Row>
                    <Col xs={6} md={4} className='pl: 2'>
                        <Image src={personagem.foto} thumbnail />
                    </Col>
                    <Col xs={6} md={6}>
                        <Container>
                            <p><strong>Nacionalidade: </strong> <Link to={`/paises/${pais.id}`} style={{color: 'black'}}>{pais.local} - <Image width='50' src={pais.bandeira} rounded /></Link></p>
                            <hr/>
                            <p><strong>{classe.lado} |</strong> <Link to={`/classes/${classe.id}`} style={{color: 'black'}}>{classe.descricao} </Link></p>
                        </Container>
                        
                    </Col>
                </Row>
        </Pagina>
      )
}
