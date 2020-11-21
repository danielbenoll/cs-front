import React, { useEffect, useState } from 'react';
import { Card, CardDeck, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
    

    console.log(classes)

    return(
        <Pagina titulo="Classes">
            <CardDeck>
                {classes.map(item => (
                    <Card>
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
                            <Link style={{color: 'black'}}>
                                <br/>
                                <Card.Title >{item.lado}</Card.Title>
                                <Card.Text>
                                    <hr/>
                                    {item.descricao}
                                </Card.Text>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </CardDeck>
        </Pagina>
    )
}