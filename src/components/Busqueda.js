import { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../commons/Card";

import { useParams } from "react-router-dom";

const Titulo = styled.h2`
  font-family: "Montserrat Alternates";
  font-size: 30px;
  font-weight: 800;

  display: flex;
  align-items: center;
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

const Busqueda = () => {
  const params = useParams();

  const valorBuscado = params.valorDelInput;

  console.log(valorBuscado);

  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=e5c6d9951e2100ef1ce53ed994481153&language=es-ES&query=${valorBuscado}&page=1
    `)
      .then((res) => res.json())
      .then((data) => setResultados(data.results));
  }, [valorBuscado]);

  return (
    <>
      <StyledSection>
        <Titulo>Resultados para la Búsqueda: {valorBuscado}</Titulo>

        <Container>
          {resultados.map((elemento) => (
            <Card
              key={elemento.id}
              title={elemento.title ? elemento.title : elemento.name}
              poster_path={
                elemento.poster_path
                  ? elemento.poster_path
                  : elemento.profile_path
              }
              id={elemento.id}
              mediaType={elemento.media_type}
            />
          ))}
        </Container>
      </StyledSection>
    </>
  );
};

export default Busqueda;
