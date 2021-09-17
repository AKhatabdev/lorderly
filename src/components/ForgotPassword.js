import "../styles/ForgotPassword.css";


import React, {useRef, useState} from "react"
import {Form, Button, Card, Alert} from "react-bootstrap"
import {useAuth} from "../contexts/AuthContext"
import {useHistory} from "react-router-dom"
import Fade from "react-reveal/Fade"
import logo from "./images/title_Lorderly.png";

export function ForgotPassword() {
    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")

        } catch {
            setError("Failed to reset password")
        }

        setLoading(false)
    }

    return (
        <>
            <Fade>
                <Card>
                    <Card.Body>
                        <div className="text-center justify-content-center title">
                            <img onClick={() => history.push('/Landing-page')} src={logo}
                                 className=" justify-content-center m-1" width="180px" alt="Logo-Title"/>
                        </div>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {message && <Alert variant="success">{message}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mt-2 mb-2" id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required/>
                            </Form.Group>
                            <Button disabled={loading} className="w-100" type="submit">
                                Reset Password
                            </Button>
                        </Form>
                        <Button onClick={() => history.push('/Login')} variant="outline-dark" size="sm"
                                className=" w-100 text-center mt-2">Login</Button>
                    </Card.Body>
                </Card>
            </Fade>
            <div>&nbsp;</div>
            <Fade bottom>
                <Card>
                    <Card.Body>
                        <form>
                            <p>Need an account? </p>
                            <Button onClick={() => history.push('/Signup')} variant="outline-primary" size="sm"
                                    className=" w-100 text-center mt-1">Signup</Button></form>
                    </Card.Body>
                </Card>
            </Fade>
        </>
    )
}
