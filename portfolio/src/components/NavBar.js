// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../styles/App.css'; // Asegúrate de importar los estilos

function NavBar({ isDarkMode, toggleColorMode }) {
  return (
    <Navbar className="navbar-custom z-3" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto text-black">
          <Nav.Link as={Link} to="/home" className={`navbar-link ${isDarkMode ? "text-white" : "text-black"}`}>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className={`navbar-link ${isDarkMode ? "text-white" : "text-black"}`}>About</Nav.Link>
          <Nav.Link as={Link} to="/projects" className={`navbar-link ${isDarkMode ? "text-white" : "text-black"}`}>Projects</Nav.Link>
        </Nav>
        <Button onClick={toggleColorMode} variant="outline-light">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;
