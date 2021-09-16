import "../styles/Footer.css"

import React, {useState} from 'react';
import {Button, Navbar, NavbarBrand, Container, ListGroupItem, ListGroup} from "react-bootstrap";
import {SocialIcon} from 'react-social-icons';

export default function Footer() {
    const [disable, setDisable] = useState(false);

    return (
        <Navbar className="justify-content-center" id="footer" bg="transparent" sticky={"bottom"}
                variant="dark" fluid>
            <ListGroup className="list-group-flush bg-transparent justify-content-evenly align-content-center">
                <ListGroupItem className="bg-transparent">
                    <p className="text-center text-black fw-normal">By Awais Khatab &copy; 2021 Built with React</p>
                </ListGroupItem>
                <ListGroupItem className="bg-transparent align-content-center">
                    <NavbarBrand className="m-0 bg-transparent justify-content-evenly" style={{width: 'auto'}}>
                        <SocialIcon className="m-3" fgColor={"white"} bgColor={"black"}
                                    url="https://www.instagram.com/interdimensional_pancake.eng/"/>
                        <SocialIcon className="m-3" fgColor={"white"} bgColor={"black"}
                                    url="https://awaiskhatab.engineer/"/>
                        <SocialIcon className="m-3" fgColor={"white"} bgColor={"black"}
                                    url="https://github.com/AKhatabdev"/>
                        <SocialIcon className="m-3" fgColor={"white"} bgColor={"black"}
                                    url="https://www.linkedin.com/in/awais-khatab-3aa18616b/"/>
                    </NavbarBrand>
                </ListGroupItem>
            </ListGroup>
            <Container className="float-end m-0">
                <Button hidden={disable} disabled={disable} onClick={() => setDisable(true)}
                        ClassName="btn-sm m-1 fw-bolder" type="button" variant="outline-secondary">Reject</Button>{' '}
                <Button hidden={disable} disabled={disable} onClick={() => setDisable(true)}
                        ClassName="btn-sm m-1 fw-bolder" type="button" variant="secondary">Accept Cookies</Button>{' '}
            </Container>
        </Navbar>
    );
};
