import styled from "styled-components";
import { useParams } from "react-router";

import useFetchTarjetas from "../hooks/useFetchTarjetas";
import Card from "./Card";

const ContenedorTarjetas = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledSection = styled.section`
  width: 100%;
  padding: 20px;
  background-color: rgb(35, 39, 42);
  display: flex;
  flex-direction: column;
  color: #fafafa;
`;

const Similares = () => {
  const { mediaType, id } = useParams();

  const URL_SIMILARES = `https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-EN&page=1`;

  const similares = useFetchTarjetas(URL_SIMILARES);

  return (
    <StyledSection>
      <ContenedorTarjetas>
        {similares.map((pelicula) => (
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

export default Similares;
