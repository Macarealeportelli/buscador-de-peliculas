import { useState, useEffect } from 'react';
import styled from 'styled-components';



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

const Busqueda = ({value}) => {

    const valorBuscado = value

    const [busqueda, setBusqueda]= useState([]);

    useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US&page=1&include_adult=false`)
    .then((res)=> res.json())
    .then((data)=>console.log(data))
    },[valorBuscado]);






  return (
    <>
      <StyledSection>
        <Titulo>Resultados de la Búsqueda</Titulo>

        <Container>
          {/* {destacadasPelisTendencia.map((pelicula) => (
            <Card
              key={pelicula.id}
              title={pelicula.title}
              poster_path={pelicula.poster_path}
              id={pelicula.id}
              mediaType={pelicula.media_type}
            />
          ))} */}
        </Container>
      </StyledSection>
    </>
  );
};

export default Busqueda;
