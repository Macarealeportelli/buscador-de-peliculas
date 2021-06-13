import Card from "../commons/Card.js";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useFetchTarjetas from "../hooks/useFetchTarjetas.js";

const StyledSection = styled.section`
  padding: 20px;
  background-color:rgb(35, 39, 42);
  display: flex;
  flex-direction: column;
  color: #fafafa;
`;
const Titulo = styled.h2`
  font-family: "Montserrat Alternates";
  font-size: 30px;
  font-weight: 800;

  display: flex;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 575.98px) {
    font-size: 15px;
  }
`;

const ContenedorTarjetas = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const Icono = styled.span`
  margin-left: 10px;
`;
const URL_SERIES_POPULARES =
  "https://api.themoviedb.org/3/tv/popular?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const URL_SERIES_MEJORES_CRITICAS =
  "https://api.themoviedb.org/3/tv/top_rated?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const URL_SERIES_AL_AIRE =
  "https://api.themoviedb.org/3/tv/on_the_air?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const Series = () => {
  const seriesPopulares = useFetchTarjetas(URL_SERIES_POPULARES);
  const destacadasSeriesPopulares = seriesPopulares.slice(0, 5);

  const seriesMejoresCriticas = useFetchTarjetas(URL_SERIES_MEJORES_CRITICAS);
  const destacadasSeriesMejoresCriticas = seriesMejoresCriticas.slice(0, 5);

  const seriesAlAire = useFetchTarjetas(URL_SERIES_AL_AIRE);
  const destacadasSeriesAlAire = seriesAlAire.slice(0, 5);

  return (
    <>
      <StyledSection>
        <StyledLink to="/series-populares">
          <Titulo>
            Series populares
            <Icono>
              <FontAwesomeIcon icon={faArrowRight} />
            </Icono>
          </Titulo>
        </StyledLink>
        <ContenedorTarjetas>
          {destacadasSeriesPopulares.map((serie) => (
            <Card
              key={serie.id}
              title={serie.name}
              poster_path={serie.poster_path}
              id={serie.id}
              mediaType={"tv"}
            />
          ))}
        </ContenedorTarjetas>
      </StyledSection>
      <StyledSection>
        <StyledLink to="/series-mejores-criticas">
          <Titulo>
            Series con Mejores Críticas
            <Icono>
              <FontAwesomeIcon icon={faArrowRight} />
            </Icono>
          </Titulo>
        </StyledLink>
        <ContenedorTarjetas>
          {destacadasSeriesMejoresCriticas.map((serie) => (
            <Card
              key={serie.id}
              title={serie.name}
              poster_path={serie.poster_path}
              id={serie.id}
              mediaType={"tv"}
            />
          ))}
        </ContenedorTarjetas>
      </StyledSection>
      <StyledSection>
        <StyledLink to="/series-al-aire">
          {" "}
          <Titulo>
            Series al aire
            <Icono>
              <FontAwesomeIcon icon={faArrowRight} />
            </Icono>
          </Titulo>
        </StyledLink>
        <ContenedorTarjetas>
          {destacadasSeriesAlAire.map((serie) => (
            <Card
              key={serie.id}
              title={serie.name}
              poster_path={serie.poster_path}
              id={serie.id}
              mediaType={"tv"}
            />
          ))}
        </ContenedorTarjetas>
      </StyledSection>
    </>
  );
};

export default Series;
