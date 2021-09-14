import "../styles/Profile.css";

import React, {Component} from "react";

class Profile extends Component {
    render() {
        return (
            <>
                <div className="avatar">
                    <img src="/images/avatars/avatar1.png" alt="Title"/>
                    <h2>Profile</h2>
                </div>
            </>
        );
    }
}

export default Profile;
