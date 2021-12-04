import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "../Header/Header.css";
import logo from "../../Images/logo.png";
const Header = () => {
  return (
    <div>
      <Navbar className="nav-radius" collapseOnSelect expand="lg" bg="white">
        <Container className="p-4 mt-1">
          <Navbar.Brand className="d-flex align-items-center mt-2" href="#home">
            <div width="45" height="45">
              <img
                className="res-logo"
                width="45"
                height="45"
                src={logo}
                alt=""
              />
            </div>
            <span className="ms-2 res-logotitle text-dark">
              <strong>Avishek Ataur</strong>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                as={HashLink}
                activeclassname="navs-active"
                className="navs me-3 text-decoration-none"
                to="/home#aboutme"
              >
                About Me
              </NavLink>

              <NavLink
                as={HashLink}
                activeclassname="navs-active"
                className="navs me-3 text-decoration-none"
                to="/home#skills"
              >
                Skills
              </NavLink>

              <NavLink
                as={HashLink}
                activeclassname="navs-active"
                className="navs me-3 text-decoration-none"
                to="/home#projects"
              >
                Projects
              </NavLink>

              <NavLink
                as={HashLink}
                activeclassname="navs-active"
                className="navs me-3 text-decoration-none"
                to="/home#qualifications"
              >
                Qualifications
              </NavLink>

              <NavLink
                as={HashLink}
                activeclassname="navs-active"
                className="navs me-3 text-decoration-none"
                to="/blogs"
              >
                Blog
              </NavLink>

              <NavLink
                as={HashLink}
                activeclassname="navs-active"
                className="navs me-3 text-decoration-none"
                to="/home#contactme"
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
