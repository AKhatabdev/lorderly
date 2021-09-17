import React from 'react';
import {Navbar, NavbarBrand} from "react-bootstrap";
import logo from "./images/title_Lorderly.png";
import Fade from 'react-reveal/Fade';


export default function TitleHeading() {

    return (
        <Fade top>
            <Navbar className="justify-content-center" zIndex="-1000" id="navigation-bar" fixed="top" bg="transparent"
                    variant="dark" fluid>

                <NavbarBrand className="m-3 fw-bolder align-content-center"><img src={logo} width="300px"
                                                                                 alt="Logo-Title"/></NavbarBrand>

            </Navbar>
        </Fade>
    );
};
