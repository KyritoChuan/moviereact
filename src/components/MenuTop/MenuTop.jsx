import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/img/logo.svg";

import "./MenuTop.scss";

export default function MenuTop() {
  return (
    <div className="menu-top">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <img src={Logo} alt="logo" width="40" className="menu-top__logo" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/new-movies">Estrenos Cartelera</Nav.Link>
            <Nav.Link href="/popular">Peliculas Populares</Nav.Link>
            <Nav.Link href="/search">Buscador</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
