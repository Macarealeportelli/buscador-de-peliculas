import styled from "styled-components";

const Tarjeta = styled.article`
  margin: 5px;
  width: 18%;

  display: flex;

  flex-direction: column;

  color: #fafafa;
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
  font-size: 18px;
  font-weight: 800;
`;

const Card = ({ title, poster_path }) => {
  return (
    <Tarjeta>
      <Contenedor>
        <Imagen src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
        <Titulo>{title}</Titulo>
      </Contenedor>
    </Tarjeta>
  );
};

export default Card;
