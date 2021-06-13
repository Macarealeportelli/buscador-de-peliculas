import Card from "../commons/Card.js";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useFetchTarjetas from "../hooks/useFetchTarjetas";

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

const Icono = styled.span`
  margin-left: 10px;
  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 575.98px) {
    font-size: 10px;
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

const URL_PELICULAS_POPULARES =
  "https://api.themoviedb.org/3/movie/popular?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const URL_PELICULAS_A_ESTRENAR =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const URL_PELICULAS_EN_CINES =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const URL_PELICULAS_MEJORES_CRITICAS =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const Peliculas = () => {
  const peliculasPopulares = useFetchTarjetas(URL_PELICULAS_POPULARES);
  const destacadasPeliculasPopulares = peliculasPopulares.slice(0, 5);

  const peliculasAEstrenar = useFetchTarjetas(URL_PELICULAS_A_ESTRENAR);
  const destacadasPeliculasAEstrenar = peliculasAEstrenar.slice(0, 5);

  const peliculasEnCines = useFetchTarjetas(URL_PELICULAS_EN_CINES);
  const destacadasPeliculasEnCines = peliculasEnCines.slice(0, 5);

  const peliculasMejoresCriticas = useFetchTarjetas(
    URL_PELICULAS_MEJORES_CRITICAS
  );
  const destacadasPeliculasMejoresCriticas = peliculasMejoresCriticas.slice(
    0,
    5
  );

  return (
    <>
      <StyledSection>
        <StyledLink to="/peliculas-populares">
          {" "}
          <Titulo>
            Películas populares
            <Icono>
              <FontAwesomeIcon icon={faArrowRight} />
            </Icono>
          </Titulo>{" "}
        </StyledLink>
        <ContenedorTarjetas>
          {destacadasPeliculasPopulares.map((pelicula) => (
            <Card
              key={pelicula.id}
              title={pelicula.title}
              poster_path={pelicula.poster_path}
              id={pelicula.id}
              mediaType={"movie"}
            />
          ))}
        </ContenedorTarjetas>
      </StyledSection>
      <StyledSection>
        <StyledLink to="/peliculas-mejores-criticas">
          <Titulo>
            Películas con mejores críticas
            <Icono>
              <FontAwesomeIcon icon={faArrowRight} />
            </Icono>
          </Titulo>{" "}
        </StyledLink>
        <ContenedorTarjetas>
          {destacadasPeliculasMejoresCriticas.map((pelicula) => (
            <Card
              key={pelicula.id}
              title={pelicula.title}
              poster_path={pelicula.poster_path}
              id={pelicula.id}
              mediaType={"movie"}
            />
          ))}
        </ContenedorTarjetas>
      </StyledSection>
      <StyledSection>
        <StyledLink to="/peliculas-a-estrenar">
          {" "}
          <Titulo>
            Películas a estrenar
            <Icono>
              <FontAwesomeIcon icon={faArrowRight} />
            </Icono>
          </Titulo>{" "}
        </StyledLink>
        <ContenedorTarjetas>
          {destacadasPeliculasAEstrenar.map((pelicula) => (
            <Card
              key={pelicula.id}
              title={pelicula.title}
              poster_path={pelicula.poster_path}
              id={pelicula.id}
              mediaType={"movie"}
            />
          ))}
        </ContenedorTarjetas>
      </StyledSection>
      <StyledSection>
        <StyledLink to="/peliculas-en-cines">
          <Titulo>
            Películas en cines
            <Icono>
              <FontAwesomeIcon icon={faArrowRight} />
            </Icono>
          </Titulo>{" "}
        </StyledLink>
        <ContenedorTarjetas>
          {destacadasPeliculasEnCines.map((pelicula) => (
            <Card
              key={pelicula.id}
              title={pelicula.title}
              poster_path={pelicula.poster_path}
              id={pelicula.id}
              mediaType={"movie"}
            />
          ))}
        </ContenedorTarjetas>
      </StyledSection>
    </>
  );
};
export default Peliculas;
