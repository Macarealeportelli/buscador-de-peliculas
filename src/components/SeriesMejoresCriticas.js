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

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const URL_SERIES_MEJORES_CRITICAS =
  "https://api.themoviedb.org/3/tv/top_rated?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const SeriesMejoresCriticas = () => {
  const seriesMejoresCriticas = useFetchTarjetas(URL_SERIES_MEJORES_CRITICAS);
  return (
    <StyledSection>
      <Titulo>Series populares</Titulo>

      <Container>
        {seriesMejoresCriticas.map((serie) => (
          <Card
            key={serie.id}
            title={serie.name}
            poster_path={serie.poster_path}
            id={serie.id}
            mediaType={"tv"}
          />
        ))}
      </Container>
    </StyledSection>
  );
};

export default SeriesMejoresCriticas;
