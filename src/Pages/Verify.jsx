import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Alert, Container } from 'react-bootstrap';
import { verifyUser } from '../apis/register';

const EmailVerification = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState('success');

    useEffect(() => {
        const verify = async () => {
            const response = await verifyUser(token);
            if (response.code === -1) {
                setMessage(response.msg || 'Verification failed. Please try again.');
                setVariant('danger');
            } else {
                setMessage('Email verified successfully! Redirecting to login...');
                setVariant('success');
                setTimeout(() => {
                    navigate('/login');
                }, 3000); // Redirect to login after 3 seconds
            }
        };
        verify();
    }, [token, navigate]);

    return (
        <Container className="mt-5">
            {message && <Alert variant={variant}>{message}</Alert>}
        </Container>
    );
};

export default EmailVerification;
