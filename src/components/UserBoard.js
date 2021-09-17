import "../styles/UserBoard.css";

import React, {Component} from "react";
import Board from "./Board";
import UserBoardNavBar from "./UserBoardNavBar";
import Fade from "react-reveal/Fade"

class UserBoard extends Component {
    render() {
        return (
            <>
                <Fade top>
                    <UserBoardNavBar/>
                </Fade>
                <Fade bottom>
                    <div className="container">
                        <div className="UserBoard">
                            <Board/>
                        </div>
                    </div>
                </Fade>
            </>
        );
    }
}

export default UserBoard;
