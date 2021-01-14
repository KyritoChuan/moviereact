import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import Loading from "../Loading";

import "./MovieList.scss";

export default function MovieList(props) {
  const { title, movies } = props;

  if (movies.loading || !movies.result) {
    return <Loading />;
  }
  return (
    <ListGroup className="movie-list">
      <ListGroup.Item as="div" className="movie-list__header">
        <h4>{title}</h4>
      </ListGroup.Item>
      <div className="movie-list__items">
        {movies.result.results.map((movie) => (
          <RenderMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </ListGroup>
  );
}

function RenderMovie(props) {
  const {
    movie: { id, title, poster_path },
  } = props;

  const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;

  return (
    <ListGroup.Item className="movie-item" as="li">
      <div className="movie-item__meta">
        <span className="movie-item__meta__avatar">
          <img src={posterPath} alt={title} />
        </span>
        <h5 className="movie-item__meta__title">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h5>
      </div>
      <Link to={`/movie/${id}`}>
        <Button type="primary" className="movie-item__button-circle">
          <RightOutlined />
        </Button>
      </Link>
    </ListGroup.Item>
  );
}
