import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Cartao from '../../components/Cartao';
import Pagina from '../../components/Pagina';
import csApi from '../../services/csApi';

export default() => {

    const [mapas, setMapas] = useState([])
    useEffect(()=>{

        csApi.get('/mapas').then(results => {
            setMapas(results.data.data)
        })
    
    }, [])
    

    console.log(mapas[0]?.fotos[0].foto)

    return(
        <Pagina titulo="Mapas">
            <Row>
                {mapas.map(item => (
                    <Col md={3}>
                        <Cartao titulo={item.lado} foto={item?.fotos[0].foto} tamanhoImg={200}>
                            <strong>{item.nome}</strong>
                        </Cartao>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}