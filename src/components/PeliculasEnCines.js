import Card from "../commons/Card.js";
import styled from "styled-components";
import useFetchTarjetas from "../hooks/useFetchTarjetas";

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

const StyledSection = styled.section`
  padding: 20px;
  background-color: rgb(35, 39, 42);
  display: flex;
  flex-direction: column;
  color: #fafafa;
`;

const ContenedorTarjetas = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const URL_PELICULAS_EN_CINES =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const PeliculasEnCines = () => {
  const peliculasEnCines = useFetchTarjetas(URL_PELICULAS_EN_CINES);

  return (
    <StyledSection>
      <Titulo>Películas en cines</Titulo>
      <ContenedorTarjetas>
        {peliculasEnCines.map((pelicula) => (
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
  );
};

export default PeliculasEnCines;
