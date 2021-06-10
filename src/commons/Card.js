import styled from "styled-components";
import Detalle from "./Detalle";

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
  font-size: 14px;
  font-weight: 800;
  margin-left: 5px;
`;

const handleClickDetalle=(id)=>{
  console.log('me hiceron click', id)
}

const Card = ({ title, poster_path , id}) => {
  // console.log(id)
  return (
   
    <Tarjeta onClick={handleClickDetalle}>
      <Contenedor>
        <Imagen src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
        <Titulo>{title}</Titulo>
      </Contenedor>
    </Tarjeta>
  );
};

export default Card;
