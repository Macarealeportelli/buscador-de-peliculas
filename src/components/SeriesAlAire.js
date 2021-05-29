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

const URL_SERIES_AL_AIRE =
  "https://api.themoviedb.org/3/tv/on_the_air?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1";

const SeriesAlAire=()=>{

const seriesAlAire = useFetchSeries(URL_SERIES_AL_AIRE);

    return (
        <StyledSection>
        
        <Titulo>
          Series populares
         
        </Titulo>
      
      <Container>
        {seriesAlAire.map((serie) => (
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

export default SeriesAlAire;