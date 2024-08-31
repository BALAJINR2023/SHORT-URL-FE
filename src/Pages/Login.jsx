import { useState } from 'react';
import { Button, Form, Container, Row, Col} from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { userSignIn } from '../apis/login';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const isAuthenticated = Boolean(localStorage.getItem("isAuthenticated"));

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await userSignIn({ email, password });

    if (data.code === 1) {
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("token", data.token);
      navigate("/home"); // redirect to home page
    } else {
      alert("Please check Your Credentials");
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }


    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="6">
                    <h2>Login</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoComplete='email'
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
                                autoComplete='password'
                            />
                        </Form.Group><br />

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <div className="mt-3">
                    <Button variant="light" type="submit">
                    <Link to='/forgot-password'>Forgot password</Link>
                        </Button>
                    </div>
                    <div className="mt-3">
                    <Button variant="light" type="submit">
                            <Link to='/register'>Register</Link>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
