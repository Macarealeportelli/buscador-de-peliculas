import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import Card from "./Card";

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

const Reparto = () => {
  const { mediaType, id } = useParams();

  const [reparto, setReparto] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=e5c6d9951e2100ef1ce53ed994481153&language=es-ES`
    )
      .then((res) => res.json())

      .then((data) => setReparto(data.cast));
  }, []);

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
  );
};

export default Reparto;
