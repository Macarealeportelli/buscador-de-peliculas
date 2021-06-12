import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";

const StyledSection = styled.section`
  background-color: rgb(35, 39, 42);
  display: flex;
  flex-direction: column;
  color: #fafafa;
`;

const ContenedorGeneral = styled.div`
  width: 80%;
  height: 800px;
  margin: 10px;
  display: flex;
  justify-content: space-between;

  font-family: "Montserrat Alternates";
  font-size: 14px;
`;

const Videos = () => {
  const { mediaType, id } = useParams();

  const URL_VIDEOS = `https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=e5c6d9951e2100ef1ce53ed994481153&language=es-ES`;

  const videos = useFetch(URL_VIDEOS);

  return (
    <>
      {videos ? (
        <StyledSection>
          <ContenedorGeneral></ContenedorGeneral>
        </StyledSection>
      ) : (
        <h2>NO HAY VIDEOS DISPONIBLES</h2>
      )}
    </>
  );
};

export default Videos;
