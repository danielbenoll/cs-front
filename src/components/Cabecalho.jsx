import React from 'react';
import "./Cabecalho.css"
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default (props) => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                <img
                    alt=""
                    src="https://steamuserimages-a.akamaihd.net/ugc/933807557811000159/B8936CF76AEA207839139E32593F7FA0C4AEC4C9/"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                />{' COUNTER STRIKE: Global Offensive'}
                
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

