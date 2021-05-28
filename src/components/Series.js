import React, { useState, useEffect } from "react";
import Card from "../commons/Card.js";
import styled from "styled-components";
import useFetchSeries from "../hooks/useFetchSeries";

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
const URL_SERIES_POPULARES = "https://api.themoviedb.org/3/tv/popular?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1"

const URL_SERIES_MEJORES_CRITICAS = "https://api.themoviedb.org/3/tv/top_rated?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1"

const URL_SERIES_AL_AIRE = "https://api.themoviedb.org/3/tv/on_the_air?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1"

const Series = () => {

  const seriesPopulares = useFetchSeries(URL_SERIES_POPULARES);
const destacadasSeriesPopulares = seriesPopulares.slice(0,5);

  const seriesMejoresCriticas = useFetchSeries(URL_SERIES_MEJORES_CRITICAS);
  const destacadasSeriesMejoresCriticas = seriesMejoresCriticas.slice(0,5);

  const seriesAlAire = useFetchSeries(URL_SERIES_AL_AIRE);
  const destacadasSeriesAlAire = seriesAlAire.slice(0,5);
  

  return (
   <>
   <StyledSection>
        <Titulo>
          Series populares
          <Icono>
            <FontAwesomeIcon icon={faArrowRight} />
          </Icono>
        </Titulo>
        <ContenedorTarjetas>
          {destacadasSeriesPopulares.map((pelicula) => (
            <Card title={pelicula.title} poster_path={pelicula.poster_path} />
          ))}
        </ContenedorTarjetas>
      </StyledSection>
      <StyledSection>
        <Titulo>
          Series con Mejores Críticas
          <Icono>
            <FontAwesomeIcon icon={faArrowRight} />
          </Icono>
        </Titulo>
        <ContenedorTarjetas>
          {destacadasSeriesMejoresCriticas.map((pelicula) => (
            <Card title={pelicula.title} poster_path={pelicula.poster_path} />
          ))}
        </ContenedorTarjetas>
      </StyledSection>
      <StyledSection>
        <Titulo>
          Series al aire
          <Icono>
            <FontAwesomeIcon icon={faArrowRight} />
          </Icono>
        </Titulo>
        <ContenedorTarjetas>
          {destacadasSeriesAlAire.map((pelicula) => (
            <Card title={pelicula.title} poster_path={pelicula.poster_path} />
          ))}
        </ContenedorTarjetas>
      </StyledSection>
   </>
  );
};

export default Series;
