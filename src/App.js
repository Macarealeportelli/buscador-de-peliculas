import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";

import Home from "./components/Home.js";
import Peliculas from "./components/Peliculas.js";
import Series from "./components/Series.js";
import Buscador from "./components/Buscador.js";
import PeliculasTendencias from "./components/PeliculasTendencias";
import PeliculasAEstrenar from "./components/PeliculasAEstrenar";
import PeliculasMejoresCriticas from "./components/PeliculasMejoresCriticas";
import PeliculasPopulares from "./components/PeliculasPopulares";
import PeliculasEnCines from "./components/PeliculasEnCines";
import SeriesTendencia from "./components/SeriesTendencia";
import SeriesPopulares from "./components/SeriesPopulares";
import SeriesMejoresCriticas from "./components/SeriesMejoresCriticas";
import SeriesAlAire from "./components/SeriesAlAire";
import Detalle from "./commons/Detalle.js";
import Busqueda from "./components/Busqueda";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faVideo, faTv, faHeart } from "@fortawesome/free-solid-svg-icons";
import Page404 from "./components/Page404.js";

const BarraNavegacion = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  padding: 10px;

  font-size: 30px;

  background-color: black;
  color: #fafafa;

  
  align-items: center;
`;

const Footer = styled.footer`
 width: 100%;
  height: 80px;
  padding: 10px;
  display: flex;
  font-family: "Montserrat Alternates";
  font-size: 18px;
  background-color: black;
  color: #fafafa;
  align-items: center;
  justify-content: center;
  
`

const StyledLink = styled(Link)`
  margin: 20px;
  text-decoration: none;
  &:visited {
    color: #fafafa;
  }
  &:active {
    color: rgb(33, 150, 243);
  }
`;

const Icono = styled.span`
  margin: 5px;
  font-size: 20px;
  color: red;
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <BarraNavegacion>
          <StyledLink to="/">
            <FontAwesomeIcon icon={faHome} />
          </StyledLink>
          <StyledLink to="/peliculas">
            <FontAwesomeIcon icon={faVideo} />
          </StyledLink>
          <StyledLink to="/series">
            <FontAwesomeIcon icon={faTv} />
          </StyledLink>
          <Buscador />
        </BarraNavegacion>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/peliculas" component={Peliculas} />
          <Route exact path="/series" component={Series} />
          <Route
            exact
            path="/search/multi/:valorDelInput"
            component={Busqueda}
          />
          <Route
            exact
            path="/peliculas-tendencias"
            component={PeliculasTendencias}
          />
          <Route
            exact
            path="/peliculas-populares"
            component={PeliculasPopulares}
          />
          <Route
            exact
            path="/peliculas-a-estrenar"
            component={PeliculasAEstrenar}
          />
          <Route
            exact
            path="/peliculas-en-cines"
            component={PeliculasEnCines}
          />
          <Route
            exact
            path="/peliculas-mejores-criticas"
            component={PeliculasMejoresCriticas}
          />
          <Route exact path="/series-tendencias" component={SeriesTendencia} />
          <Route exact path="/series-populares" component={SeriesPopulares} />
          <Route
            exact
            path="/series-mejores-criticas"
            component={SeriesMejoresCriticas}
          />
          <Route exact path="/series-al-aire" component={SeriesAlAire} />
          <Route exaxt path="/:mediaType/:id/info" component={Detalle} />
          <Route  component={Page404} />
        </Switch>
      </BrowserRouter>

      <Footer> Realizado por Maca <Icono><FontAwesomeIcon icon={faHeart}/></Icono> para ADA</Footer>
    </>
  );
}

export default App;
