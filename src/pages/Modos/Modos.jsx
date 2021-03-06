import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagina from '../../components/Pagina';
import csApi from '../../services/csApi';

export default() => {

    const [modos, setModos] = useState([])
    useEffect(()=>{

        csApi.get('/modos').then(results => {
            setModos(results.data.data)
        })
    
    }, [])
    

    console.log(modos)

    return(
        <Pagina titulo="Modos">
                {modos.map(item => (
                    <div>
                        <Card style={{backgroundColor : "#f0eee1"}}>
                            <Card.Body>
                                <Link to={`/modos/${item.id}`} style={{color: 'black'}}>
                                    <br/>
                                    <Card.Title >{item.modo}</Card.Title>
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
        </Pagina>
    )
}