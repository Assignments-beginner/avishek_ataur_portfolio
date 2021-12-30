import React, { useEffect } from "react";
import "../Qualifications/Qualifications.css";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Qualifications = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="qualifications">
      <div data-aos="fade-right">
        <h2 className="text-dark text-center res-qualifications-top pb-2">
          Qualifications
        </h2>
      </div>
      {/* Update \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      {/* <div data-aos="fade-left">
        <h1 className="text-center text-uppercase text-dark mt-5 res-qualifications-header">
          Not updated yet...
        </h1>
      </div> */}
      <Container className="d-flex justify-content-center mt-5">
        <Row>
          <Col>
            <div className="text-dark">
              <h3>BUBT Logo</h3>
            </div>
          </Col>
          <Col>
            <div className="text-dark">
              <h3>Details</h3>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Footer  */}
      <div>
        <hr className="new mt-5" />
        <p className="mt-2 text-secondary text-center text-uppercase">
          Avishek Ataur
        </p>
      </div>
    </div>
  );
};

export default Qualifications;
