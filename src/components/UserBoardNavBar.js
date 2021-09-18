import "../styles/UserBoardNavBar.css";

import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"
import {useAuth} from "../contexts/AuthContext"
import {AiOutlineLogout} from 'react-icons/ai';
import {Alert} from "react-bootstrap";

export default function UserBoardNavBar() {
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
            <div className="avatar mb-3 p-2">
                <img className="avatar" onClick={() => history.push('/update-profile')}
                     src="/images/avatars/avatar2.png" alt="Title"/>
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
