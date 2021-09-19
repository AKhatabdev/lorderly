import "../styles/LandingPage.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {Button, Card, CardGroup, Container, Form, Col, Row} from "react-bootstrap";
import mainRight from './images/imageonline-co-white_1.png';
import pressImage from './images/press-logo_mobile_final.png'
import React from "react";
import {useHistory} from "react-router-dom"

import Fade from 'react-reveal/Fade';

export function LandingPage() {
    const history = useHistory()

    function handleEmailSubmit() {
        history.push('/signup')
    }

    return (
        <>
            <Fade top>
                <NavBar/>
            </Fade>
            <Container style={{top: '100px', margin: '1px'}}>
                <CardGroup className="m-5">
                    <Card style={{height: '300px', width: '400px'}} bg="transparent" variant="dark">
                        <Card.Body>
                            <Fade left delay={500}>
                                <h1 className="text-white">Keep track of your tasks.</h1>{' '}
                            </Fade>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                            <Fade bottom delay={1500}>
                                <h4 className="text-white fw-normal">
                                    Manage projects, and reach new productivity peaks.
                                </h4>
                                <div>&nbsp;</div>
                            </Fade>
                            <Fade bottom delay={2500}>
                                <h4 className="text-white fw-normal">
                                    Start with a Lorderly board, lists, and cards. Organise tasks.
                                    Customize and expand with more features as your teamwork grows.
                                </h4>
                            </Fade>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                            <Form>
                                <Row>
                                    <Col>
                                        <Fade right delay={3500}>
                                            <Button id="trialButton" onClick={handleEmailSubmit} className="fw-bolder"
                                                    type="submit" variant="outline-light">START YOUR FREE TRIAL</Button>
                                        </Fade>
                                    </Col>
                                    </Row>
                                </Form>
                        </Card.Body>
                    </Card>
                    <Card className="bg-transparent" style={{width: 'auto', padding: '1px'}}>
                        <Card.Img src={mainRight}/>
                    </Card>
                </CardGroup>
            </Container>
            <Card style={{height: '320px', width: 'auto'}} bg="transparent" variant="dark">
                <Card.Body bg="black">
                    <Fade bottom delay={100}>
                        <h4 className="text-center text-white">- FEATURED ON -</h4>
                        <div className="text-center">
                            <Card className="bg-transparent" style={{width: 'auto'}}>
                                <div className="pressImage"><Card.Img src={pressImage}/></div>
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
