import styled from "styled-components";
import React, { useState, useEffect } from "react";
import useFetchPeliculas from "../hooks/useFetchPeliculas";
import useFetchSeries from "../hooks/useFetchSeries";
import Card from "../commons/Card";

const StyledSection = styled.section`
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const URL_SERIES_TENDENCIAS =
  "https://api.themoviedb.org/3/trending/tv/week?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const URL_PELICULAS_TENDENCIA =
  "https://api.themoviedb.org/3/trending/movie/week?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const Home = () => {
  const peliculasTendencia = useFetchPeliculas(URL_PELICULAS_TENDENCIA);
  const destacadasPelisTendencia = peliculasTendencia.slice(0, 5);

  const seriesTendencias = useFetchSeries(URL_SERIES_TENDENCIAS);
  const destacadasSeriesTendencia = seriesTendencias.slice(0, 5);

  console.log(destacadasPelisTendencia, destacadasSeriesTendencia)
  return (
    <>
      <StyledSection>
        <h3>Peliculas que son tendencia</h3>
        <Container>
          {destacadasPelisTendencia.map((pelicula) => (
            <Card title={pelicula.title} />
          ))}
        </Container>
      </StyledSection>
      <StyledSection>
        <h3>Series que son tendencia</h3>
        <Container>
          {destacadasSeriesTendencia.map((serie) => (
            <Card title={serie.name} />
          ))}
        </Container>
      </StyledSection>
    </>
  );
};

export default Home;
