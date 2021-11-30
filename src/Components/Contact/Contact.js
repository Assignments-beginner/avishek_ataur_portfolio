import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="pt-3 pb-5">
      <h2 className="text-center text-dark">Contact Me</h2>
      <Container>
        <Row>
          <Col sm={8}>
            <div>
              <Form action="https://formsubmit.co/your@email.com" method="POST">
              <Form.Control type="email" placeholder="Enter email" required/>
                
                <Button type="submit">Send</Button>
              </Form>
            </div>
          </Col>
          <Col sm={4}>
            <div>Follow Me</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
