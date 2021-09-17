import "../styles/NavBar.css"

import React from 'react';
import {Button, Navbar, NavbarBrand, Container} from "react-bootstrap";
import {useHistory} from "react-router-dom"
import logo from "../components/images/title_Lorderly.png"

export default function NavBar() {
    const history = useHistory()

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <Navbar className="justify-content-between title" id="navigation-bar" fixed="top" sticky="top" bg="white"
                variant="dark">
            <NavbarBrand onClick={refreshPage} className="m-3 fw-bolder"><img src={logo} width="150px"
                                                                              alt="Logo-Title"/></NavbarBrand>
            <Container className="float-end m-3 p-1 fw-bolder">
                <Button onClick={() => history.push('/login')} className="m-3 fw-bolder" type="button"
                        variant="outline-dark">Login</Button>{' '}
                <Button onClick={() => history.push('/signup')} className="m-3 fw-bolder" type="button"
                        variant="primary">Sign
                    Up</Button>{' '}
            </Container>
        </Navbar>
    );
};
