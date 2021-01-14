import React, { useState } from "react";
import { Button, Carousel, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../Loading";

import "./SliderMovies.scss";

export default function SliderMovies(props) {
  const { movies } = props;
  const [carrouselMov, setcarrouselMov] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setcarrouselMov(selectedIndex);
  };

  if (movies.loading || !movies.result) {
    return <Loading />;
  }

  const { results } = movies.result;

  return (
    <Carousel
      activeIndex={carrouselMov}
      onSelect={handleSelect}
      className="slider-movies"
    >
      {results.map((movie) => (
        <Carousel.Item key={movie.id}>
          <Movie movie={movie} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

function Movie(props) {
  const {
    movie: { id, backdrop_path, title, overview },
  } = props;
  const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <div className="slider-movies__movie">
      <div
        className="slider-movies__movie"
        style={{ backgroundImage: `url('${backdropPath}')` }}
      >
        <div className="slider-movies__movie-info">
          <Container>
            <Row>
              <Col xl={12}>
                <h2>{title}</h2>
              </Col>
              <Col xl={12}>
                <p className="movie-info-overview">{overview}</p>
              </Col>
              <Col xl={12}>
                <Link to={`/movie/${id}`}>
                  <Button variant="primary">Ver más</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
