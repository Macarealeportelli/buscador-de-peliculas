import Card from "../commons/Card.js";
import styled from "styled-components";
import useFetchSeries from "../hooks/useFetchSeries";


const Titulo = styled.h2`
  font-family: "Montserrat Alternates";
  font-size: 30px;
  font-weight: 800;

  display: flex;
`;

const StyledSection = styled.section`
  padding: 20px;
  background-color: grey;
  display: flex;
  flex-direction: column;
  color: #fafafa;
`;

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const URL_SERIES_POPULARES =
  "https://api.themoviedb.org/3/tv/popular?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";


const SeriesPopulares=()=>{
    const seriesPopulares = useFetchSeries(URL_SERIES_POPULARES)
    return (
        <StyledSection>
        
          <Titulo>
            Series populares
           
          </Titulo>
        
        <Container>
          {seriesPopulares.map((serie) => (
            <Card
              key={serie.id}
              title={serie.name}
              poster_path={serie.poster_path}
            />
          ))}
        </Container>
      </StyledSection>
    )
};

export default SeriesPopulares;