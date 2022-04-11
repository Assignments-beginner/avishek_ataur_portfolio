import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Container, Row } from "react-bootstrap";
import "../../Components/Skills/Skills.css";
import js from "../../Images/skill_icons/js.png";
import mongo from "../../Images/skill_icons/mongo.png";
import express from "../../Images/skill_icons/express.jpg";
import bootstrap from "../../Images/skill_icons/bootstrap.png";
import tailwind from "../../Images/skill_icons/tailwind.png";
import css from "../../Images/skill_icons/css.png";
import html from "../../Images/skill_icons/html.png";
import react from "../../Images/skill_icons/react.png";
import firebase from "../../Images/skill_icons/firebase.png";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="skills" className="pt-3 pb-3">
      <Container className="text-dark">
        <div data-aos="fade-right">
          <h2 className="text-center res-skills">Skills</h2>
        </div>

        <Row className="align-items-center">
          <Col className="p-5" sm={6}>
            {/* Skill 1*/}
            <div className="skills-div d-flex justify-content-between align-items-center mb-2">
              <div className="progress w-75">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "65%", backgroundColor: "#343a40" }}
                >
                  65%
                </div>
              </div>
              <div className="skills-img">
                <img width="40" height="40" src={js} alt="" />
              </div>
            </div>
            {/* Skill 2*/}
            <div className="skills-div d-flex justify-content-between align-items-center mb-2">
              <div className="progress w-75">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "85%", backgroundColor: "#343a40" }}
                >
                  85%
                </div>
              </div>
              <div className="skills-img">
                <img width="40" height="40" src={react} alt="" />
              </div>
            </div>
            {/* Skill 3*/}
            <div className="skills-div d-flex justify-content-between align-items-center mb-2">
              <div className="progress w-75">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "55%", backgroundColor: "#343a40" }}
                >
                  55%
                </div>
              </div>
              <div className="skills-img">
                <img width="40" height="40" src={express} alt="" />
              </div>
            </div>
            {/* Skill 4*/}
            <div className="skills-div d-flex justify-content-between align-items-center mb-2">
              <div className="progress w-75">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%", backgroundColor: "#343a40" }}
                >
                  75%
                </div>
              </div>
              <div className="skills-img">
                <img width="40" height="40" src={mongo} alt="" />
              </div>
            </div>
            {/* Skill 5*/}
            <div className="skills-div d-flex justify-content-between align-items-center mb-2">
              <div className="progress w-75">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%", backgroundColor: "#343a40" }}
                >
                  75%
                </div>
              </div>
              <div className="skills-img">
                <img width="40" height="40" src={firebase} alt="" />
              </div>
            </div>
            {/* Skill 6*/}
            <div className="skills-div d-flex justify-content-between align-items-center mb-2">
              <div className="progress w-75">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "95%", backgroundColor: "#343a40" }}
                >
                  95%
                </div>
              </div>
              <div className="skills-img">
                <img width="40" height="40" src={html} alt="" />
              </div>
            </div>
            {/* Skill 7*/}
            <div className="skills-div d-flex justify-content-between align-items-center mb-2">
              <div className="progress w-75">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "95%", backgroundColor: "#343a40" }}
                >
                  95%
                </div>
              </div>
              <div className="skills-img">
                <img width="40" height="40" src={css} alt="" />
              </div>
            </div>
            {/* Skill 8*/}
            <div className="skills-div d-flex justify-content-between align-items-center mb-2">
              <div className="progress w-75">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "95%", backgroundColor: "#343a40" }}
                >
                  95%
                </div>
              </div>
              <div className="skills-img">
                <img width="40" height="40" src={bootstrap} alt="" />
              </div>
            </div>
            {/* Skill 9*/}
            <div className="skills-div d-flex justify-content-between align-items-center mb-2">
              <div className="progress w-75">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "95%", backgroundColor: "#343a40" }}
                >
                  95%
                </div>
              </div>
              <div className="skills-img">
                <img width="40" height="40" src={tailwind} alt="" />
              </div>
            </div>
          </Col>
          <Col className="p-5 res-skills-list" sm={6}>
            <li>
              Comfortable with Javascript, ES6, React, Firebase, Node JS,
              Express JS, MongoDB for making e-commerce projects.
            </li>
            <br />
            <li>
              Very used to working with popular css framework Bootstrap and
              Tailwind. Also regular works with React libraries such as React
              Router, React Hook Form, React Router Hash Link etc.
            </li>
            <br />
            <li>
              A bit familiar with React Native, Material UI, JSON Web Token
              (JWT) and Stripe Payment System.
              {/* Redux, Next.js, Material UI and SASS. */}
            </li>
            <br />
            <li>
              Working Tech tools are Chrome Dev Tool, Visual Studio Code, Git
              SCM.
            </li>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
