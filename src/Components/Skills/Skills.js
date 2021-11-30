import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Components/Skills/Skills.css";
import js from "../../Images/skill_icons/js.png"; /* 
import mongo from "../../Images/skill_icons/mongo.png";
import express from "../../Images/skill_icons/express.png";
import bootstrap from "../../Images/skill_icons/bootstrap.png";
import css from "../../Images/skill_icons/css.png";
import html from "../../Images/skill_icons/html.png";
import react from "../../Images/skill_icons/react.png";
import firebase from "../../Images/skill_icons/firebase.png"; */

const Skills = () => {
  return (
    <div className="pb-5">
      <Container className="text-dark">
        <h2 className="text-center">Skills</h2>
        <Row className="align-items-center">
          <Col sm={6}>
            <div className="skills-div d-flex justify-content-between align-items-center p-5">
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
                <img width="40" height="40" src={js} alt="" />
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <li>
              Comfortable with Javascript, ES6, React, Firebase, Node JS,
              Express JS, MongoDB for making e-commerce projects.
            </li>
            <li>
              Very used to working with popular css framework Bootstrap and
              Tailwind.
            </li>
            <li>
              A bit familiar with React Native, Redux, Next.js, Material UI and
              SASS.
            </li>
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
