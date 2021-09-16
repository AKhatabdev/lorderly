import "../styles/UserBoard.css";

import React, { Component } from "react";
import Board from "./Board";
import Profile from "./Profile";

class UserBoard extends Component {
    render() {
        return (
            <>
                <Profile/>
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
