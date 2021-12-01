import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../Banner/Banner.css";
import profile from "../../Images/Profile.jpg";

const Banner = () => {
  const resume = () => {
    const url =
      "https://drive.google.com/file/d/1VtNwXxNhyV4xhHvTVh6HI8UcaFaWDFY-/view?usp=sharing";
    window.open(url, "_blank");
  };
  return (
    <div>
      <Container className="py-5">
        <Row className="align-items-center justify-content-center">
          <Col className="d-flex justify-content-end" sm={5}>
            <div className="me-5">
              <img className="profile-img" src={profile} alt="" />
            </div>
          </Col>
          <Col sm={7} className="text-dark">
            <div className="wrapper">
              <div className="typing-demo">
                <h4 className="text-uppercase">Junior Web Developer</h4>
              </div>
            </div>
            <h1>Avishek Ataur</h1>
            <p className="mt-4 pt-2">
              <strong>Hello! Everyone,</strong> <br />
              I'm a Junior Web Developer with five plus months of experience
              from a complete web development course of &nbsp;
              <strong> 
                <a
                  className="text-dark text-decoration-none"
                  href="https://www.programming-hero.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Programming Hero
                </a>
              </strong>{" "}
              which is one of the best program learning platform of Bangladesh. I'm
              seeking an opportunity to extend my full stack web development
              knowledge specially on MERN stack projects.
            </p>
            <Button
              onClick={resume}
              className="mt-3"
              variant="outline-secondary"
            >
              Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
