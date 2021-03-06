import { Link } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router";
import Rating from "./Rating";
import useFetch from "../hooks/useFetch";

const ContenedorGeneral = styled.div`
  width: 80%;
  margin: 10px;
  display: flex;
  justify-content: space-between;

  font-family: "Montserrat Alternates";
  font-size: 14px;

  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    font-size: 11px;
    
  }

  @media (max-width: 575.98px) {
    
    flex-direction: column;
  }
`;

const Imagen = styled.img`
  width: 100%;
`;

const Contenedor = styled.div`
  width: 100%;
  
  max-width: 250px;
  margin: 15px;

  display: flex;
  justify-content: center;

  flex-direction: column;

  @media (min-width: 768px) and (max-width: 991.98px) {
    min-width: 200px;
  }
  @media (max-width: 575.98px) {
    
    min-width: 150px;
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

const Info = () => {
  const { mediaType, id } = useParams();

  const URL_INFO = `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=e5c6d9951e2100ef1ce53ed994481153&language=es-ES`;

  const detalles = useFetch(URL_INFO);

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

  return (
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
        <p>
          Duraci??n:{" "}
          {detalles.runtime ? detalles.runtime : detalles.episode_run_time} min.
        </p>
        <p>G??neros: {generos(detalles)} </p>
        {detalles.budget ? (
          <p>Presupuesto:{" " + "$" + detalles.budget.toLocaleString()} </p>
        ) : (
          <p>Temporadas:{" " + detalles.number_of_seasons} </p>
        )}

        {detalles.revenue ? (
          <p>Recaudaci??n:{" " + "$" + detalles.revenue.toLocaleString()}</p>
        ) : (
          <p>Episodios:{" " + detalles.number_of_episodes} </p>
        )}

        <p>Producci??n: {producciones(detalles)}</p>
        
      </div>
    </ContenedorGeneral>
  );
};

export default Info;
