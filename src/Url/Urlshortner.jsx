import { useState } from 'react';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import { shortenUrl } from '../apis/url/urlapi';
import { Link } from 'react-router-dom';
import { Url } from '../apis/constants';


const UrlShortener = () => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [message, setMessage] = useState('');
    
     const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await shortenUrl(originalUrl);
            setShortUrl(data.urlId);
            setMessage('URL shortened successfully!');
        } catch (error) {
            setMessage('Failed to shorten URL.' );
            console.log(error);
        }
    };

    return (
        <Container>
            <Link to="/home">HOME</Link>
            <Row className="justify-content-md-center">
                <Col md="6">
                    <h2>URL Shortener</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formOriginalUrl">
                            <Form.Label>Original URL</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter URL"
                                value={originalUrl}
                                onChange={(e) => setOriginalUrl(e.target.value)}
                                required
                            />
                        </Form.Group><br />
                        <Button variant="primary" type="submit">Shorten URL</Button>
                    </Form>
                    {message && <Alert variant="info" className="mt-3">{message}</Alert>}
                    {shortUrl && <div className="mt-3"><strong>Short URL:</strong> <a href={`${Url}/url-shortener/${shortUrl}`} target="_blank" rel="noopener noreferrer">{`${window.location.origin}/${shortUrl}`}</a></div>}
                </Col>
            </Row>
        </Container>
    );
};

export default UrlShortener;
