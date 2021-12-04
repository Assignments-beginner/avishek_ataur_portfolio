import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="aboutme" className="pt-5 pb-5">
      <Container className="text-dark text-center">
        <div data-aos="fade-left">
          <h2>About Me</h2>
        </div>

        <p className="pt-4 px-5">
          Hi there, I'm Avishek. As you may have already noticed from my resume.
          So, My superior focus and attention to detail combined with my proper
          knowledge of Javascript, ES6, React, Firebase, Node JS, Express JS,
          MongoDB makes me an exceptional choice for a junior web developer. In
          my current role as a fresher, I have developed web-based applications
          from design to coding and full implementation under the direction of
          the senior moderators of the Programming Hero community as I mentioned
          earlier. My abilities to produce proper clean code and to clearly
          communicate and collaborate with co-workers, customers, and management
          of company criteria.
        </p>
      </Container>
    </div>
  );
};

export default About;
