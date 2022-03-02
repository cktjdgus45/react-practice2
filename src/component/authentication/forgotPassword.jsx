import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/authContext';
import { Link, } from "react-router-dom";
import CenterContainer from './centerContainer';

const ForgotPassword = (props) => {
    const emailRef = useRef();
    const { resetPassword, } = useAuth();
    const [error, setError] = useState();
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value)
                .then(() => {
                    setMessage('Check your inbox for instructions')
                })
        } catch {
            setError('Failed to reset password');
        }
        setLoading(false);
    }

    return (
        <CenterContainer>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Password Reset</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {message && <Alert variant='success'>{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Reset Password</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-3'>
                <Link to="/login">Login</Link>
            </div>
            <div className='w-100 text-center mt-2'>
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </CenterContainer>
    )
}

export default ForgotPassword;