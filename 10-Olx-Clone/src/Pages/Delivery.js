import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const DeliveryPage = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Container className="delivery-container mt-5">
            <Row>
                <Col>
                    <h2 className="text-center mb-4">Delivery Information</h2>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter your address" />
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your city" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicZip">
                                    <Form.Label>ZIP Code</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your ZIP code" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group controlId="formBasicCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" placeholder="Enter your country" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter your phone number" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="btn-submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default DeliveryPage;
