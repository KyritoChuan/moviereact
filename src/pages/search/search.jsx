import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import MovieCatalog from "../../components/MovieCatalog";
import Footer from "../../components/Footer";
import { URL_API, API } from "../../utils/constants";

import "./search.scss";

function Search(props) {
  const { location, history } = props;
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const searchValue = queryString.parseUrl(location.search);
    const { s } = searchValue.query;
    setSearchValue(s);
  }, [location.search]);

  useEffect(() => {
    if(movieList.length == 0) {
      if(searchValue == "") {
        document.getElementById("lblError").textContent = "";
      } else {
        document.getElementById("lblError").textContent =
        "No se ha ingresado ninguna referencia a la busqueda.";
        setSearchValue("");
      }
    }
  }, [movieList]);

  const onChangeSearch = (e) => {
    const urlParams = queryString.parse(location.search);
    urlParams.s = e.target.value;
    history.push(`?${queryString.stringify(urlParams)}`);
    setSearchValue(e.target.value);
  };

  const searchMovie = () => {
    const s = searchValue;
    debugger;
    // eslint-disable-next-line
    if (s.trim() != undefined && s.trim() != "") {
      (async () => {
        const response = await fetch(
          `${URL_API}/search/movie?api_key=${API}&language=es-ES&query=${s}&page=1`
        );
        const movies = await response.json();
        setSearchValue(s);
        setMovieList(movies);
      })();
    
    } else {
      setSearchValue(" ");
      setMovieList("");
    }
  };

  return (
    <>
      <Container fluid className="search">
        <Row>
          <Col style={{ textAlign: "center", marginTop: 25 }}>
            <h1 style={{ fontSize: 35, fontWeight: "bold" }}>
              Busca tu película
            </h1>
          </Col>
        </Row>
        <Form.Group>
          <Row className="search__form">
            <Col xs={12} md={{ span: 4, offset: 3 }}>
              <Form.Control
                type="text"
                name="name"
                placeholder="Escribe el nombre de tu pelicula."
                value={searchValue}
                onChange={onChangeSearch}
              />
            </Col>
            <Col xs={4} style={{ padding: 10 }}>
              <Button
                className="search__form__button"
                type="primary"
                onClick={searchMovie}
              >
                Buscar
              </Button>
            </Col>
          </Row>
        </Form.Group>
        <Row>
          {
            // eslint-disable-next-line
            movieList.length != 0 ? (
              <MovieCatalog movies={movieList} />
            ) : (
              <Col md={{ span: 6, offset: 3 }}>
                <h2 id="lblError">{}</h2>
              </Col>
            )
          }
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default withRouter(Search);
