import { useState } from 'react';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import { userSignup } from '../apis/register';
import { Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('customer');
    const [message, setMessage] = useState('');
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await userSignup({ name, email, password, role });
    if (response.error) {
        setMessage(response.error);
    } else {
        setMessage('Registration successful. Please check your email to verify your account.');
    }
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="6">
                    <h2>Register</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                autoComplete="name"
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoComplete="email"
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                 required
                                autoComplete="password"
                            />
                        </Form.Group>

                        <Form.Group controlId="formRole">
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                as="select"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                            >
                                <option value="customer">Customer</option>
                                <option value="admin">Admin</option>
                            </Form.Control>
                        </Form.Group><br />

                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                        <div className="mt-3">
                    <Button variant="light" type="submit">
                            <Link to='/login'>Login</Link>
                        </Button>
                    </div>
                    </Form>
                    {message && <Alert variant="success" className="mt-3">{message}</Alert>}
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
