import React from "react";
import { Spinner } from "react-bootstrap";

import "./Loading.scss";

export default function Loading() {
  return (
    <div className="loading">
      <Spinner animation="grow" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      <h2>Cargando...</h2>
    </div>
  );
}
