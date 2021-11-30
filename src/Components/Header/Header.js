import React from "react";
import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import "../Header/Header.css";

const Header = () => {
  return (
    <div>
      <Navbar className="nav-radius" collapseOnSelect expand="lg" bg="white">
        <Container className="p-4 mt-1">
          <Navbar.Brand className="mt-2" href="#home">
            <h4>Avishek Ataur</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                activeClassName="navs-active"
                className="navs me-3 text-decoration-none"
                to="/aboutme"
              >
                About Me
              </NavLink>

              <NavLink
                activeClassName="navs-active"
                className="navs me-3 text-decoration-none"
                to="/skills"
              >
                Skills
              </NavLink>

              <NavLink
                activeClassName="navs-active"
                className="navs me-3 text-decoration-none"
                to="/projects"
              >
                Projects
              </NavLink>

              <NavLink
                activeClassName="navs-active"
                className="navs me-3 text-decoration-none"
                to="/qualifications"
              >
                Qualifications
              </NavLink>

              <NavLink
                activeClassName="navs-active"
                className="navs me-3 text-decoration-none"
                to="/contactus"
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
