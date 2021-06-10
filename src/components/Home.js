import styled from "styled-components";
import useFetchPeliculas from "../hooks/useFetchPeliculas";
import useFetchSeries from "../hooks/useFetchSeries";
import Card from "../commons/Card";

import { Link } from "react-router-dom";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const StyledSection = styled.section`
  padding: 20px;
  background-color: rgb(35, 39, 42);
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
`;

const Titulo = styled.h2`
  font-family: "Montserrat Alternates";
  font-size: 30px;
  font-weight: 800;

  display: flex;
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
  const peliculasTendencia = useFetchPeliculas(URL_PELICULAS_TENDENCIA);
  const destacadasPelisTendencia = peliculasTendencia.slice(0, 5);
  console.log(peliculasTendencia)

  const seriesTendencias = useFetchSeries(URL_SERIES_TENDENCIAS);
  const destacadasSeriesTendencia = seriesTendencias.slice(0, 5);

  return (
    <>
      <StyledSection>
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
            />
          ))}
        </Container>
      </StyledSection>
    </>
  );
};

export default Home;
