import React, { useEffect } from "react";
import "../Blogs/Blogs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import cssThumbnail from "../Blogs/Css/css_img/css_thumbnail.png";

const Blogs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
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
      <Container className="px-5">
        <Row>
          <Col xl={3} lg={3} sm={12}>
            <Card>
              <Card.Img variant="top" src={cssThumbnail} />
              <Card.Body>
                <Card.Title className="text-dark text-center">
                  Card title
                </Card.Title>
                <Card.Text className="text-dark text-center">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button size="sm" variant="secondary">
                  Details
                </Button>
              </Card.Body>
              <Card.Footer className="text-secondary text-center">
                <small>12 / 21 / 2021</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* footer */}
      <div>
        <hr className="new mt-5" />
        <p className="mt-2 text-secondary text-center text-uppercase">
          Avishek Ataur
        </p>
      </div>
    </div>
  );
};

export default Blogs;
