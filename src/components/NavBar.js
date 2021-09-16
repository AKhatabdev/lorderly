import React from 'react';
import {Button, Form, Nav, NavbarBrand} from "react-bootstrap";

export const NavBar = () => {
    return (
        <Nav className="justify-content-between" id="navigation-bar" fixed="top" sticky="top" expand="lg" bg="light"
             variant="dark">
            <NavbarBrand className="m-3">Lorderly</NavbarBrand>
            <Form inline>
                <Button ClassName="ml-2" type="submit">Login</Button>
                <Button ClassName="ml-3" type="submit">Sign Up</Button>
            </Form>
        </Nav>
    );
};

export default NavBar;
