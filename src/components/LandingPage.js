import "../styles/LandingPage.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {Card, CardGroup, Container} from "react-bootstrap";
import mainRight from './images/imageonline-co-white_1.png';
import pressImage from './images/press-logo_mobile_final.png'
import React from "react";
import Fade from 'react-reveal/Fade';


export function LandingPage() {

    return (
        <>
            <NavBar/>
            <Container style={{top: '100px'}}>
                <CardGroup className="m-5 ">
                    <Card style={{height: '300px', width: '400px'}} bg="transparent" variant="dark">
                        <Card.Body>
                            <Fade left>
                                <h1 className="text-white">Keep track of your tasks.</h1>{' '}
                            </Fade>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                            <Fade bottom>
                                <h4 className="text-white fw-normal">
                                    Manage projects, and reach new productivity peaks.
                                </h4>
                                <div>&nbsp;</div>
                                <h4 className="text-white fw-normal">
                                    Start with a Lorderly board, lists, and cards. Organise tasks.
                                    Customize and expand with more features as your teamwork grows.
                                </h4>
                            </Fade>
                        </Card.Body>
                    </Card>
                    <Card className="bg-transparent" style={{width: 'auto'}}>
                        <Card.Img src={mainRight}/>
                    </Card>
                </CardGroup>
            </Container>
            <Card style={{height: '320px', width: 'auto'}} bg="transparent" variant="dark">
                <Card.Body bg="black">
                    <Fade bottom>
                        <h4 className=" text-center text-white">- FEATURED ON -</h4>
                        <div className="text-center">
                            <Card className="bg-transparent" style={{width: 'auto'}}>
                                <div className="PressImage"><Card.Img src={pressImage}/></div>
                            </Card>
                        </div>
                    </Fade>
                </Card.Body>
            </Card>
            <Card style={{height: '200px', width: 'auto', textAlign: "center"}} bg="white" variant="light">
                <Card.Body bg="black">
                    <Footer/>
                </Card.Body>
            </Card>

        </>
    )
}

export default LandingPage;
