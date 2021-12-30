import React, { useEffect } from "react";
import "../Qualifications/Qualifications.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import bubt from "../../Images/Q_Logos/BUBT.png";
import kpi from "../../Images/Q_Logos/KPI.png";
import ph from "../../Images/Q_Logos/PH.png";

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
      {/* BUBT  */}
      <Container className="d-flex justify-content-center mt-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col className="d-flex justify-content-center align-items-center">
            <div className="q-logos">
              <img src={bubt} alt="" />
            </div>
            <div>
              <h5 className="text-dark">
                Started BSc (CSE) at BANGLADESH UNIVERSITY OF BUSINESS AND
                TECHNOLOGY (BUBT) (2018)
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
      {/* KPI */}

      {/* Programming Hero  */}

      {/* Footer  */}
      <div className="pb-5 pt-5">
        <hr className="new mt-5" />
        <p className="mt-2 text-secondary text-center text-uppercase">
          Avishek Ataur
        </p>
      </div>
    </div>
  );
};

export default Qualifications;
