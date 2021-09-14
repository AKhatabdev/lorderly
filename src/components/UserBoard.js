import "../styles/App.css";

import React, { Component } from "react";
import Board from "./Board";
import Profile from "./Profile";

class UserBoard extends Component {
    render() {
        return (
            <div className="App">
                    <Board />
                    <Profile />
                </div>
        );
    }
}

export default UserBoard;
