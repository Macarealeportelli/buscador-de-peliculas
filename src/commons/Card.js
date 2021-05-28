import styled from "styled-components";

const Tarjeta = styled.article`
  margin: 5px;
  padding: 10px;

  width: 250px;
  height: 400px;

  border: solid 1px black;
  display: flex;
  justify-content: center;
  flex-direction: column;

  color: #fafafa;
`;

const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Titulo = styled.h4`
  font-family: "Montserrat Alternates";
  font-size: 20px;
  font-weight: 300;
`;

const Card = ({ title, poster_path }) => {
  return (
    <Tarjeta>
      <Contenedor>
        <img src= "https://image.tmdb.org/t/p/w370_and_h556_bestv2{poster_path}"/>
        <Titulo>{title}</Titulo>
      </Contenedor>
    </Tarjeta>
  );
};

export default Card;
