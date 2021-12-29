import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../Images/slides/abstract01.jpg";
import img2 from "../../Images/slides/abstract02.jpg";
import img3 from "../../Images/slides/abstract03.png";
import "../Projects/Projects.css";
import { Button, Card, Container } from "react-bootstrap";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  //////////////////////////////// Android App ///////////////////////////////
  const quizappClient = () => {
    const url = "https://github.com/avishekataur/quizapp";
    window.open(url, "_blank");
  };
  const quizappLive = () => {
    const url = "https://expo.dev/@avishekataur/quiz-pro";
    window.open(url, "_blank");
  };

  //////////////////////////////// Dronza Website ///////////////////////////////
  const dronzaClient = () => {
    const url = "https://github.com/Assignments-beginner/dronza-client-site";
    window.open(url, "_blank");
  };
  const dronzaLive = () => {
    const url = "https://drone-za-999.netlify.app/";
    window.open(url, "_blank");
  };
  const dronzaServer = () => {
    const url = "https://github.com/Assignments-beginner/dronza-server";
    window.open(url, "_blank");
  };

  //////////////////////////////// HealthCare Website ///////////////////////////////
  const healthClient = () => {
    const url = "https://github.com/Assignments-beginner/heal_clinic";
    window.open(url, "_blank");
  };
  const healthLive = () => {
    const url = "https://health-care-999.netlify.app/";
    window.open(url, "_blank");
  };

  return (
    <div id="projects" className="pb-5">
      <div data-aos="fade-left">
        <h2 className="text-center text-dark pb-5">Personal Projects</h2>
      </div>

      {/* <h4 className="text-center text-dark">
        Not Completed Yet <span className="display-4">😔</span>
      </h4> */}

      <Carousel infiniteLoop autoPlay className="mx-5 px-5 res-carousel">
        {/* Android App  */}
        <div className="d-grid justify-content-center">
          <img src={img3} alt="" />
          <div className="Legend mt-3 text-dark">
            <h4 className="text-uppercase">Simple React Native App</h4>
            <p>Basic Quiz App</p>
            <Button onClick={quizappClient} variant="outline-secondary w-25">
              Check Code
            </Button>
            <Button onClick={quizappLive} variant="danger w-25 ms-2 me-2">
              Live Preview
            </Button>
          </div>
        </div>
        {/* Dronza  */}
        <div className="d-grid justify-content-center">
          <img src={img1} alt="" />
          <div className="Legend mt-3 text-dark">
            <h4 className="text-uppercase">E-Commerce Mern Stack Project</h4>
            <p>Drone Selling Website</p>
            <Button
              onClick={dronzaClient}
              variant="outline-secondary w-25"
              size="sm"
            >
              Clinent Site Code
            </Button>
            <Button onClick={dronzaLive} variant="danger w-25 ms-2 me-2">
              Live Preview
            </Button>
            <Button
              onClick={dronzaServer}
              variant="outline-secondary w-25"
              size="sm"
            >
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
            <Button onClick={healthClient} variant="outline-secondary w-25">
              Clinent Site Code
            </Button>
            <Button onClick={healthLive} variant="danger w-25 ms-2 me-2">
              Live Preview
            </Button>
          </div>
        </div>
      </Carousel>
      {/* ////////////////////////// Mobile Cards \\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <Container className="res-mobile-cards">
        {/* Heal Clinic  */}
        <Card className="text-center mt-4">
          <Card.Header className="text-uppercase text-dark">
            SIMPLE AUTHENTICATION PROJECT
          </Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={img2} />
            <Card.Text className="text-dark m-2">Health Care Website</Card.Text>
            <div className="d-grid justify-content-center">
              <Button
                onClick={healthClient}
                variant="outline-danger px-3 py-2 m-1"
                size="sm"
              >
                Clinent Site Code
              </Button>
            </div>
          </Card.Body>
          <Card.Footer>
            <a
              className="text-uppercase text-danger text-decoration-none"
              href="https://health-care-999.netlify.app/"
            >
              live preview
            </a>
          </Card.Footer>
        </Card>
        {/* Dronza  */}
        <Card className="text-center">
          <Card.Header className="text-uppercase text-dark">
            E-Commerce Mern Stack Project
          </Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={img1} />
            <Card.Text className="text-dark m-2">
              Drone Selling Website
            </Card.Text>
            <div className="d-grid justify-content-center">
              <Button
                onClick={dronzaClient}
                variant="outline-danger px-3 py-2 m-1"
                size="sm"
              >
                Clinent Site Code
              </Button>

              <Button
                onClick={dronzaServer}
                variant="outline-danger px-3 py-2 m-1"
                size="sm"
              >
                Server Code
              </Button>
            </div>
          </Card.Body>
          <Card.Footer>
            <a
              className="text-uppercase text-danger text-decoration-none"
              href="https://drone-za-999.netlify.app/"
            >
              live preview
            </a>
          </Card.Footer>
        </Card>
        {/* Heal Clinic  */}
        <Card className="text-center mt-4">
          <Card.Header className="text-uppercase text-dark">
            SIMPLE AUTHENTICATION PROJECT
          </Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={img2} />
            <Card.Text className="text-dark m-2">Health Care Website</Card.Text>
            <div className="d-grid justify-content-center">
              <Button
                onClick={healthClient}
                variant="outline-danger px-3 py-2 m-1"
                size="sm"
              >
                Clinent Site Code
              </Button>
            </div>
          </Card.Body>
          <Card.Footer>
            <a
              className="text-uppercase text-danger text-decoration-none"
              href="https://health-care-999.netlify.app/"
            >
              live preview
            </a>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default Projects;
