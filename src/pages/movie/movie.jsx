import React, { useState } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import moment from "moment";
import { PlayCircleFilled } from "@ant-design/icons";
import useFetch from "../../hooks/useFetch";
import { URL_API, API } from "../../utils/constants";
import Loading from "../../components/Loading";
import ModalVideo from "../../components/ModalVideo";

import "./movie.scss";

export default function Movie() {
  const { id } = useParams();
  const movieInfo = useFetch(
    `${URL_API}/movie/${id}?api_key=${API}&language=es-ES`
  );

  if (movieInfo.loading || !movieInfo.result) {
    return <Loading />;
  }

  return <RenderMovie movieInfo={movieInfo.result} />;
}

function RenderMovie(props) {
  const {
    movieInfo: { backdrop_path, poster_path },
  } = props;

  const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <Container
      fluid
      className="movie"
      style={{
        backgroundImage: `url('${backdropPath}')`,
      }}
    >
      <div className="movie__dark" />
      <Row className="movie__row">
        <Col lg={5} className="movie__poster">
          <PosterMovie image={poster_path} />
        </Col>
        <Col lg={6} className="movie__info">
          <MovieInfo movieInfo={props.movieInfo} />
        </Col>
      </Row>
    </Container>
  );
}

function PosterMovie(props) {
  const { image } = props;
  const posterPath = `https://image.tmdb.org/t/p/original${image}`;
  return <div style={{ backgroundImage: `url('${posterPath}')` }} />;
}

function MovieInfo(props) {
  const {
    movieInfo: { id, title, release_date, overview, genres },
  } = props;

  const [isVisibleModal, setisVisibleModal] = useState(false);
  const videoMovie = useFetch(
    `${URL_API}/movie/${id}/videos?api_key=${API}&language=es-ES`
  );

  const openModal = () => {
    setisVisibleModal(true);
  };
  const closeModal = () => {
    setisVisibleModal(false);
  };

  const renderVideo = () => {
    if (videoMovie.result) {
      if (videoMovie.result.results.length > 0) {
        return (
          <>
            <Button onClick={openModal}>
              <PlayCircleFilled />
              Ver Trailer
            </Button>
            <ModalVideo
              videoKey={videoMovie.result.results[0].key}
              videoPlatform={videoMovie.result.results[0].site}
              isOpen={isVisibleModal}
              close={closeModal}
            />
          </>
        );
      }
    }
  };

  return (
    <>
      <div className="movie__info-header">
        <Row>
          <Col xs={12}>
            <h1>
              {title}
              <span>{moment(release_date, "YYYY-MM-DD").format("YYYY")}</span>
            </h1>
          </Col>
          <Col xs={12}>{renderVideo()}</Col>
        </Row>
      </div>
      <div className="movie__info-content">
        <Row>
          <Col>
            <h3>Información General</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{overview}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Géneros</h3>
            <ul>
              {genres.map((gender) => (
                <li key={gender.id}>{gender.name}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
}
