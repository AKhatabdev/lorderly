import "../styles/Login.css";
import "../styles/OnHover.css"

import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import {useAuth} from "../contexts/AuthContext"
import {Link, useHistory} from "react-router-dom"
import Fade from "react-reveal/Fade"
import logo from "./images/title_Lorderly.png";

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            setLoading(false)
            history.push("/")
        } catch {
            setLoading(false)
            setError('Failed to log in')
        }
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
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label className="mb-1">Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required/>
                            </Form.Group>
                            <Form.Group className="mt-2 mb-4" id="password">
                                <Form.Label className="mb-1">Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required/>
                            </Form.Group>
                            <Button disabled={loading} className="w-100" type="submit" variant="dark">
                                Login
                            </Button>
                        </Form>
                        <div className="w-100 text-center mt-3">
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
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
                                    className=" w-100 text-center mt-1">
                                Signup</Button></form>
                    </Card.Body>
                </Card>
            </Fade>
        </>
    )
}
