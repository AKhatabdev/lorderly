import "../styles/Profile.css";
import React, {Component} from "react";
import {Link} from "react-router-dom"
import firebase from "../firebase";
import {useAuth} from "../contexts/AuthContext"
import {AiOutlineLogout} from 'react-icons/ai';

class Profile extends Component {
    render() {
        const user = firebase.auth().currentUser;

        async function handleLogout() {
            try {
                await useAuth.logout()
            } catch {
            }
        }

        return (
            <>
                <div className="avatar">
                    <img src="/images/avatars/avatar1.png" alt="Title"/>
                    <h3>
                        <div>{user.email}</div>
                    </h3>
                </div>
                <div className="logout" onClick={handleLogout}>
                    <Link to="/login">
                        <i><AiOutlineLogout/></i>
                    </Link>
                </div>

            </>
        );
    }
}

export default Profile;
