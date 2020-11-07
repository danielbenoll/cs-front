import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Cartao from '../../components/Cartao';
import Pagina from '../../components/Pagina';
import csApi from '../../services/csApi';

export default() => {

    const [classes, setClasses] = useState([])
    useEffect(()=>{

        csApi.get('/classes').then(results => {
            setClasses(results.data.data)
        })
    
    }, [])
    

    // console.log(classes)

    return(
        <Pagina titulo="Classes">
            <Row>
                {classes.map(item => (
                    <Col md={6}>
                        <Cartao titulo={item.lado} foto={item.img} tamanhoImg={536}>
                            {item.descricao}
                        </Cartao>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}