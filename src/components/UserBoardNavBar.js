import "../styles/UserBoardNavBar.css";

import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"
import {useAuth} from "../contexts/AuthContext"
import {AiOutlineLogout, AiTwotoneEdit} from 'react-icons/ai';
import {Alert} from "react-bootstrap";
//import firebase from "../firebase";

export default function UserBoardNavBar() {
    //const user = firebase.auth().currentUser;
    const history = useHistory()
    const [error, setError] = useState('')
    const {logout} = useAuth()

    async function handleLogout() {
        try {
            await logout()
        } catch {
            setError('Failed to logout')
        }
    }

    return (
        <>
            <div className="avatar" onClick={() => history.push('/update-profile')}>
                <img src="/images/avatars/avatar1.png" alt="Title"/>
                <h3><AiTwotoneEdit/></h3>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="logout" onClick={handleLogout}>
                <Link to="/landing-page">
                    <i><AiOutlineLogout/></i>
                </Link>
            </div>
        </>
        );
}
