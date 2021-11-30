import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import '../Banner/Banner.css'
import profile from "../../Images/Profile.jpg";

const Banner = () => {
  return (
    <div>
      <Container className="py-5">
        <Row className="align-items-center">
          <Col sm={6}>
            <div>
              <img className="profile-img" src={profile} alt="" />
            </div>
          </Col>
          <Col sm={6} className="text-dark">
            <h1 className="text-uppercase">Junior Web Developer</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              nulla voluptatibus voluptatem nisi nam molestiae quia cumque,
              voluptate repellendus consequuntur odit harum, porro voluptatum
              non vel dolor, inventore sit. Temporibus.
            </p>
            <Button variant="secondary">Download Resume</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
