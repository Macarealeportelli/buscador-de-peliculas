import Card from "../commons/Card.js";
import styled from "styled-components";

import useFetchTarjetas from "../hooks/useFetchTarjetas";

const Titulo = styled.h2`
  font-family: "Montserrat Alternates";
  font-size: 30px;
  font-weight: 800;

  display: flex;
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

const URL_PELICULAS_MEJORES_CRITICAS =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const PeliculasMejoresCriticas=()=>{
    const peliculasMejoresCriticas = useFetchTarjetas(
        URL_PELICULAS_MEJORES_CRITICAS
      );
    return (
        <StyledSection>
        <Titulo>Películas con mejores críticas</Titulo>
        <ContenedorTarjetas>
          {peliculasMejoresCriticas.map((pelicula) => (
            <Card
              key={pelicula.id}
              title={pelicula.title}
              poster_path={pelicula.poster_path}
              id={pelicula.id}
              mediaType={'movie'}
            />
          ))}
        </ContenedorTarjetas>
      </StyledSection>
    )
};

export default PeliculasMejoresCriticas;
