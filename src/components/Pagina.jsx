import React from 'react';
import { Card, Container, Image, Jumbotron } from 'react-bootstrap';

export default(props) => {
    return(
        <>  
            <div >
                <Container style={{marginBottom : 130}}>
                    <Card style={{backgroundColor : '#f0eee1'}}>
                        <Card.Body>
                            <Card.Title>
                                <Jumbotron style={{backgroundColor: '#535353', color: "white"}}>
                                    <h1>{props.titulo} <Image width="100" src={props.imagem} rounded /></h1>
                                </Jumbotron>
                            </Card.Title>
                            <Card.Text>
                            {props.children}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </>
    )
}