import React from "react";
import { URL_API, API } from "../utils/constants";
import MoviesTemplate from "../components/MoviesTemplate";

export default function Popular() {
  const url = `${URL_API}/movie/popular?api_key=${API}&language=es-ES`;
  const title = "Peliculas Populares";

  return <MoviesTemplate url={url} title={title} />;
}
