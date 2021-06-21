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

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 575.98px) {
    font-size: 15px;
  }
`;

const StyledSection = styled.section`
  width: 100%;
  padding: 10px;
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

  // preferi desestructurar: const { valorDelInput: valorBuscado } = params
  const valorBuscado = params.valorDelInput;
// no dejes console log en entregas
  console.log(valorBuscado);

  const [resultados, setResultados] = useState([]);
// aca podrias haber usado useFetchTarjetas
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
