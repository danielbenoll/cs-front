import React from 'react';
import "./Cabecalho.css"
import { Navbar, Nav, NavDropdown, Jumbotron, Button, Image, DropdownButton, Dropdown, ButtonGroup, Card, OverlayTrigger, Tooltip, Modal } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, login, logout } from '../services/auth';
import Input from './forms/Input';
import { useForm } from 'react-hook-form';
import UsuarioService from '../services/UsuarioService';

const Cabecalho = (props) => {

    function deslogar(){
        logout()

        props.history.push('/')
    }

    const menuLogin = () =>(
        isAuthenticated()?(
            <>
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
                    <Nav.Link onClick={deslogar}>
                        <Image style={{backgroundColor : 'gray'}} width='50' src="https://www.flaticon.com/svg/static/icons/svg/860/860784.svg" roundedCircle />
                    </Nav.Link>
                </OverlayTrigger>
            </>
        ):(
            <>
            </>
        )
    )

    return (
        <>
            <Navbar style={{backgroundColor : '#0c015032'}}  variant="dark" expand="lg" fixed="bottom">
                <Navbar.Brand href="/"><Image width="100" width="90" height="90" className="d-inline-block align-top" src="https://steamuserimages-a.akamaihd.net/ugc/83717093932922775/B8936CF76AEA207839139E32593F7FA0C4AEC4C9/"  /></Navbar.Brand>
                <small className="text-muted" style={{text:'center'}}>© Copyright 2020 - Daniel O. Aragão</small>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {menuLogin()}
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default withRouter(Cabecalho)