import React from "react";
import { URL_API, API } from "../utils/constants";
import MoviesTemplate from "../components/MoviesTemplate";

export default function NewMovies() {
  const url = `${URL_API}/movie/now_playing?api_key=${API}&language=es-ES`;
  const title = "Ultimos Lanzamientos";

  return <MoviesTemplate url={url} title={title} />;
}
