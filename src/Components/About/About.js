import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";
import "../About/About.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="aboutme" className="res-aboutme-top pt-3 pb-5">
      <Container className="text-dark text-center">
        <div data-aos="fade-left">
          <h2>About Me</h2>
        </div>

        <p className="about-text-justify res-aboutme-detail">
          Hi there, I'm Avishek. As you may have already noticed from my resume.
          So, My superior focus and attention to detail combined with my proper
          knowledge of Javascript, ES6, React, Firebase, Node JS, Express JS,
          MongoDB makes me an exceptional choice for a junior web developer. In
          my current role as a fresher, I have developed MERN stack based applications
          from design to coding with full implementation. My abilities are to communicate and collaborate with the team, co-workers and clients for production level project works.
        </p>
      </Container>
    </div>
  );
};

export default About;
