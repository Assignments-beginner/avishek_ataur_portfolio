import React, { useEffect } from "react";
import "../Blogs/Blogs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import cssThumbnail from "../../Images/Blogs/css_thumbnail.png";
import jsThumbnail from "../../Images/Blogs/js_blog.png";
import es6Thumbnail from "../../Images/Blogs/es6_blog.png";
import reactThumbnail from "../../Images/Blogs/react_blog.png";
import backendThumbnail from "../../Images/Blogs/backend_blog.png";

const Blogs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const css = () => {
    const url =
      "https://docs.google.com/document/d/1apeuWthbZGuO-rgkYWz71S_JppInc2LPHHNg8SOTWLw/edit?usp=sharing";
    window.open(url, "_blank");
  };
  const js = () => {
    const url =
      "https://docs.google.com/document/d/1yTZef3XkeWf2FgEaSGtDO32shnhj1GEqb_yEKHdUV3A/edit?usp=sharing";
    window.open(url, "_blank");
  };
  const es6 = () => {
    const url =
      "https://docs.google.com/document/d/14LT0-C1Bymlw0BvIkmgM4ZrQBaIDSrNBshdtj6F9pac/edit?usp=sharing";
    window.open(url, "_blank");
  };
  const react = () => {
    const url =
      "https://docs.google.com/document/d/1gcICpzhlhzEEXE21OOimMCnZO8peu2vResN0xN4jCHQ/edit?usp=sharing";
    window.open(url, "_blank");
  };
  const mongo = () => {
    const url =
      "https://docs.google.com/document/d/1m8WAdFLkfjcCXywHQUC-zWVflpgNj0rROVA6XsVgUvs/edit?usp=sharing";
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
        <Row className="g-4">
          {/* CSS  */}
          <Col className="d-flex align-items-stretch" xl={3} lg={3} sm={12}>
            <Card className="shadow">
              <Card.Img
                width="230"
                height="230"
                variant="top"
                src={cssThumbnail}
              />
              <Card.Body>
                <Card.Text className="cardText text-dark text-center">
                  CSS Grid Layout Transform Transition Positon
                </Card.Text>
                <div className="text-center">
                  <Button
                    onClick={css}
                    size="sm"
                    variant="secondary"
                  >
                    Details
                  </Button>
                </div>
              </Card.Body>
              <Card.Footer className="text-secondary text-center">
                <small>09 / 21 / 2021</small>
              </Card.Footer>
            </Card>
          </Col>
          {/* Javascript  */}
          <Col className="d-flex align-items-stretch" xl={3} lg={3} sm={12}>
            <Card className="shadow">
              <Card.Img
                width="230"
                height="230"
                variant="top"
                src={jsThumbnail}
              />
              <Card.Body>
                <Card.Text className="cardText text-dark text-center">
                  Few Javascript Concepts Let's Check Them Out
                </Card.Text>
                <div className="text-center">
                  <Button
                    onClick={js}
                    size="sm"
                    variant="secondary"
                  >
                    Details
                  </Button>
                </div>
              </Card.Body>
              <Card.Footer className="text-secondary text-center">
                <small>11 / 15 / 2021</small>
              </Card.Footer>
            </Card>
          </Col>
          {/* ES6  */}
          <Col className="d-flex align-items-stretch" xl={3} lg={3} sm={12}>
            <Card className="shadow">
              <Card.Img
                width="230"
                height="230"
                variant="top"
                src={es6Thumbnail}
              />
              <Card.Body>
                <Card.Text className="cardText text-dark text-center">
                  Interesting Javascript ES6 Concepts And Methods
                </Card.Text>
                <div className="text-center">
                  <Button
                    onClick={es6}
                    size="sm"
                    variant="secondary"
                  >
                    Details
                  </Button>
                </div>
              </Card.Body>
              <Card.Footer className="text-secondary text-center">
                <small>12 / 15 / 2021</small>
              </Card.Footer>
            </Card>
          </Col>
          {/* React  */}
          <Col className="d-flex align-items-stretch" xl={3} lg={3} sm={12}>
            <Card className="shadow">
              <Card.Img
                width="230"
                height="230"
                variant="top"
                src={reactThumbnail}
              />
              <Card.Body>
                <Card.Text className="cardText text-dark text-center">
                  Most Important React Basic Concepts We Should Know
                </Card.Text>
                <div className="text-center">
                  <Button
                    onClick={react}
                    size="sm"
                    variant="secondary"
                  >
                    Details
                  </Button>
                </div>
              </Card.Body>
              <Card.Footer className="text-secondary text-center">
                <small>12 / 22 / 2021</small>
              </Card.Footer>
            </Card>
          </Col>
          {/* Backend  */}
          <Col className="d-flex align-items-stretch" xl={3} lg={3} sm={12}>
            <Card className="shadow">
              <Card.Img
                width="230"
                height="230"
                variant="top"
                src={backendThumbnail}
              />
              <Card.Body>
                <Card.Text className="cardText text-dark text-center">
                  Some Basic Web Database Concepts And Terms
                </Card.Text>
                <div className="text-center">
                  <Button
                    onClick={mongo}
                    size="sm"
                    variant="secondary"
                  >
                    Details
                  </Button>
                </div>
              </Card.Body>
              <Card.Footer className="text-secondary text-center">
                <small>12 / 24 / 2021</small>
              </Card.Footer>
            </Card>
          </Col>
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
