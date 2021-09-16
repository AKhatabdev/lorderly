import React from 'react';
import {Button, Navbar, NavbarBrand, Container} from "react-bootstrap";
import {useHistory} from "react-router-dom"

export default function NavBar() {
    const history = useHistory()

    return (
        <Navbar className="justify-content-between" id="navigation-bar" fixed="top" sticky="top" bg="light"
                variant="light">
            <NavbarBrand className="m-3 fw-bolder">Lorderly</NavbarBrand>
            <Container className="float-end m-3 p-1">
                <Button onClick={() => history.push('/login')} ClassName="m-3 fw-bolder" type="button"
                        variant="outline-primary">Login</Button>{' '}
                <Button className="btn-sm" variant="outline-light"> </Button>
                <Button onClick={() => history.push('/signup')} ClassName="m-3 fw-bolder" type="button"
                        variant="primary">Sign
                    Up</Button>{' '}
            </Container>
        </Navbar>
    );
};
