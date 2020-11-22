import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cartao from '../../components/Cartao';
import Pagina from '../../components/Pagina';
import csApi from '../../services/csApi';

export default() => {

    const [personagens, setPersonagens] = useState([])
    useEffect(()=>{

        csApi.get('/personagens').then(results => {
            setPersonagens(results.data.data)
        })
    
    }, [])
    

    console.log(personagens)

    return(
        <Pagina titulo="Personagens">
            <Row>
                {personagens.map(item => (
                    <Col md={4}>
                        <Link to={`/personagens/${item.id}`} style={{color: 'black'}}>
                            <Cartao foto={item?.foto} tamanhoImg={200}>
                                <strong>{item.nome} - {item?.classe.lado}</strong>
                                {console.log()}
                            </Cartao>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}