import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagina from '../../components/Pagina';
import csApi from '../../services/csApi';

export default() => {

    const [secoes, setSecoes] = useState([])
    useEffect(()=>{

        csApi.get('/secoes').then(results => {
            setSecoes(results.data.data)
        })
    
    }, [])
    

    console.log(secoes)

    return(
        <Pagina titulo="Seções">
            <Row>
                <Container>
                    {secoes.map(item => (
                        <div>
                            <Card style={{backgroundColor : "#f0eee1"}}>
                                <Card.Body>
                                    <Link to={`/secoes/${item.id}`} style={{color: 'black'}}>
                                        <br/>
                                        <Card.Title >{item.nome}</Card.Title>
                                        <Card.Text>
                                            <hr/>
                                            {item.descricao}
                                        </Card.Text>
                                    </Link>
                                </Card.Body>
                            </Card>
                            <br/>
                        </div>
                    ))}
                </Container>
            </Row>
        </Pagina>
    )
}