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
  font-weight: 500;
`;

const ContenedorTarjetas = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const URL_PELICULAS_POPULARES =
  "https://api.themoviedb.org/3/tv/popular?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const URL_PELICULAS_A_ESTRENAR =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const Peliculas = () => {
  const peliculasPopulares = useFetchPeliculas(URL_PELICULAS_POPULARES);
  const destacadasPeliculasPopulares = peliculasPopulares.slice(0, 5);

  const peliculasAEstrenar = useFetchPeliculas(URL_PELICULAS_A_ESTRENAR);
  const destacadasPeliculasAEstrenar = peliculasAEstrenar.slice(0, 5);
  //   const peliculasPuntuadas = useFetchPeliculas(URL_PELICULAS_PUNTUADAS);
  //   const ultimosLanzamientos = useFetchPeliculas(URL_PELICULAS_ULTIMAS);

  return (
    <>
      <StyledSection>
        <Titulo>
          Películas populares
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Titulo>
        <ContenedorTarjetas>
          {destacadasPeliculasPopulares.map((pelicula) => (
            <Card title={pelicula.title} />
          ))}
        </ContenedorTarjetas>
      </StyledSection>
      <StyledSection>
        <div>
          {" "}
          <Titulo>
            Películas con mejores críticas{" "}
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Titulo>
        </div>
      </StyledSection>
      <StyledSection>
        <Titulo>
          Películas a estrenarse
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Titulo>
        <ContenedorTarjetas>
          {destacadasPeliculasAEstrenar.map((pelicula) => (
            <Card title={pelicula.title} />
          ))}
        </ContenedorTarjetas>
      </StyledSection>
      <StyledSection>
        <div>
          {" "}
          <Titulo>
            Películas en cines{" "}
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Titulo>
        </div>
      </StyledSection>
    </>
  );
};
export default Peliculas;
