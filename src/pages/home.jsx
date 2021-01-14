import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useFetch from "../hooks/useFetch";
import { URL_API, API } from "../utils/constants";
import SliderMovies from "../components/SliderMovies";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

export default function Home() {
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API}&language=es&page=1`
  );

  const popularMovies = useFetch(
    `${URL_API}/movie/popular?api_key=${API}&language=es&page=1`
  );

  const topRatedMovies = useFetch(
    `${URL_API}/movie/top_rated?api_key=${API}&language=es&page=1`
  );

  return (
    <>
      <SliderMovies movies={newMovies} />
      <Container fluid>
        <Row>
          <Col>
            <MovieList title="Películas populares" movies={popularMovies} />
          </Col>
          <Col>
            <MovieList
              title="Top peliculas mejor valoradas"
              movies={topRatedMovies}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
