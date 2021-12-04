import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Banner/Banner.css";
import profile from "../../Images/Profile.jpg";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const resume = () => {
    const url =
      "https://drive.google.com/file/d/13YfmjX1EuujMW_Q0oo4tTiKsPgoQqNZl/view?usp=sharing";
    window.open(url, "_blank");
  };
  return (
    <div>
      <Container className="py-3 res-top-banner">
        <Row className="align-items-center justify-content-center">
          <Col className="res-banner-imgdiv d-flex justify-content-end" sm={5}>
            <div className="me-5 res-banner-img">
              <img className="profile-img" src={profile} alt="" />
            </div>
          </Col>
          <Col sm={7} className="text-dark">
            <div className="res-names">
              <div className="text">
                <h4 className="text-uppercase res-designation">
                  Junior Web Developer
                </h4>
                <div className="fadingEffect"></div>
              </div>

              <div data-aos="fade-left">
                <h1 className="text-dark display-5 res-name">Avishek Ataur</h1>
              </div>
            </div>

            <p className="mt-4 pt-2 banner-text-justify res-banner-intro">
              <strong>Hello! Everyone,</strong> <br />
              I'm a Junior Web Developer with five-plus months of experience
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
              which is one of the best program learning platforms in Bangladesh.
              I'm seeking an opportunity to extend my full-stack web development
              knowledge, especially on MERN stack projects.
            </p>
            <div className="res-banner-intro">
              <Button
                onClick={resume}
                className="mt-3"
                variant="outline-secondary"
              >
                Resume
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
