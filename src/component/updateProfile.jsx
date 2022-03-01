import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/authContext';
import { Link, useNavigate } from "react-router-dom";

const UpdateProfile = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const { currentUser, updateEmails, updatePasswords } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        const promises = [];
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmails(emailRef.current.value));
        }
        if (passwordRef.current.value !== currentUser.password) {
            promises.push(updatePasswords(passwordRef.current.value));
        }

        Promise.all(promises)
            .then(() => { navigate('/'); })
            .catch(() => {
                setError('Failed to update account')
            }).finally(() => {
                setLoading(false);
            })

        try {
            setError('');
            setLoading(true);
            navigate('/');
        } catch {
            setError("Failed to create an account");
        }
        setLoading(false);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Update Profile</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required placeholder={'Leave blank to keep the same'}></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required placeholder={'Leave blank to keep the same'}></Form.Control>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-2" type="submit">Update</Button>
                    </Form>
                </Card.Body>
            </Card>

            <div className='w-100 text-center mt-2'>
                <Link to="/">Cancel</Link>
            </div>
        </>
    )
}

export default UpdateProfile;