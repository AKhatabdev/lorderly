import "../styles/UserBoard.css";

import React, {Component} from "react";
import Board from "./Board";
import UserBoardNavBar from "./UserBoardNavBar";

class UserBoard extends Component {
    render() {
        return (
            <>
                <UserBoardNavBar/>
                <div className="container">
                    <div className="UserBoard">
                        <Board/>
                    </div>
                </div>
            </>
        );
    }
}

export default UserBoard;
