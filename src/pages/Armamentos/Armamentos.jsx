import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cartao from '../../components/Cartao';
import Pagina from '../../components/Pagina';
import csApi from '../../services/csApi';

export default() => {

    const [armamentos, setArmamentos] = useState([])
    useEffect(()=>{

        csApi.get('/armamentos?qtd=45').then(results => {
            setArmamentos(results.data.data)
        })
    
    }, [])
    

    console.log(armamentos)

    return(
        <Pagina titulo="Armamentos">
            <Row>
                {armamentos.map(item => (
                    <Col md={3}>
                        <Link to={`/armamentos/${item.id}`} style={{color: 'black'}}>
                            <Cartao titulo={item.lado} foto={item.foto} tamanhoImg={200}>
                                <strong>{item.nome}</strong>
                            </Cartao>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}