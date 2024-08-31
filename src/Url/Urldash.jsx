import { useEffect, useState } from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
import { fetchStats, fetchUrls } from '../apis/url/urlapi.js';
import { Link } from 'react-router-dom';
import { Url } from '../apis/constants.js';

const UrlDashboard = () => {
    const [urls, setUrls] = useState([]);
    const [stats, setStats] = useState({ dailyCount: [], monthlyCount: [] });

    useEffect(() => {
        const loadData = async () => {
            try {
                const urlData = await fetchUrls();
                setUrls(urlData);
                const statsData = await fetchStats();
                setStats(statsData);
            } catch (error) {
                console.error('Error loading data:', error);
            }
        };

        loadData();
    }, []);

    return (
        <Container>
            <Link to="/home">HOME</Link>
            <Row>
                <Col md="6">
                    <h2>URL Dashboard</h2>
                    <h3>Created URLs</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Original URL</th>
                                <th>Short URL</th>
                                <th>Clicks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {urls.map((url) => (
                                <tr key={url._id}>
                                    <td>{url.originalUrl}</td>
                                    <td><a href={`${Url}/url-shortener/${url.shortUrl}`} target="_blank" rel="noopener noreferrer">{`${window.location.origin}/${url.shortUrl}`}</a></td>
                                    <td>{url.clicks}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
                <Col md="6">
                    <h3>Statistics</h3>
                    <div>
                        <h4>Daily Creation Count</h4>
                        <ul>
                            {stats.dailyCount.map((stat) => (
                                <li key={stat._id}>{stat._id}: {stat.count}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4>Monthly Creation Count</h4>
                        <ul>
                            {stats.monthlyCount.map((stat) => (
                                <li key={stat._id}>{stat._id}: {stat.count}</li>
                            ))}
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default UrlDashboard;
