import "../styles/UserBoardNavBar.css";

import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import {useAuth} from "../contexts/AuthContext"
import {Alert, Button, Container, Navbar, NavbarBrand} from "react-bootstrap";
import logo from "./images/title_Lorderly.png";

export default function UserBoardNavBar() {
    const history = useHistory()
    const [error, setError] = useState('')
    const {logout} = useAuth()

    async function handleLogout() {
        try {
            await logout()
        } catch {
            setError('Failed to logout')
        }
    }

    return (
        <>
            <Navbar className="justify-content-between title" id="navigation-bar" fixed="top" sticky="top" bg="white"
                    variant="dark">
                <NavbarBrand className="m-1 p-1 fw-bolder justify-content-center">
                    <img onClick={handleLogout} src={logo} width="150px" alt="Logo-Title"/></NavbarBrand>

                <Container className="float-end m-1 fw-bolder">
                    <Button onClick={() => history.push('/update-profile')} className="float-end m-3 fw-bolder"
                            type="button"
                            variant="outline-dark">Profile</Button>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Button onClick={handleLogout} className="mr-3 fw-bolder" type="button"
                            variant="primary">Logout</Button>{' '}

                </Container>
            </Navbar>
        </>
        );
}
