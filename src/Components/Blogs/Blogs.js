import React, { useEffect } from "react";
import "../Blogs/Blogs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import cssThumbnail from "../../Images/css_img/css_thumbnail.png";

const Blogs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const css = () => {
    const url =
      "https://docs.google.com/document/d/1apeuWthbZGuO-rgkYWz71S_JppInc2LPHHNg8SOTWLw/edit?usp=sharing";
    window.open(url, "_blank");
  };
  return (
    <div className="blogs">
      <div data-aos="fade-right">
        <h2 className="text-dark text-center res-blog-top pb-5">Blog</h2>
      </div>
      {/* <div data-aos="fade-left">
        <h1 className="text-center text-uppercase text-dark mt-5 res-blog-header">
          coming soon...
        </h1>
      </div> */}
      <Container className="px-5 pb-5">
        <Row>
          {/* CSS  */}
          <Col xl={3} lg={3} sm={12}>
            <Card className="shadow">
              <Card.Img
                width="230"
                height="230"
                variant="top"
                src={cssThumbnail}
              />
              <Card.Body>
                <Card.Title className="text-dark text-center">
                  CSS Grid Layout With Transform-Transition And Positon
                </Card.Title>
                <div className="text-center">
                  <Button onClick={css} size="sm" variant="secondary">
                    Details
                  </Button>
                </div>
              </Card.Body>
              <Card.Footer className="text-secondary text-center">
                <small>12 / 21 / 2021</small>
              </Card.Footer>
            </Card>
          </Col>
          {/* Javascript  */}
        </Row>
      </Container>
      {/* footer */}
      <div className="pb-5 ">
        <hr className="new mt-5" />
        <p className="mt-2 text-secondary text-center text-uppercase">
          Avishek Ataur
        </p>
      </div>
    </div>
  );
};

export default Blogs;
