import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../Header/Header.css";

const Header = () => {
  return (
    <div className="mt-3">
      <Navbar
        className="nav-radius"
        collapseOnSelect
        expand="lg"
        bg="secondary"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto p-4">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>              
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
