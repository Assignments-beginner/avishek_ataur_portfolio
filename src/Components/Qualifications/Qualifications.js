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
      <Container className="d-flex justify-content-center px-5 mt-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col xl={4} lg={4} className="q-logos-align">
            <a
              href="https://www.bubt.edu.bd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="q-logos">
                <img src={bubt} alt="" />
              </div>
            </a>
          </Col>
          <Col xl={8} lg={8} className="px-3">
            <div>
              <p className="text-dark q-text">
                Started BSc (CSE) at BANGLADESH UNIVERSITY OF BUSINESS AND
                TECHNOLOGY&nbsp;
                <a
                  className="text-decoration-none"
                  href="https://www.bubt.edu.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (BUBT)
                </a>
                &nbsp;(2018)
              </p>
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
