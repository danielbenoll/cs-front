import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
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
                    <Col md={3}>
                        <Cartao foto={item?.foto} tamanhoImg={200}>
                            <strong>{item.nome} - {item.lado}</strong>
                        </Cartao>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}