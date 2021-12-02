import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../Images/slides/abstract01.jpg";
import img2 from "../../Images/slides/abstract02.jpg";
import img3 from "../../Images/slides/abstract03.jpg";
import "../Projects/Projects.css";
import { Button, ButtonGroup } from "react-bootstrap";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="projects" className="pb-5 px-5 mx-5">
      <div data-aos="fade-left">
        <h2 className="text-center text-dark pb-5 mb-4">Personal Projects</h2>
      </div>

      {/* <h4 className="text-center text-dark">
        Not Completed Yet <span className="display-4">😔</span>
      </h4> */}

      <Carousel infiniteLoop autoPlay>
        {/* Dronza  */}
        <div className="d-grid justify-content-center">
          <img src={img1} alt="" />
          <div className="Legend mt-3 text-dark">
            <h4 className="text-uppercase">E-Commerce Mern Stack Project</h4>
            <p>Drone Selling Website</p>
            <Button variant="outline-secondary w-25" size="sm">
              Clinent Site Code
            </Button>
            <Button variant="danger w-25 ms-2 me-2">Live Preview</Button>
            <Button variant="outline-secondary w-25" size="sm">
              Server Code
            </Button>
          </div>
        </div>
        {/* Heal Clinic  */}
        <div className="d-grid justify-content-center">
          <img src={img2} alt="" />
          <div className="Legend mt-3 text-dark">
            <h4 className="text-uppercase">Simple Authentication Project</h4>
            <p>Health Care Website</p>
            <Button variant="outline-secondary w-25" size="sm">
              Clinent Site Code
            </Button>
            <Button variant="danger w-25 ms-2 me-2">Live Preview</Button>
            <Button variant="outline-secondary w-25" size="sm">
              Server Code
            </Button>
          </div>
        </div>
        {/* Trip Toe  */}
        <div className="d-grid justify-content-center">
          <img src={img3} alt="" />
          <div className="Legend mt-3 text-dark">
            <h4 className="text-uppercase">E-Commerce Mern Stack Project</h4>
            <p>Tour Agency Website</p>
            <Button variant="outline-secondary w-25" size="sm">
              Clinent Site Code
            </Button>
            <Button variant="danger w-25 ms-2 me-2">Live Preview</Button>
            <Button variant="outline-secondary w-25" size="sm">
              Server Code
            </Button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Projects;
