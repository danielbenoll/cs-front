import React from 'react';
import "./Cabecalho.css"
import { Navbar, Nav, NavDropdown, Jumbotron, Button, Image, DropdownButton, Dropdown, ButtonGroup, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default (props) => {

    console.log(props)

    return (
        <>
            <Navbar style={{backgroundColor : '#0c015032'}}  variant="dark" expand="lg" fixed="bottom">
                <Navbar.Brand href="/"><Image width="100" width="90" height="90" className="d-inline-block align-top" src="https://steamuserimages-a.akamaihd.net/ugc/83717093932922775/B8936CF76AEA207839139E32593F7FA0C4AEC4C9/"  /></Navbar.Brand>
                <small className="text-muted" style={{text:'center'}}>© Copyright 2020 - Daniel O. Aragão</small>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <DropdownButton
                        as={ButtonGroup}
                        key={'up'}
                        id={`dropdown-button-drop-up`}
                        drop={'up'}
                        variant="secondary"
                        title={``}
                        className="mr-5"
                    >
                        <Link className="nav-link" to="/armamentos" style={{color: 'black'}}>Armamentos</Link>
                        <Link className="nav-link" to="/classes" style={{color: 'black'}}>Classes</Link>
                        <Link className="nav-link" to="/mapas" style={{color: 'black'}}>Mapas</Link>
                        <Link className="nav-link" to="/modos" style={{color: 'black'}}>Modos</Link>
                        <Link className="nav-link" to="/paises" style={{color: 'black'}}>Países</Link>
                        <Link className="nav-link" to="/personagens" style={{color: 'black'}}>Personagens</Link>
                        <Link className="nav-link" to="/secoes" style={{color: 'black'}}>Seções</Link>
                        <Dropdown.Divider />
                        <Link className="nav-link" to="/gerencia" style={{color: 'black'}}>Gerencia</Link>
                    </DropdownButton>
                    <OverlayTrigger
                        key={'top'}
                        placement={'top'}
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                            Logout
                            </Tooltip>
                        }
                    >
                        <Image style={{backgroundColor : 'gray'}} width='50' src="https://www.flaticon.com/svg/static/icons/svg/860/860784.svg" roundedCircle />
                    </OverlayTrigger>
                        
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