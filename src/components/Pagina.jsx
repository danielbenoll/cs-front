import React from 'react';
import { Card, Container, Image, Jumbotron } from 'react-bootstrap';

export default(props) => {
    var sectionStyle = {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(https://wallpapercave.com/wp/wp1980778.jpg)`
    }
    return(
        <>  
            <div style={sectionStyle}>
                <Container>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <Jumbotron>
                                    <h1>{props.titulo} <Image width="100" src={props.imagem} rounded /></h1>
                                </Jumbotron>
                            </Card.Title>
                            <Card.Text>
                            {props.children}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="footer">
                            <small className="text-muted" style={{text:'center'}}>© Copyright 2020 - Daniel O. Aragão</small>
                        </Card.Footer>
                    </Card>
                </Container>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </>
    )
}