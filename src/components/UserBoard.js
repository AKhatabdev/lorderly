import "../styles/UserBoard.css";

import React, {Component} from "react";
import Board from "./Board";
import UserBoardNavBar from "./UserBoardNavBar";
import Fade from "react-reveal/Fade"
import Footer from "./Footer";
import {Card} from "react-bootstrap";

class UserBoard extends Component {
    render() {
        return (
            <>
                <Fade top>
                    <UserBoardNavBar/>
                </Fade>
                <Fade bottom delay={100}>
                    <div className="container UserBoard">
                        <Board/>
                    </div>
                </Fade>
                <Card style={{height: '200px', width: 'auto', textAlign: "center"}} bg="white" variant="light">
                    <Card.Body bg="black">
                        <Footer/>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default UserBoard;
