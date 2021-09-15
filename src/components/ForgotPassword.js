import "../styles/ForgotPassword.css";


import React, {useRef, useState} from "react"
import {Form, Button, Card, Alert} from "react-bootstrap"
import {useAuth} from "../contexts/AuthContext"
import {useHistory} from "react-router-dom"

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
            <div className="segue" onClick={() => history.push('/landing-page')}></div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Password Reset</h2>
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
                    <Button onClick={() => history.push('/Login')} variant="outline-secondary" size="sm"
                            className=" w-100 text-center mt-2" style={{textDecoration: 'none'}}><i>Login</i></Button>
                </Card.Body>
            </Card>
            <div>&nbsp;</div>
            <Card>
                <Card.Body>
                    <form>
                        <p>Need an account? </p>
                        <Button onClick={() => history.push('/Signup')} variant="outline-secondary" size="sm"
                                className=" w-100 text-center mt-1"
                                style={{textDecoration: 'none'}}><i>Signup</i></Button></form>
                </Card.Body>
            </Card>
        </>
    )
}
