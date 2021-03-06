import "../styles/Footer.css"

import React from 'react';
import {Navbar, NavbarBrand, ListGroupItem, ListGroup} from "react-bootstrap";
import {SocialIcon} from 'react-social-icons';

export default function Footer() {

    return (
        <Navbar className="justify-content-center" id="footer" bg="transparent" sticky={"bottom"}
                variant="dark">
            <ListGroup className="list-group-flush bg-transparent justify-content-evenly align-content-center">
                <ListGroupItem className="bg-transparent">
                    <p className="text-center text-black fw-normal">By Awais Khatab&copy; 2021 Built with
                        React&copy;</p>
                </ListGroupItem>
                <ListGroupItem className="bg-transparent align-content-center">
                    <NavbarBrand className="m-0 bg-transparent justify-content-evenly" style={{width: 'auto'}}>
                        <SocialIcon className="m-3" fgColor={"white"} bgColor={"black"}
                                    url="https://www.instagram.com/interdimensional_pancake.eng/" target="_blank"/>
                        <SocialIcon className="m-3" fgColor={"white"} bgColor={"black"}
                                    url="https://awais-khatab-personal-website.netlify.app" target="_blank"/>
                        <SocialIcon className="m-3" fgColor={"white"} bgColor={"black"}
                                    url="https://github.com/AKhatabdev" target="_blank"/>
                        <SocialIcon className="m-3" fgColor={"white"} bgColor={"black"}
                                    url="https://www.linkedin.com/in/awais-khatab-3aa18616b/" target="_blank"/>
                    </NavbarBrand>
                </ListGroupItem>
            </ListGroup>
        </Navbar>
    );
};
