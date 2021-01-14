import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Footer";
import Loading from "../Loading";
import MovieCatalog from "../MovieCatalog";
import Pagination from "../Pagination";

export default function MoviesTemplate(props) {
  const { url, title } = props;
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  
  useEffect(() => {
    (async () => {
      debugger;
      const response = await fetch(url + `&page=${page}`);
      const movies = await response.json();
      setMovieList(movies);
    })();
  }, [page, url]);

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col style={{ textAlign: "center", marginTop: 25 }}>
            <h1 style={{ fontSize: 35, fontWeight: "bold" }}>{title}</h1>
          </Col>
        </Row>
        {movieList.results ? (
          <>
            <Row>
              <MovieCatalog movies={movieList} />
            </Row>
            <Row>
              <Col>
                <Pagination
                  currentPage={movieList.page}
                  totalItems={movieList.total_results}
                  onChangePage={onChangePage}
                />
              </Col>
            </Row>
          </>
        ) : (
          <Col>
            <Loading />
          </Col>
        )}
      </Container>
      <Footer />
    </div>
  );
}
