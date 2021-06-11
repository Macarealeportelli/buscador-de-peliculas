import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const StyledSection = styled.section`
  background-color: rgb(35, 39, 42);
  display: flex;
  flex-direction: column;
  color: #fafafa;
`;

const Imagen = styled.img`
  width: 100%;
`;

const ImagenBanner = styled.img`
  margin: 0;
  width: 100%;
`;

const Contenedor = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 15px;

  display: flex;
  justify-content: center;

  flex-direction: column;
`;

const ContenedorGeneral = styled.div`
  width: 80%;
  margin: 10px;
  display: flex;
  justify-content: space-between;

  font-family: "Montserrat Alternates";
  font-size: 14px;
`;

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

const StyledLinkDetalle = styled(Link)`
  margin: 5px;
  text-decoration: none;
  color: blue;
  &:visited {
    color: blue;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Parrafo = styled.p`
  margin-left: 5px;
`;

const Detalle = () => {

  const { mediaType, id } = useParams();

  const [detalles, setDetalles] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=e5c6d9951e2100ef1ce53ed994481153&language=es-ES`
    )
      .then((res) => res.json())
      
      .then((data) =>
        setDetalles(data)
      );
  }, []);

  const generos = (detalles) =>
    detalles.genres
      ? detalles.genres.map((genero) => (
          <StyledLinkDetalle
            to={`/${mediaType}/${genero.name}/${genero.id}/page/1`}
            key={genero.name}
          >
            {genero.name}
          </StyledLinkDetalle>
        ))
      : "-";

  const producciones = (detalles) =>
    detalles.production_companies
      ? detalles.production_companies.map((produccion) => (
          <span key={produccion.name}>{produccion.name} , </span>
        ))
      : "-";
  // console.log(generos(detalles))

  return (
    <>
      <StyledSection>
        <ImagenBanner
          src={`https://image.tmdb.org/t/p/w1280${detalles.backdrop_path}`}
        />
        <BarraNavegacion>
          <StyledLink to={`/${mediaType}/${id}/info`}>INFO</StyledLink>
          <StyledLink to={`/${mediaType}/${id}/cast`}>REPARTO</StyledLink>
          <StyledLink to={`/${mediaType}/${id}/video`}>VIDEOS</StyledLink>
          <StyledLink to={`/${mediaType}/${id}/similar`}>SIMILARES</StyledLink>
        </BarraNavegacion>

        <ContenedorGeneral>
          <Contenedor>
            <Imagen
              src={`https://image.tmdb.org/t/p/w300${detalles.poster_path}`}
            />
          </Contenedor>
          <div>
            <h2>{detalles.title}</h2>
            <FlexContainer>
              <Rating rating={detalles.vote_average} />{" "}
              <Parrafo>({detalles.vote_average})</Parrafo>{" "}
            </FlexContainer>
            <p>{detalles.overview}</p>
            <p>Duración: {detalles.runtime} min.</p>
            <p>Géneros: {generos(detalles)} </p>
            <p>
              Presupuesto:{" "}
              {detalles.budget ? "$" + detalles.budget.toLocaleString() : "-"}
            </p>
            <p>
              Recaudación:{" "}
              {detalles.revenue ? "$" + detalles.revenue.toLocaleString() : "-"}
            </p>
            <p>Producción: {producciones(detalles)}</p>
            <h5>Iconitos/links</h5>
          </div>
        </ContenedorGeneral>
      </StyledSection>
    </>
  );
};

export default Detalle;
