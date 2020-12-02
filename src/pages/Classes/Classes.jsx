import React, { useEffect, useState } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                    <Card style={{backgroundColor : "#f0eee1"}}>
                        <Link to={`/classes/${item.id}`} style={{color: 'black'}}>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                    <br/>
                                    <Card.Title >{item.lado}</Card.Title>
                                    <Card.Text>
                                        <hr/>
                                        {item.descricao}
                                    </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                ))}
            </CardDeck>
        </Pagina>
    )
}