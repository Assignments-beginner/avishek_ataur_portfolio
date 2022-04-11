import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../Images/slides/abstract01.png";
import img2 from "../../Images/slides/abstract02.png";
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

  //////////////////////////////// Tour Blog Website ///////////////////////////////
  const tourBlog = () => {
    const url = "https://github.com/Assignments-beginner/trip_client_site";
    window.open(url, "_blank");
  };
  const tourBlogLive = () => {
    const url = "https://trip-expo.netlify.app/home";
    window.open(url, "_blank");
  };

  return (
    <div id="projects" className="pb-5 pt-3">
      <div data-aos="fade-left">
        <h2 className="text-center text-dark pb-5">Personal Projects</h2>
      </div>

      {/* <h4 className="text-center text-dark">
        Not Completed Yet <span className="display-4">😔</span>
      </h4> */}

      <Carousel infiniteLoop autoPlay className="mx-5 px-5 res-carousel">
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
        {/* Tour Blog  */}
        <div className="d-grid justify-content-center">
          <img src={img2} alt="" />
          <div className="Legend mt-3 text-dark">
            <h4 className="text-uppercase">Simple MERN Stack Project</h4>
            <p>Tour Blog Website</p>
            <Button onClick={tourBlog} variant="outline-secondary w-25">
              Clinent Site Code
            </Button>
            <Button onClick={tourBlogLive} variant="danger w-25 ms-2 me-2">
              Live Preview
            </Button>
          </div>
        </div>
      </Carousel>
      {/* ////////////////////////// Mobile Cards \\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <Container className="res-mobile-cards">
        {/* Dronza  */}
        <Card className="text-center mb-4">
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
        {/* Android App  */}
        <Card className="text-center">
          <Card.Header className="text-uppercase text-dark">
            Simple React native app
          </Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={img3} />
            <Card.Text className="text-dark m-2">Basic Quiz App</Card.Text>
            <div className="d-grid justify-content-center">
              <Button
                onClick={quizappClient}
                variant="outline-danger px-3 py-2 m-1"
                size="sm"
              >
                Check Code
              </Button>
            </div>
          </Card.Body>
          <Card.Footer>
            <a
              className="text-uppercase text-danger text-decoration-none"
              href="https://expo.dev/@avishekataur/quiz-pro"
            >
              live preview
            </a>
          </Card.Footer>
        </Card>
        {/* Tour Blog  */}
        <Card className="text-center mt-4">
          <Card.Header className="text-uppercase text-dark">
            SIMPLE AUTHENTICATION PROJECT
          </Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={img2} />
            <Card.Text className="text-dark m-2">Health Care Website</Card.Text>
            <div className="d-grid justify-content-center">
              <Button
                onClick={tourBlog}
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
