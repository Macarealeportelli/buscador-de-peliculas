import styled from "styled-components";
import { Switch, useParams, Route, useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import Reparto from "./Reparto";
import Video from "./Video";
import Similares from "./Similares";
import Info from "./Info";

const StyledSection = styled.section`
  background-color: rgb(35, 39, 42);
  display: flex;
  flex-direction: column;
  color: #fafafa;
`;

const ImagenBanner = styled.img`
  margin: 0;
  width: 100%;
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

const ContenedorGeneral = styled.div`
  width: 80%;
  margin: 10px;
  display: flex;
  justify-content: space-between;

  font-family: "Montserrat Alternates";
  font-size: 14px;
`;

const Detalle = () => {
  const { mediaType, id } = useParams();

  const URL_INFO = `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=e5c6d9951e2100ef1ce53ed994481153&language=es-ES`;

  const detalles = useFetch(URL_INFO);

  const { path, url } = useRouteMatch();
  console.log(path, url);

  return (
    <>
      <StyledSection>
        <ImagenBanner
          src={`https://image.tmdb.org/t/p/w1280${detalles.backdrop_path}`}
        />

        <BarraNavegacion>
          <StyledLink to={`${url}/info`}>INFO</StyledLink>
          <StyledLink to={`${url}/cast`}>REPARTO</StyledLink>
          <StyledLink to={`${url}/video`}>VIDEOS</StyledLink>
          <StyledLink to={`${url}/similar`}>SIMILARES</StyledLink>
        </BarraNavegacion>

        <Switch>
          <Route path={`${path}/info`} component={Info} />
          <Route path={`${path}/cast`} component={Reparto} />
          <Route path={`${path}/videos`} component={Video} />
          <Route path={`${path}/similar`} component={Similares} />
        </Switch>
        <ContenedorGeneral>
          <Info/>
        </ContenedorGeneral>
      </StyledSection>
    </>
  );
};

export default Detalle;
