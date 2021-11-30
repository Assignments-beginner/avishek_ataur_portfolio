import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="pt-3 pb-5 text-dark">
      <h2 className="text-center pb-2">Contact Me</h2>
      <Container className="p-5">
        <Row>
          <Col lg={6}>
            <div>
              <Form
                action="https://formsubmit.co/avishekataur@gmail.com"
                method="POST"
              >
                <div className="d-flex mb-3">
                  <Form.Control
                    className="me-1 p-2"
                    type="name"
                    placeholder="First Name"
                    required
                  />
                  <Form.Control
                    className="ms-1 p-2"
                    type="name"
                    placeholder="Last Name"
                    required
                  />
                </div>

                <div className="d-flex mb-3">
                  <Form.Control
                    className="me-1 p-2"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <Form.Control
                    className="ms-1 p-2"
                    type="text"
                    placeholder="Phone"
                    required
                  />
                </div>

                <Form.Control
                  className="p-2"
                  as="textarea"
                  placeholder="Leave a comment here"
                />

                <Button
                  className="mb-3"
                  variant="outline-secondary"
                  type="submit"
                >
                  Send
                </Button>
              </Form>
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <h4 className="text-center">Follow Me</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
