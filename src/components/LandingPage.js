import "../styles/LandingPage.css";
import NavBar from "./NavBar";
import {Card, CardGroup, Container} from "react-bootstrap";
import mainRight from './images/imageonline-co-white_1.png';
import pressImage from './images/press-logo_mobile.png'
import React from "react";

export function LandingPage() {

    return (
        <>
            <NavBar/>
            <Container style={{top: '100px'}}>
                <CardGroup className="m-5 ">
                    <Card style={{height: '300px', width: '450px'}} bg="transparent" variant="dark">
                        <Card.Body>
                            <h1 className="text-white">Keep track of your tasks</h1>{' '}
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                            <h5 className="text-white">
                                Start with a Lorderly board, lists, and cards. Organise tasks. Customize and expand with
                                more
                                features as your teamwork grows.
                            </h5>
                        </Card.Body>
                    </Card>
                    <Card className="bg-transparent" style={{width: 'auto'}}>
                        <Card.Img src={mainRight}/>
                    </Card>
                </CardGroup>
            </Container>
            <Card style={{height: '200px', width: 'auto'}} bg="transparent" variant="dark">
                <Card.Body>
                    <h4 className=" text-center text-white">FEATURED ON</h4>
                    <div className="text-center">
                        <Card.Img src={pressImage} style={{width: 'auto'}} className="align-items: center"/>
                    </div>
                </Card.Body>

            </Card>
        </>
    )
}

export default LandingPage;
