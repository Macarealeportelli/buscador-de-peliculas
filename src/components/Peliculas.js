import React, { useState, useEffect } from "react";
import Card from "../commons/Card.js";
import styled from "styled-components";
import useFetchPeliculas from "../hooks/useFetchPeliculas";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const StyledSection = styled.section`
  padding: 20px;
  background-color: grey;
  display: flex;
  flex-direction: column;
  color: #fafafa;
`;
const Titulo = styled.h2`
  font-family: "Montserrat Alternates";
  font-size: 30px;
  font-weight: 800;

  display: flex;
`;

const ContenedorTarjetas = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Icono = styled.span`
  margin-left: 10px;
`;

const URL_PELICULAS_POPULARES =
  "https://api.themoviedb.org/3/tv/popular?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const URL_PELICULAS_A_ESTRENAR =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const URL_PELICULAS_EN_CINES =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const URL_PELICULAS_MEJORES_CRITICAS =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const Peliculas = () => {
  const peliculasPopulares = useFetchPeliculas(URL_PELICULAS_POPULARES);
  const destacadasPeliculasPopulares = peliculasPopulares.slice(0, 5);

  const peliculasAEstrenar = useFetchPeliculas(URL_PELICULAS_A_ESTRENAR);
  const destacadasPeliculasAEstrenar = peliculasAEstrenar.slice(0, 5);

  const peliculasEnCines = useFetchPeliculas(URL_PELICULAS_EN_CINES);
  const destacadasPeliculasEnCines = peliculasEnCines.slice(0, 5);

  const peliculasMejoresCriticas = useFetchPeliculas(URL_PELICULAS_MEJORES_CRITICAS);
  const destacadasPeliculasMejoresCriticas = peliculasMejoresCriticas.slice(0,5);

  return (
    <>
      <StyledSection>
        <Titulo>
          Películas populares
          <Icono>
            <FontAwesomeIcon icon={faArrowRight} />
          </Icono>
        </Titulo>
        <ContenedorTarjetas>
          {destacadasPeliculasPopulares.map((pelicula) => (
            <Card title={pelicula.title} poster_path={pelicula.poster_path} />
          ))}
        </ContenedorTarjetas>
      </StyledSection>
      <StyledSection>
        <Titulo>
          Películas con mejores críticas
          <Icono>
            <FontAwesomeIcon icon={faArrowRight} />
          </Icono>
        </Titulo>
        <ContenedorTarjetas>
          {destacadasPeliculasMejoresCriticas.map((pelicula) => (
            <Card title={pelicula.title} poster_path={pelicula.poster_path} />
          ))}
        </ContenedorTarjetas>
      </StyledSection>
      <StyledSection>
        <Titulo>
          Películas a estrenar
          <Icono>
            <FontAwesomeIcon icon={faArrowRight} />
          </Icono>
        </Titulo>
        <ContenedorTarjetas>
          {destacadasPeliculasAEstrenar.map((pelicula) => (
            <Card title={pelicula.title} poster_path={pelicula.poster_path} />
          ))}
        </ContenedorTarjetas>
      </StyledSection>
      <StyledSection>
        <Titulo>
          Películas en cines
          <Icono>
            <FontAwesomeIcon icon={faArrowRight} />
          </Icono>
        </Titulo>
        <ContenedorTarjetas>
          {destacadasPeliculasEnCines.map((pelicula) => (
            <Card title={pelicula.title} poster_path={pelicula.poster_path} />
          ))}
        </ContenedorTarjetas>
      </StyledSection>
    </>
  );
};
export default Peliculas;
