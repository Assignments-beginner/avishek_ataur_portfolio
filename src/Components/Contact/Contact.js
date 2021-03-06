import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "../Contact/Contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
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
    <div id="contactme" className="pt-3 pb-5 text-dark">
      <div data-aos="fade-right">
        <h2 className="text-center pb-2">Contact Me</h2>
      </div>

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

                <Button className="mb-3" variant="secondary" type="submit">
                  Send
                </Button>
              </Form>
            </div>
          </Col>
          <Col lg={6}>
            <div className="res-follow">
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
            <div className="mt-5">
              {/* Phone */}
              <div
                data-aos="fade-left"
                className="m-3 d-flex justify-content-center align-items-center"
              >
                <i className="res-phone-email fas fa-phone-alt text-dark res-phone-email"></i>&nbsp; &nbsp;
                <span className="text-dark res-phone-email">01782869159</span>
              </div>
              {/* email */}
              <div
                data-aos="fade-right"
                className="m-3 d-flex justify-content-center align-items-center"
              >
                <i className="res-email fas fa-envelope text-dark"></i> &nbsp; &nbsp;
                <span className="text-dark res-phone-email">
                  {" "}
                  <a className="text-decoration-none text-dark" href="mailto:avishekataur@gmail.com">
                    avishekataur@gmail.com
                  </a>{" "}
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="new mt-5" />
      <p className="mt-2 text-secondary text-center text-uppercase">
        Avishek Ataur
      </p>
    </div>
  );
};

export default Contact;
