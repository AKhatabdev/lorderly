import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import {useAuth} from "../contexts/AuthContext"
import {useHistory} from "react-router-dom"
import Fade from "react-reveal/Fade"
import Footer from "./Footer";

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        const promises = []
        setLoading(true)
        setError("")

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises)
            .then(() => {
                history.push("/")
            })
            .catch(() => {
                setError("Failed to update account")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            <Fade top delay={50}>
                <Card>
                    <Card.Body>
                        <h3 className="text-center mb-4">Update Profile</h3>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label className="mb-1">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    ref={emailRef}
                                    required
                                    defaultValue={currentUser.email}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label className="mt-1 mb-1">Create a new password</Form.Label>
                                <Form.Control
                                    className="mb-1"
                                    type="password"
                                    ref={passwordRef}
                                    placeholder="Enter a new password"
                                />
                            </Form.Group>
                            <Form.Group id="password-confirm">
                                <Form.Label className="mt-1 mb-1">Confirm new password</Form.Label>
                                <Form.Control
                                    className="mb-1"
                                    type="password"
                                    ref={passwordConfirmRef}
                                    placeholder="Retype new password"
                                />
                            </Form.Group>
                            <Button disabled={loading} className="w-100 mt-2" type="submit">Update</Button>
                            <Button onClick={() => history.push('/')} variant="outline-danger" size="sm"
                                    className=" w-100 text-center mt-4">
                                Cancel</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Fade>
            <Card style={{height: '200px', width: 'auto', textAlign: "center"}} bg="white" variant="light">
                <Card.Body bg="black">
                    <Footer/>
                </Card.Body>
            </Card>
        </>
    )
}
