import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="text-center mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="mb-4">Dashboard</h1>
          <p className="lead">Welcome to the URL Shortener Dashboard. Please select an option below to proceed.</p>
          <div className="d-flex justify-content-around mt-5">
            <Link to="/shorten">
              <Button variant="primary" size="lg">
                URL Shortener
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="success" size="lg">
                URL Dashboard
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;