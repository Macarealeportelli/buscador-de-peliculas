import { useEffect, useState } from "react";
import { useParams , Link } from "react-router-dom";

import styled from "styled-components";
import Card from "./Card";

const BarraNavegacion = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
  padding: 10px;

  font-family: "Montserrat Alternates";
  font-size: 18px;
  font-weight: 900;

  background-color: rgb(35, 39, 42);
  color: #fafafa;

  display: flex;
  align-items: center;
  justify-content: center;
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
    border-bottom: 2px solid #fafafa;
  }
`;

const StyledSection = styled.section`
  background-color: rgb(35, 39, 42);
  display: flex;
  flex-direction: column;
  color: #fafafa;
`;

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
`;





const Reparto =()=>{
    const { mediaType, id } = useParams();

    const [reparto, setReparto] = useState([]);
  
    useEffect(() => {
      fetch(
          `https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=e5c6d9951e2100ef1ce53ed994481153&language=es-ES`
        
      )
        .then((res) => res.json())
        
        .then((data) =>
        // console.log(data.cast)
          setReparto(data.cast)
        );
    }, []);
  
    // console.log(detalles)
  

    return (
        <StyledSection>
      

<Container>
          {reparto.map((persona) => (
            <Card
              key={persona.id}
              title={persona.name}
              character={persona.character}
              poster_path={persona.profile_path}
              id={persona.id}
              mediaType={persona.media_type}
            />
          ))}
        </Container>
        </StyledSection>
    )
}

export default Reparto;