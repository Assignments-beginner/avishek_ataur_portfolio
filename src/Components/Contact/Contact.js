import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "first-porfolio",
        "portfolio-template",
        e.target,
        "user_wFVXijDSM0kcmETI1oT1V"
      )
      .then((res) => {
        console.log(res);
        e.target.reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Thank You!",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="pt-3 pb-5 text-dark">
      <h2 className="text-center pb-2">Contact Me</h2>
      <Container className="p-5">
        <Row>
          <Col lg={6}>
            <div>
              <Form onSubmit={sendEmail}>
                <div className="d-flex mb-3">
                  <Form.Control
                    className="me-1 p-2"
                    type="name"
                    name="firstname"
                    placeholder="First Name"
                    required
                  />
                  <Form.Control
                    className="ms-1 p-2"
                    type="name"
                    name="lastname"
                    placeholder="Last Name"
                    required
                  />
                </div>

                <div className="d-flex mb-3">
                  <Form.Control
                    className="me-1 p-2"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <Form.Control
                    className="ms-1 p-2"
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    required
                  />
                </div>

                <Form.Control
                  className="mb-3 p-2"
                  as="textarea"
                  name="message"
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
              <h3 className="text-center mb-3">Follow Me</h3>
              <div className="text-center">
                <a
                  className="m-2 text-secondary text-decoration"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/avishek.ataur/"
                >
                  <i className="fs-3 fab fa-facebook"></i>
                </a>
                <a
                  className="m-2 text-secondary text-decoration"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/avishekataur"
                >
                  <i className="fs-3 fab fa-github"></i>
                </a>
                <a
                  className="m-2 text-secondary text-decoration"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/avishek-ataur-70435019a/"
                >
                  <i className="fs-3 fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="pt-4">
              {/* Phone */}
              <div className="m-4 d-flex justify-content-center align-items-center">
                <i class="fs-4 fas fa-phone-alt text-dark"></i>&nbsp; &nbsp;
                <span className="text-dark fs-5">01782869159</span>
              </div>
              {/* email */}
              <div className="m-4 d-flex justify-content-center align-items-center">
                <i class="fs-3 fas fa-envelope text-dark"></i> &nbsp; &nbsp;
                <span className="text-dark fs-5">avishekataur@gmail.com</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
