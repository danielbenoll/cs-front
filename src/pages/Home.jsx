import React from 'react';
import { Card, Container } from 'react-bootstrap';

export default() => {
    var sectionStyle = {
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        backgroundImage: `url(https://i.pinimg.com/originals/e1/dd/1a/e1dd1a6063a73c920d8a442cceed97e8.jpg)`
    }
    return(
        <div style={sectionStyle}>
                <Card>
                    <Card.Body>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="footer">
                        <small className="text-muted" style={{text:'center'}}>© Copyright 2020 - Daniel O. Aragão</small>
                    </Card.Footer>
                </Card>
        </div>
    )
}