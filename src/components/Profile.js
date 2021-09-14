import "../styles/Profile.css";
import React from "react";
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"
import firebase from "../firebase";
import {useAuth} from "../contexts/AuthContext"
import {AiOutlineLogout} from 'react-icons/ai';

export default function Profile() {
    const user = firebase.auth().currentUser;
    const history = useHistory()

    async function handleLogout() {
        try {
            await useAuth.logout()
            console.log(user.uid)
        } catch {
        }
    }

    return (
        <>
            <div className="avatar" onClick={() => history.push('/update-profile')}>
                <img src="/images/avatars/avatar1.png" alt="Title"/>
            </div>
            <div className="logout" onClick={handleLogout}>
                <Link to="/login">
                    <i><AiOutlineLogout/></i>
                </Link>
            </div>
            </>
        );
}
