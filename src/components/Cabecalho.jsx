import React from 'react';
import "./Cabecalho.css"
import { Navbar, Nav, NavDropdown, Jumbotron, Button, Image, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default (props) => {

    console.log(props)

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom">
                <Navbar.Brand href="/"><Image width="100" width="90" height="90" className="d-inline-block align-top" src="https://steamuserimages-a.akamaihd.net/ugc/83717093932922775/B8936CF76AEA207839139E32593F7FA0C4AEC4C9/"  /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <DropdownButton
                    as={ButtonGroup}
                    key={'up'}
                    id={`dropdown-button-drop-up`}
                    drop={'up'}
                    variant="secondary"
                    title={`Barra de Opções`}
                >
                    <Link className="nav-link" to="/armamentos">Armamentos</Link>
                    <Link className="nav-link" to="/classes">Classes</Link>
                    <Link className="nav-link" to="/mapas">Mapas</Link>
                    <Link className="nav-link" to="/modos">Modos</Link>
                    <Link className="nav-link" to="/paises">Países</Link>
                    <Link className="nav-link" to="/personagens">Personagens</Link>
                    <Link className="nav-link" to="/secoes">Seções</Link>
                </DropdownButton>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

{/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/armamentos">Armamentos</Link>
                        <Link className="nav-link" to="/classes">Classes</Link>
                        <Link className="nav-link" to="/mapas">Mapas</Link>
                        <Link className="nav-link" to="/modos">Modos</Link>
                        <Link className="nav-link" to="/paises">Países</Link>
                        <Link className="nav-link" to="/personagens">Personagens</Link>
                        <Link className="nav-link" to="/secoes">Seções</Link>
                    </Nav>
                </Navbar.Collapse> */}