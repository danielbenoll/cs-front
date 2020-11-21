import React from 'react';
import "./Cabecalho.css"
import { Navbar, Nav, NavDropdown, Jumbotron, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default (props) => {

    console.log(props)

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="flex-column">
                <Navbar.Brand href="/"><Image width="100" src="https://steamuserimages-a.akamaihd.net/ugc/83717093932922775/B8936CF76AEA207839139E32593F7FA0C4AEC4C9/" rounded /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/classes">Classes</Link>
                        {/* <Link className="nav-link" to="/armamentos">Armamentos</Link> */}
                        <Link className="nav-link" to="/paises">Países</Link>
                        <Link className="nav-link" to="/mapas">Mapas</Link>
                        {/* <Link className="nav-link" to="/personagens">Personagens</Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

