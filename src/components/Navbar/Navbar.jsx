import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top" className={styles.navbar}>
      <Navbar.Brand
        href="#"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Pub Name
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            href="#about-us"
            onClick={() => scrollToSection("about-us")}
          >
            About Us
          </Nav.Link>
          <Nav.Link href="#menu" onClick={() => scrollToSection("menu")}>
            Menu
          </Nav.Link>
          <Nav.Link
            href="#contact-details"
            onClick={() => scrollToSection("contact-details")}
          >
            Contact Details
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
