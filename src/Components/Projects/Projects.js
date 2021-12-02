import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../Images/slides/abstract01.jpg";
import img2 from "../../Images/slides/abstract02.jpg";
import img3 from "../../Images/slides/abstract03.jpg";
import "../Projects/Projects.css";
import { Button } from "react-bootstrap";

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

      <Carousel swipeable useKeyboardArrows infiniteLoop autoPlay>
        <div className="d-grid justify-content-center">
          <img src={img1} alt="" />
          <span className="Legend text-dark">Details</span>
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Projects;
