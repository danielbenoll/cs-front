import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cartao from '../../components/Cartao';
import Pagina from '../../components/Pagina';
import csApi from '../../services/csApi';

export default() => {

    const [mapas, setMapas] = useState([])
    useEffect(()=>{

        csApi.get('/mapas?qtd=30').then(results => {
            setMapas(results.data.data)
        })
    
    }, [])
    

    console.log(mapas)

    return(
        <Pagina titulo="Mapas">
            <Row>
                {mapas.map(item => (
                    <Col md={3}>
                        <Link to={`/mapas/${item.id}`} style={{color: 'black'}}>
                            <Cartao titulo={item.lado} foto={item?.fotos[0].foto} tamanhoImg={200}>
                                <strong>{item.nome}</strong>
                            </Cartao>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}