import React from 'react';
import "./Cabecalho.css"
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default (props) => {

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">COUNTER STRIKE: Global Offensive 🔫</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Armamentos" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/armamentos">Populares</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/filmes/lancamentos">Lançamentos</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/filmes/bem-avaliados">Bem Avaliados</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Séries" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/series/populares">Populares</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/series/no-ar">No Ar</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/series/bem-avaliados">Bem Avaliados</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Classes" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/classes">Lista</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/atores/lancamentos">Novos</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

