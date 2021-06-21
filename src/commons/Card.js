import styled from "styled-components";
import { Link } from "react-router-dom";

const Tarjeta = styled(Link)`


  margin: 5px;
  width: 18%;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  color: #fafafa;
  text-decoration: none;
  
`;

const Imagen = styled.img`
  width: 100%;
`;
const Contenedor = styled.div`
  width: 100%;
  margin: 5px;

  display: flex;
  justify-content: center;

  flex-direction: column;
`;

const Titulo = styled.h4`
  font-family: "Montserrat Alternates";
  font-size: 14px;
  font-weight: 800;
  margin-left: 5px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Parrafo = styled.p`
  font-family: "Montserrat Alternates";
  font-size: 12px;
`;

const Card = ({ title, poster_path, id, mediaType, character }) => {
 
  return (
    <Tarjeta to={`/${mediaType}/${id}/info`}>
      <Contenedor>
        <Imagen src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
        <Titulo>
          {title}
        {/* mejor asi: {character && <Parrafo>{character}</Parrafo> } */}
          <>{character ? <Parrafo>{character}</Parrafo> : ""}</>
        </Titulo>
      </Contenedor>
    </Tarjeta>
  );
};

export default Card;
