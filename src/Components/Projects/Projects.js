import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../Images/slides/abstract01.jpg";
import img2 from "../../Images/slides/abstract02.jpg";
import img3 from "../../Images/slides/abstract03.jpg";
import "../Projects/Projects.css";
import { Button, ButtonGroup, Card, Container } from "react-bootstrap";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

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

  //////////////////////////////// Dronza Website ///////////////////////////////
  const tripClient = () => {
    const url = "https://github.com/Assignments-beginner/trip_toe_client_site";
    window.open(url, "_blank");
  };
  const tripLive = () => {
    const url = "https://tour-site-mongodb-nodejs.netlify.app/";
    window.open(url, "_blank");
  };
  const tripServer = () => {
    const url = "https://github.com/Assignments-beginner/trip_toe_server";
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

      <Carousel infiniteLoop autoPlay className="res-carousel">
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
        {/* Trip Toe  */}
        <div className="d-grid justify-content-center">
          <img src={img3} alt="" />
          <div className="Legend mt-3 text-dark">
            <h4 className="text-uppercase">E-Commerce Mern Stack Project</h4>
            <p>Tour Agency Website</p>
            <Button
              onClick={tripClient}
              variant="outline-secondary w-25"
              size="sm"
            >
              Clinent Site Code
            </Button>
            <Button onClick={tripLive} variant="danger w-25 ms-2 me-2">
              Live Preview
            </Button>
            <Button
              onClick={tripServer}
              variant="outline-secondary w-25"
              size="sm"
            >
              Server Code
            </Button>
          </div>
        </div>
      </Carousel>
      <Container className="res-mobile-cards">
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
        {/* Trip Toe  */}
        <Card className="text-center">
          <Card.Header className="text-uppercase text-dark">
            E-Commerce Mern Stack Project
          </Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={img3} />
            <Card.Text className="text-dark m-2">Tour Agency Website</Card.Text>
            <div className="d-grid justify-content-center">
              <Button
                onClick={tripClient}
                variant="outline-danger px-3 py-2 m-1"
                size="sm"
              >
                Clinent Site Code
              </Button>

              <Button
                onClick={tripServer}
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
              href="https://tour-site-mongodb-nodejs.netlify.app/"
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
