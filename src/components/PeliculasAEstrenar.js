import Card from "../commons/Card.js";
import styled from "styled-components";
import useFetchPeliculas from "../hooks/useFetchPeliculas";

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

const URL_PELICULAS_A_ESTRENAR =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const PeliculasAEstrenar=()=>{
    const peliculasAEstrenar = useFetchPeliculas(URL_PELICULAS_A_ESTRENAR);

    return (
        <StyledSection>
        <Titulo>Películas a estrenar</Titulo>
        <ContenedorTarjetas>
          {peliculasAEstrenar.map((pelicula) => (
            <Card
              key={pelicula.id}
              title={pelicula.title}
              poster_path={pelicula.poster_path}
            />
          ))}
        </ContenedorTarjetas>
      </StyledSection>
    )
};

export default PeliculasAEstrenar;