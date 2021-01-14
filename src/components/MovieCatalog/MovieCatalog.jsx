import React from "react";
import { Col, Card } from "react-bootstrap";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./MovieCatalog.scss";

export default function MovieCatalog(props) {
  const {
    movies: { results },
  } = props;

  return results.map((movie) => (
    <Col key={movie.id} lg={3} md={4} sm={5} className="movie-catalog">
      <MovieCard movie={movie} />
    </Col>
  ));
}

function MovieCard(props) {
  const {
    movie: { id, title, poster_path },
  } = props;
  const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;
  return (
    <Link to={`/movie/${id}`}>
      <Card style={{ width: 240 }}>
        <Card.Img variant="top" src={posterPath} />
        <Card.Title>
          <h5>{title}</h5>
        </Card.Title>
        <Card.Footer>
          <EyeOutlined />
        </Card.Footer>
      </Card>
    </Link>
  );
}
