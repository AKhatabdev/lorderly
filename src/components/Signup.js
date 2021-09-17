import "../styles/Signup.css";

import React, {useRef, useState} from 'react';
import {Form, Button, Card, FormControl, Alert} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import {useAuth} from "../contexts/AuthContext";
import {useHistory} from "react-router-dom";
import Fade from "react-reveal/Fade"

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current["value"] !== passwordConfirmRef.current["value"]) {
            return setError('Passwords do not match!')
        } try {
            setError('')
            setLoading(true)
            await signup(emailRef.current["value"], passwordRef.current["value"])
            history.push("/login")
        } catch {
            setError('Failed account creation')
        }
        setLoading(false)
    }

    return (
        <>
            <Fade>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign up</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label className="mb-1">Email</Form.Label>
                                <FormControl type="email" ref={emailRef} required/>
                            </Form.Group>
                            <Form.Group className="mt-2 mb-2" id="password">
                                <Form.Label className="mb-1">Password</Form.Label>
                                <FormControl type="password" ref={passwordRef} required/>
                            </Form.Group>
                            <Form.Group className="mt-2 mb-2" id="password-confirm">
                                <Form.Label>Retype Password</Form.Label>
                                <FormControl type="password" ref={passwordConfirmRef} required/>
                            </Form.Group>
                            <Button disabled={loading} className="w-100 text-center mt-2" type="submit"> Sign
                                Up</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Fade>
            <div>&nbsp;</div>
            <Fade bottom>
                <Card>
                    <Card.Body>
                        <form>
                            <p>Already have an account? </p>
                            <Button onClick={() => history.push('/Login')} variant="outline-secondary" size="sm"
                                    className=" w-100 text-center mt-2"
                                    style={{textDecoration: 'none'}}><i>Login</i></Button>
                        </form>
                    </Card.Body>
                </Card>
            </Fade>
        </>
    )
}
