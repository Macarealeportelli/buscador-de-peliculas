import styled from "styled-components";

import Card from "../commons/Card";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useFetchTarjetas from "../hooks/useFetchTarjetas";

const StyledSection = styled.section`
  width: 100%;
  padding: 10px;
  background-color:rgb(35, 39, 42);
  display: flex;
  flex-direction: column;
  color: #fafafa;
`;

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const Icono = styled.span`
  margin-left: 10px;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 575.98px) {
    font-size: 10px;
  }

`;

const Titulo = styled.h2`
  font-family: "Montserrat Alternates";
  font-size: 30px;
  font-weight: 800;

  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 575.98px) {
    font-size: 15px;
  }
`;

const StyledLink = styled(Link)`
  margin: 20px;
  text-decoration: none;
  color: #fafafa;
  &:visited {
    color: #fafafa;
  }
  &:active {
    color: rgb(33, 150, 243);
  }
`;

const URL_SERIES_TENDENCIAS =
  "https://api.themoviedb.org/3/trending/tv/week?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const URL_PELICULAS_TENDENCIA =
  "https://api.themoviedb.org/3/trending/movie/week?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const Home = () => {
  const peliculasTendencia = useFetchTarjetas(URL_PELICULAS_TENDENCIA);
  const destacadasPelisTendencia = peliculasTendencia.slice(0, 5);

  const seriesTendencias = useFetchTarjetas(URL_SERIES_TENDENCIAS);
  const destacadasSeriesTendencia = seriesTendencias.slice(0, 5);

  return (
    <>
      <StyledSection>

      Podrias componentizar aca, repetis dos veces casi lo mismo en el codigo. 
        <StyledLink to="/peliculas-tendencias">
          <Titulo>
            Peliculas que son tendencia
            <Icono>
              <FontAwesomeIcon icon={faArrowRight} />
            </Icono>
          </Titulo>
        </StyledLink>
        <Container>
          {destacadasPelisTendencia.map((pelicula) => (
            <Card
              key={pelicula.id}
              title={pelicula.title}
              poster_path={pelicula.poster_path}
              id={pelicula.id}
              mediaType={pelicula.media_type}
            />
          ))}
        </Container>
      </StyledSection>
      <StyledSection>
        <StyledLink to="/series-tendencias">
          <Titulo>
            Series que son tendencia
            <Icono>
              <FontAwesomeIcon icon={faArrowRight} />
            </Icono>
          </Titulo>
        </StyledLink>
        <Container>
          {destacadasSeriesTendencia.map((serie) => (
            <Card
              key={serie.id}
              title={serie.name}
              poster_path={serie.poster_path}
              id={serie.id}
              mediaType={serie.media_type}
            />
          ))}
        </Container>
      </StyledSection>
    </>
  );
};

export default Home;
