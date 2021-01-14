import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <Container>
      <Row>
        <Col style={{ textAlign: "center", marginTop: 25 }}>
          <h1 style={{ fontSize: 35, fontWeight: "bold" }}>Error 404</h1>
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center", marginTop: 25 }}>
          <h2>Página no encontrada</h2>
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center", marginTop: 25 }}>
          <Link to="/">
            <h3>Volver al inicio</h3>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
