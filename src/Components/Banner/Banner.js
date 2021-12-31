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
      "https://drive.google.com/file/d/14Wmw5VQ5vhw0sftPfZwhp18d3svYkEgl/view?usp=sharing";
    window.open(url, "_blank");
  };
  return (
    <div>
      <Container className="res-top-banner">
        <Row className="align-items-center">
          <Col className="res-banner-img" xl={5} lg={5} sm={6}>
            <div>
              <img className="profile-img" src={profile} alt="" />
            </div>
          </Col>
          <Col xl={7} lg={7} sm={6} className="text-dark">
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
            <div className="res-banner-intro">
              <p className="banner-text-justify">
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
                which is one of the best program learning platforms in
                Bangladesh. I'm seeking an opportunity to extend my full-stack
                web development knowledge, especially on MERN stack projects.
              </p>

              <Button onClick={resume} variant="outline-secondary">
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
